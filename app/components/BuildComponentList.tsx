import { Link } from "@remix-run/react";
import type { Build, Component, ComponentCategory } from "~/data/components";
import { formatPrice } from "~/utils/build";

interface BuildComponentListProps {
  build: Build;
  onRemoveComponent?: (category: ComponentCategory) => void;
}

const categoryNames: Record<ComponentCategory, string> = {
  'cpu': 'CPU',
  'cpu-cooler': 'CPU Cooler',
  'motherboard': 'Motherboard',
  'memory': 'Memory',
  'storage': 'Storage',
  'video-card': 'Video Card',
  'case': 'Case',
  'power-supply': 'Power Supply',
  'monitor': 'Monitor',
};

const categoryOrder: ComponentCategory[] = [
  'cpu',
  'cpu-cooler',
  'motherboard',
  'memory',
  'storage',
  'video-card',
  'case',
  'power-supply',
  'monitor',
];

export default function BuildComponentList({ build, onRemoveComponent }: BuildComponentListProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Choose Your Parts
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                  Component
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/6">
                  Selection
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                  Price
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categoryOrder.map((category) => {
                const component = build.components[category];

                return (
                  <tr key={category} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">
                        <Link to={`/components/${category}`} className="hover:underline">
                          {categoryNames[category]}
                        </Link>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      {component ? (
                        <div>
                          <Link
                            to={`/components/${category}/${component.id}`}
                            className="text-sm text-gray-900 hover:text-blue-600 font-medium"
                          >
                            {component.name}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {component.brand} {component.model}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Link
                            to={`/components/${category}`}
                            className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-xs font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                          >
                            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Choose a {categoryNames[category]}
                          </Link>
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap">
                      {component ? (
                        <div className="text-sm font-medium text-gray-900">
                          {formatPrice(component.price)}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">—</div>
                      )}
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {component && onRemoveComponent && (
                        <button
                          onClick={() => onRemoveComponent(category)}
                          className="text-red-600 hover:text-red-800"
                          aria-label={`Remove ${categoryNames[category]}`}
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
