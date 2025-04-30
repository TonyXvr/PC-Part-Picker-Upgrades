import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";
import tailwindStylesheetUrl from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "icon", href: "/favicon.ico" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    isDarkMode: false, // You can implement dark mode detection here
  });
}

export default function App() {
  const { isDarkMode } = useLoaderData<typeof loader>();
  
  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Error boundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Error | AppFit PC Builder</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-600 mb-6">We're sorry, but an unexpected error has occurred.</p>
              <p className="text-sm text-gray-500 mb-6">{error.message}</p>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

// Not found boundary
export function CatchBoundary() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Not Found | AppFit PC Builder</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-gray-600 mb-6">We're sorry, but the page you're looking for doesn't exist.</p>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
