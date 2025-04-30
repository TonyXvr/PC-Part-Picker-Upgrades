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
          Components
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {categoryOrder.map((category) => {
            const component = build.components[category];
            
            return (
              <li key={category} className="px-4 py-4">
                <div className="flex justify-between items-center">
                  <div className="w-1/4">
                    <span className="text-sm font-medium text-gray-900">
                      {categoryNames[category]}
                    </span>
                  </div>
                  
                  {component ? (
                    <>
                      <div className="w-2/4">
                        <Link
                          to={`/components/${category}/${component.id}`}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          {component.name}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {component.brand} {component.model}
                        </p>
                      </div>
                      
                      <div className="w-1/4 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {formatPrice(component.price)}
                        </span>
                        
                        {onRemoveComponent && (
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
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-2/4 text-sm text-gray-500 italic">
                        No component selected
                      </div>
                      
                      <div className="w-1/4 text-right">
                        <Link
                          to={`/components/${category}`}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Add {categoryNames[category]}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
