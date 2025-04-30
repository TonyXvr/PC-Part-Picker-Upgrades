import { json, redirect } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { getComponentsByCategory, ComponentCategory, fetchRetailerPrices } from "~/data/components";
import { getCurrentBuild, saveCurrentBuild } from "~/utils/session";
import { addComponentToBuild } from "~/utils/build";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ComponentCard from "~/components/ComponentCard";
import CategorySelector from "~/components/CategorySelector";

export const meta: MetaFunction = ({ params }) => {
  const categoryName = getCategoryDisplayName(params.category as ComponentCategory);
  return [
    { title: `${categoryName} - AppFit PC Builder` },
    { name: "description", content: `Browse and select ${categoryName} for your PC build` },
  ];
};

function getCategoryDisplayName(category: ComponentCategory): string {
  const displayNames: Record<ComponentCategory, string> = {
    'cpu': 'CPUs',
    'cpu-cooler': 'CPU Coolers',
    'motherboard': 'Motherboards',
    'memory': 'Memory',
    'storage': 'Storage',
    'video-card': 'Video Cards',
    'case': 'Cases',
    'power-supply': 'Power Supplies',
    'monitor': 'Monitors',
  };

  return displayNames[category] || 'Components';
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  const category = params.category as ComponentCategory;

  if (!category) {
    return redirect("/components/cpu");
  }

  const components = getComponentsByCategory(category);
  const currentBuild = await getCurrentBuild(request);

  const currentComponent = currentBuild?.components[category];

  // Fetch retailer prices for all components in parallel
  const componentsWithPrices = await Promise.all(
    components.map(component => fetchRetailerPrices(component))
  );

  return json({
    category,
    components: componentsWithPrices,
    currentBuild,
    currentComponent,
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const componentId = formData.get("componentId") as string;
  const category = params.category as ComponentCategory;

  if (!componentId || !category) {
    return json({ error: "Invalid component or category" }, { status: 400 });
  }

  const components = getComponentsByCategory(category);
  const component = components.find(c => c.id === componentId);

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

export default function ComponentCategoryPage() {
  const { category, components, currentBuild, currentComponent } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleAddToBuild = (componentId: string) => {
    const formData = new FormData();
    formData.append("componentId", componentId);
    submit(formData, { method: "post" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />

      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {getCategoryDisplayName(category)}
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <CategorySelector activeCategory={category} />
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  isInBuild={currentComponent?.id === component.id}
                  onAddToBuild={() => handleAddToBuild(component.id)}
                />
              ))}
            </div>

            {components.length === 0 && (
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <p className="text-gray-500">No components found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
