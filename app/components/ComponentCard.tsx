import { Link } from "@remix-run/react";
import type { Component } from "~/data/components";
import { formatPrice } from "~/utils/build";
import { getBestPrice, getTotalPrice } from "~/utils/priceScraper";

interface ComponentCardProps {
  component: Component;
  isInBuild?: boolean;
  onAddToBuild?: (component: Component) => void;
}

export default function ComponentCard({ component, isInBuild = false, onAddToBuild }: ComponentCardProps) {
  const handleAddToBuild = () => {
    if (onAddToBuild) {
      onAddToBuild(component);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <div className="p-4">
        <div className="flex items-center justify-center h-48 bg-gray-50 rounded-md mb-4">
          <img
            src={component.image}
            alt={component.name}
            className="h-40 w-auto object-contain"
          />
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-1 truncate">
          {component.name}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          {component.brand} {component.model}
        </p>

        <div className="flex justify-between items-center mb-4">
          <div>
            {component.retailerPrices && component.retailerPrices.length > 0 ? (
              (() => {
                const bestPrice = getBestPrice(component.retailerPrices);
                if (bestPrice) {
                  return (
                    <div>
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(getTotalPrice(bestPrice))}
                      </span>
                      <div className="text-xs text-gray-500">
                        from {bestPrice.retailer}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(component.price)}
                      </span>
                      <div className="text-xs text-gray-500">MSRP</div>
                    </div>
                  );
                }
              })()
            ) : (
              <div>
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(component.price)}
                </span>
                <div className="text-xs text-gray-500">MSRP</div>
              </div>
            )}
          </div>

          <div className="flex space-x-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {component.category}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/components/${component.category}/${component.id}`}
            className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Details
          </Link>

          {onAddToBuild && (
            <button
              onClick={handleAddToBuild}
              disabled={isInBuild}
              className={`inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                isInBuild
                  ? 'bg-green-100 text-green-800 cursor-default'
                  : 'text-white bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isInBuild ? 'In Build' : 'Add to Build'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
