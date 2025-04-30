import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { getSampleBuilds } from "~/data/components";
import { getCurrentBuild } from "~/utils/session";
import { formatPrice } from "~/utils/build";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Build Guides - AppFit PC Builder" },
    { name: "description", content: "Pre-configured PC build guides for different budgets and use cases" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const sampleBuilds = getSampleBuilds();
  const currentBuild = await getCurrentBuild(request);
  
  // Group builds by category
  const gamingBuilds = sampleBuilds.filter(build => build.name.includes("Gaming"));
  const workstationBuilds = sampleBuilds.filter(build => !build.name.includes("Gaming"));
  
  return json({
    gamingBuilds,
    workstationBuilds,
    currentBuild,
  });
}

export default function GuidesPage() {
  const { gamingBuilds, workstationBuilds, currentBuild } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />
      
      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Build Guides
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Pre-configured PC builds for different budgets and use cases
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gaming / Streaming
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {gamingBuilds.map((build) => (
              <div key={build.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {build.name}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">Price:</span>
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(Object.values(build.components).reduce((sum, component) => sum + component.price, 0))}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(build.components)
                      .filter(([category]) => ['cpu', 'video-card', 'case', 'motherboard'].includes(category))
                      .map(([category, component]) => (
                        <div key={category} className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <img 
                              src={component.image} 
                              alt={component.name} 
                              className="h-6 w-6"
                            />
                          </div>
                          <div className="ml-3 truncate">
                            <p className="text-xs font-medium text-gray-900 truncate">{component.name}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <Link
                      to={`/builds/${build.id}`}
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      View Build Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Workstation / Professional
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {workstationBuilds.map((build) => (
              <div key={build.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {build.name}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">Price:</span>
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(Object.values(build.components).reduce((sum, component) => sum + component.price, 0))}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(build.components)
                      .filter(([category]) => ['cpu', 'video-card', 'case', 'motherboard'].includes(category))
                      .map(([category, component]) => (
                        <div key={category} className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <img 
                              src={component.image} 
                              alt={component.name} 
                              className="h-6 w-6"
                            />
                          </div>
                          <div className="ml-3 truncate">
                            <p className="text-xs font-medium text-gray-900 truncate">{component.name}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <Link
                      to={`/builds/${build.id}`}
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      View Build Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
