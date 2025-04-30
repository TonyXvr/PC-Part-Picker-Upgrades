import { json, redirect } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { getComponentById, ComponentCategory, fetchRetailerPrices } from "~/data/components";
import { getCurrentBuild, saveCurrentBuild } from "~/utils/session";
import { addComponentToBuild } from "~/utils/build";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import CategorySelector from "~/components/CategorySelector";
import { formatPrice } from "~/utils/build";
import { getTotalPrice } from "~/utils/priceScraper";

export const meta: MetaFunction = ({ data }) => {
  if (!data?.component) {
    return [
      { title: "Component Not Found - AppFit PC Builder" },
      { name: "description", content: "The requested component could not be found" },
    ];
  }

  return [
    { title: `${data.component.name} - AppFit PC Builder` },
    { name: "description", content: `View details and specifications for ${data.component.name}` },
  ];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { category, id } = params;

  if (!category || !id) {
    return redirect("/components/cpu");
  }

  const component = getComponentById(id);

  if (!component) {
    throw new Response("Component not found", { status: 404 });
  }

  // Fetch retailer prices for this component
  const componentWithPrices = await fetchRetailerPrices(component);

  const currentBuild = await getCurrentBuild(request);
  const isInBuild = currentBuild?.components[component.category]?.id === component.id;

  return json({
    component: componentWithPrices,
    currentBuild,
    isInBuild,
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const { id } = params;

  if (!id) {
    return json({ error: "Invalid component ID" }, { status: 400 });
  }

  const component = getComponentById(id);

  if (!component) {
    return json({ error: "Component not found" }, { status: 404 });
  }

  const currentBuild = await getCurrentBuild(request);

  if (!currentBuild) {
    return json({ error: "No active build" }, { status: 400 });
  }

  const updatedBuild = addComponentToBuild(currentBuild, component);
  const cookie = await saveCurrentBuild(request, updatedBuild);

  return redirect(`/build`, {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

export default function ComponentDetailPage() {
  const { component, currentBuild, isInBuild } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleAddToBuild = () => {
    submit({}, { method: "post" });
  };

  // Format spec values for display
  const formatSpecValue = (key: string, value: any): string => {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }

    if (typeof value === 'number') {
      // Add units based on the key
      if (key.toLowerCase().includes('frequency') || key.toLowerCase().includes('clock')) {
        return `${value} GHz`;
      }
      if (key.toLowerCase().includes('capacity')) {
        return value >= 1000 ? `${value / 1000} TB` : `${value} GB`;
      }
      if (key.toLowerCase().includes('tdp')) {
        return `${value}W`;
      }
      if (key.toLowerCase().includes('size')) {
        return `${value}"`;
      }
      if (key.toLowerCase().includes('length') || key.toLowerCase().includes('height')) {
        return `${value} mm`;
      }
      if (key.toLowerCase().includes('memory')) {
        return `${value} GB`;
      }
    }

    return String(value);
  };

  // Format spec keys for display
  const formatSpecKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
      .replace(/Tdp/g, 'TDP') // Handle specific acronyms
      .replace(/Rpm/g, 'RPM');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />

      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <CategorySelector activeCategory={component.category as ComponentCategory} />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-900">
                  {component.name}
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  {component.brand} {component.model}
                </p>
              </div>

              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="max-h-64 w-auto object-contain"
                    />
                  </div>

                  <div>
                    <div className="mb-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-2">Price</h2>
                      <p className="text-3xl font-bold text-gray-900">{formatPrice(component.price)}</p>
                      <p className="text-sm text-gray-500 mt-1">MSRP</p>

                      {component.retailerPrices && component.retailerPrices.length > 0 && (
                        <div className="mt-4">
                          <h3 className="text-md font-medium text-gray-900 mb-2">Retailer Prices</h3>
                          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Retailer
                                  </th>
                                  <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                  </th>
                                  <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Shipping
                                  </th>
                                  <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                  </th>
                                  <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Stock
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {component.retailerPrices.map((price, index) => (
                                  <tr key={index} className={!price.inStock ? 'bg-gray-50' : ''}>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                                      <a
                                        href={price.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                      >
                                        {price.retailer}
                                      </a>
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                                      {formatPrice(price.price)}
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                                      {price.shippingCost ? formatPrice(price.shippingCost) : 'Free'}
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                                      {formatPrice(getTotalPrice(price))}
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                                      {price.inStock ? (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                          In Stock
                                        </span>
                                      ) : (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                          Out of Stock
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            Prices last updated: {new Date(component.retailerPrices[0].lastUpdated).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-2">Category</h2>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {component.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleAddToBuild}
                      disabled={isInBuild}
                      className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                        isInBuild
                          ? 'bg-green-100 text-green-800 cursor-default'
                          : 'text-white bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isInBuild ? 'Already In Your Build' : 'Add to Build'}
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Specifications</h2>

                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        {Object.entries(component.specs).map(([key, value]) => (
                          <div key={key} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              {formatSpecKey(key)}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {formatSpecValue(key, value)}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Compatibility Factors</h2>

                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        {Object.entries(component.compatibilityFactors).map(([key, value]) => (
                          <div key={key} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              {formatSpecKey(key)}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {Array.isArray(value)
                                ? value.join(', ')
                                : formatSpecValue(key, value)}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
