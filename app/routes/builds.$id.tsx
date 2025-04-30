import { json, redirect } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { getSampleBuilds, calculateTotalPrice, checkCompatibility } from "~/data/components";
import { getCurrentBuild, saveCurrentBuild } from "~/utils/session";
import { formatPrice, getTotalWattage } from "~/utils/build";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import BuildComponentList from "~/components/BuildComponentList";

export const meta: MetaFunction = ({ data }) => {
  if (!data?.build) {
    return [
      { title: "Build Not Found - AppFit PC Builder" },
      { name: "description", content: "The requested build could not be found" },
    ];
  }
  
  return [
    { title: `${data.build.name} - AppFit PC Builder` },
    { name: "description", content: `View details for the ${data.build.name} PC build` },
  ];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { id } = params;
  
  if (!id) {
    return redirect("/builds");
  }
  
  const sampleBuilds = getSampleBuilds();
  const build = sampleBuilds.find(build => build.id === id);
  
  if (!build) {
    throw new Response("Build not found", { status: 404 });
  }
  
  const currentBuild = await getCurrentBuild(request);
  const totalPrice = calculateTotalPrice(build.components);
  const compatibility = checkCompatibility(build.components);
  const totalWattage = getTotalWattage(build);
  
  return json({
    build,
    currentBuild,
    totalPrice,
    compatibility,
    totalWattage,
  });
}

export async function action({ params, request }: ActionFunctionArgs) {
  const { id } = params;
  
  if (!id) {
    return redirect("/builds");
  }
  
  const sampleBuilds = getSampleBuilds();
  const build = sampleBuilds.find(build => build.id === id);
  
  if (!build) {
    throw new Response("Build not found", { status: 404 });
  }
  
  // Save this build as the current build
  const cookie = await saveCurrentBuild(request, build);
  
  return redirect("/build", {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

export default function BuildDetailPage() {
  const { build, currentBuild, totalPrice, compatibility, totalWattage } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  
  const handleLoadBuild = () => {
    if (window.confirm("This will replace your current build. Are you sure?")) {
      submit({}, { method: "post" });
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />
      
      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {build.name}
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Total Price: {formatPrice(totalPrice)}
          </p>
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
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BuildComponentList build={build} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Build Actions
                </h3>
              </div>
              
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={handleLoadBuild}
                    className="text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Load This Build
                  </button>
                  
                  <button
                    onClick={() => window.print()}
                    className="text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Print Parts List
                  </button>
                  
                  <a
                    href="#"
                    className="text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Purchase Parts
                  </a>
                </div>
                
                {!compatibility.compatible && (
                  <div className="mt-6 p-4 rounded-md bg-red-50">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
