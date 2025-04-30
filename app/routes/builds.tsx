import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { getSampleBuilds } from "~/data/components";
import { getCurrentBuild } from "~/utils/session";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import BuildSummary from "~/components/BuildSummary";

export const meta: MetaFunction = () => {
  return [
    { title: "Featured Builds - AppFit PC Builder" },
    { name: "description", content: "Browse featured PC builds for inspiration" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const sampleBuilds = getSampleBuilds();
  const currentBuild = await getCurrentBuild(request);
  
  return json({
    sampleBuilds,
    currentBuild,
  });
}

export default function BuildsPage() {
  const { sampleBuilds, currentBuild } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />
      
      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          Featured Builds
        </h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sampleBuilds.map((build) => (
            <BuildSummary key={build.id} build={build} />
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About Featured Builds
          </h2>
          <p className="text-gray-600 mb-4">
            Our featured builds are carefully curated by our team of PC building experts. 
            They represent balanced configurations for different use cases and budgets.
          </p>
          <p className="text-gray-600">
            You can use these builds as a starting point for your own custom PC, 
            or modify them to better suit your specific needs and preferences.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
