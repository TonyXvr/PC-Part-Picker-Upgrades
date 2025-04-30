import { Link } from "@remix-run/react";
import type { Build } from "~/data/components";
import { calculateTotalPrice, checkCompatibility } from "~/data/components";
import { formatPrice, getComponentCount, isBuildComplete } from "~/utils/build";

interface BuildSummaryProps {
  build: Build;
  onLoadBuild?: (buildId: string) => void;
  onDeleteBuild?: (buildId: string) => void;
  isSaved?: boolean;
}

export default function BuildSummary({ build, onLoadBuild, onDeleteBuild, isSaved = false }: BuildSummaryProps) {
  const totalPrice = calculateTotalPrice(build.components);
  const compatibility = checkCompatibility(build.components);
  const componentCount = getComponentCount(build);
  const isComplete = isBuildComplete(build);
  
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {build.name}
        </h3>
        
        <div className="flex space-x-2">
          {isSaved && onDeleteBuild && (
            <button
              onClick={() => onDeleteBuild(build.id)}
              className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label="Delete build"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Total Price:</span>
            <span className="text-xl font-bold text-gray-900">{formatPrice(totalPrice)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Component Count:</span>
            <span className="text-sm font-medium text-gray-900">{componentCount} / 9</span>
          </div>
        </div>
        
        <div className={`p-3 rounded-md mb-4 ${compatibility.compatible ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex">
            {compatibility.compatible ? (
              <>
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Compatible</h3>
                </div>
              </>
            ) : (
              <>
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Compatibility issues</h3>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(build.components).slice(0, 4).map(([category, component]) => (
            <div key={category} className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={component.image} alt={component.name} />
              </div>
              <div className="ml-3 truncate">
                <p className="text-sm font-medium text-gray-900 truncate">{component.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {onLoadBuild ? (
            <button
              onClick={() => onLoadBuild(build.id)}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Load Build
            </button>
          ) : (
            <Link
              to={`/build`}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Build Details
            </Link>
          )}
          
          {isComplete && (
            <button
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Purchase Parts
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
