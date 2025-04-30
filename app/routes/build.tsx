import { json, redirect } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { getCurrentBuild, saveCurrentBuild, clearCurrentBuild } from "~/utils/session";
import { removeComponentFromBuild, updateBuildName, formatPrice, getTotalWattage } from "~/utils/build";
import { calculateTotalPrice, checkCompatibility, ComponentCategory, fetchPricesForBuild } from "~/data/components";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import BuildComponentList from "~/components/BuildComponentList";

export const meta: MetaFunction = () => {
  return [
    { title: "Current Build - AppFit PC Builder" },
    { name: "description", content: "View and edit your current PC build" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const currentBuild = await getCurrentBuild(request);

  if (!currentBuild) {
    return redirect("/");
  }

  // Fetch prices for all components in the build
  const buildWithPrices = await fetchPricesForBuild(currentBuild);

  const totalPrice = calculateTotalPrice(buildWithPrices.components);
  const compatibility = checkCompatibility(buildWithPrices.components);
  const totalWattage = getTotalWattage(buildWithPrices);

  return json({
    currentBuild: buildWithPrices,
    totalPrice,
    compatibility,
    totalWattage,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("_action") as string;

  let currentBuild = await getCurrentBuild(request);
  if (!currentBuild) {
    return redirect("/");
  }

  let cookie;

  switch (action) {
    case "remove-component":
      const category = formData.get("category") as ComponentCategory;
      const updatedBuild = removeComponentFromBuild(currentBuild, category);
      cookie = await saveCurrentBuild(request, updatedBuild);
      break;

    case "update-name":
      const name = formData.get("name") as string;
      const renamedBuild = updateBuildName(currentBuild, name);
      cookie = await saveCurrentBuild(request, renamedBuild);
      break;

    case "clear-build":
      cookie = await clearCurrentBuild(request);
      return redirect("/", {
        headers: {
          "Set-Cookie": cookie,
        },
      });

    default:
      return json({ error: "Invalid action" }, { status: 400 });
  }

  return json({ success: true }, { headers: { "Set-Cookie": cookie } });
}

export default function BuildPage() {
  const { currentBuild, totalPrice, compatibility, totalWattage } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleRemoveComponent = (category: ComponentCategory) => {
    const formData = new FormData();
    formData.append("_action", "remove-component");
    formData.append("category", category);
    submit(formData, { method: "post" });
  };

  const handleUpdateName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("_action", "update-name");
    submit(formData, { method: "post" });
  };

  const handleClearBuild = () => {
    if (window.confirm("Are you sure you want to clear your current build?")) {
      const formData = new FormData();
      formData.append("_action", "clear-build");
      submit(formData, { method: "post" });
    }
  };

  // Generate a shareable URL for the build
  const generateShareableUrl = () => {
    // This would typically encode the build data in a URL or generate a unique ID
    // For now, we'll just copy the current URL
    navigator.clipboard.writeText(window.location.href);
    alert("Build URL copied to clipboard!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />

      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <form onSubmit={handleUpdateName} className="flex items-center">
            <input
              type="text"
              name="name"
              defaultValue={currentBuild.name}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mr-2"
              placeholder="Build Name"
            />
            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Rename
            </button>
          </form>

          <div className="flex space-x-2">
            <button
              onClick={generateShareableUrl}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>

            <button
              onClick={handleClearBuild}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Clear Build
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className={`flex-1 p-4 rounded-md ${compatibility.compatible ? 'bg-green-100' : 'bg-red-100'}`}>
            <div className="flex items-center">
              {compatibility.compatible ? (
                <>
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-green-800">Compatibility: No issues or incompatibilities found.</span>
                </>
              ) : (
                <>
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-red-800">Compatibility: Issues found</span>
                </>
              )}
            </div>
          </div>

          <div className="flex-1 p-4 rounded-md bg-blue-100">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-sm font-medium text-blue-800">Estimated Wattage: {totalWattage}W</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BuildComponentList
              build={currentBuild}
              onRemoveComponent={handleRemoveComponent}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Build Summary
                </h3>
              </div>

              <div className="px-4 py-5 sm:p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-500">Total Price:</span>
                    <span className="text-xl font-bold text-gray-900">{formatPrice(totalPrice)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Component Count:</span>
                    <span className="text-sm font-medium text-gray-900">{Object.keys(currentBuild.components).length} / 9</span>
                  </div>
                </div>

                {!compatibility.compatible && (
                  <div className="p-4 rounded-md mb-4 bg-red-50">
                    <div className="flex">
                      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Compatibility issues detected</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <ul className="list-disc pl-5 space-y-1">
                            {compatibility.issues.map((issue, index) => (
                              <li key={index}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={() => window.print()}
                    className="text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Export Build
                  </button>

                  <button
                    onClick={generateShareableUrl}
                    className="text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Share Build
                  </button>

                  {Object.keys(currentBuild.components).length >= 6 && (
                    <a
                      href="#"
                      className="text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Purchase Parts
                    </a>
                  )}
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
