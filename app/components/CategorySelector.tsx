import { Link, useLocation } from "@remix-run/react";
import type { ComponentCategory } from "~/data/components";

interface CategorySelectorProps {
  activeCategory?: ComponentCategory;
}

interface CategoryInfo {
  id: ComponentCategory;
  name: string;
  icon: React.ReactNode;
}

const categories: CategoryInfo[] = [
  {
    id: 'cpu',
    name: 'CPU',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M13 7H7v6h6V7zm-1 1v4H8V8h4zM6 5h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zm-3 1a1 1 0 112 0v1h1a1 1 0 110 2H5v1a1 1 0 11-2 0V9H2a1 1 0 110-2h1V6zm14 0a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0V9h1a1 1 0 100-2h-1V6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'cpu-cooler',
    name: 'CPU Cooler',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
      </svg>
    ),
  },
  {
    id: 'motherboard',
    name: 'Motherboard',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 1h10v8H5V6zm1 2a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h1a1 1 0 100-2H7zm4-3a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm1 3a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'memory',
    name: 'Memory',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    id: 'storage',
    name: 'Storage',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'video-card',
    name: 'Video Card',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
  },
  {
    id: 'case',
    name: 'Case',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'power-supply',
    name: 'Power Supply',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'monitor',
    name: 'Monitor',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function CategorySelector({ activeCategory }: CategorySelectorProps) {
  const location = useLocation();
  const isInBuildPage = location.pathname.startsWith('/build');
  
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Component Categories
        </h3>
      </div>
      
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={isInBuildPage ? `/components/${category.id}` : `/components/${category.id}`}
                className={`flex items-center px-4 py-4 hover:bg-gray-50 ${
                  activeCategory === category.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className={`flex-shrink-0 ${
                  activeCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {category.icon}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    activeCategory === category.id ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
