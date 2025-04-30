import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { getSampleBuilds, getComponentsByCategory } from "~/data/components";
import { getCurrentBuild, ensureBuild } from "~/utils/session";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ComponentCard from "~/components/ComponentCard";
import BuildSummary from "~/components/BuildSummary";

export const meta: MetaFunction = () => {
  return [
    { title: "AppFit PC Builder - Build Your Custom PC" },
    { name: "description", content: "Build your custom PC with our PC part picker tool. Select compatible components and compare prices." },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { build, cookie } = await ensureBuild(request);
  const sampleBuilds = getSampleBuilds();
  const featuredCpus = getComponentsByCategory('cpu').slice(0, 2);
  const featuredGpus = getComponentsByCategory('video-card').slice(0, 2);

  return json(
    {
      currentBuild: build,
      sampleBuilds,
      featuredCpus,
      featuredGpus,
    },
    cookie ? { headers: { "Set-Cookie": cookie } } : undefined
  );
}

export default function Index() {
  const { currentBuild, sampleBuilds, featuredCpus, featuredGpus } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentBuild={currentBuild} />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Build Your Dream PC
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                Select compatible components, compare prices, and create your perfect custom PC build.
              </p>
              <div className="mt-10 flex flex-col items-center">
                <Link
                  to="/build"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg"
                >
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Start Your Build
                </Link>

                <div className="mt-6 flex space-x-4">
                  <Link
                    to="/components/cpu"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70"
                  >
                    Browse Components
                  </Link>
                  <Link
                    to="/guides"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70"
                  >
                    View Build Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Build Your PC in 3 Simple Steps
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">1. Select Components</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Browse our extensive catalog of PC components and select the parts for your build.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">2. Check Compatibility</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our system automatically checks for compatibility issues between your selected components.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">3. Complete Your Build</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Review your build, save it for later, or share it with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Components Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-10">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Featured Components</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Popular CPUs & GPUs
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Featured CPUs</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {featuredCpus.map((cpu) => (
                  <ComponentCard key={cpu.id} component={cpu} />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Featured GPUs</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {featuredGpus.map((gpu) => (
                  <ComponentCard key={gpu.id} component={gpu} />
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/components/cpu"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Browse All Components
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Builds Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-10">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Featured Builds</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Pre-configured PC Builds
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {sampleBuilds.map((build) => (
                <BuildSummary key={build.id} build={build} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/builds"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View All Featured Builds
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
