import { Component, ComponentCategory, Build } from "~/data/components";

// Create a new empty build
export function createEmptyBuild(): Build {
  return {
    id: `build-${Date.now()}`,
    name: 'New Build',
    components: {},
  };
}

// Add a component to a build
export function addComponentToBuild(build: Build, component: Component): Build {
  return {
    ...build,
    components: {
      ...build.components,
      [component.category]: component,
    },
  };
}

// Remove a component from a build
export function removeComponentFromBuild(build: Build, category: ComponentCategory): Build {
  const newComponents = { ...build.components };
  delete newComponents[category];
  
  return {
    ...build,
    components: newComponents,
  };
}

// Update build name
export function updateBuildName(build: Build, name: string): Build {
  return {
    ...build,
    name,
  };
}

// Get the total wattage requirement for a build
export function getTotalWattage(build: Build): number {
  let totalWattage = 0;
  
  // Add CPU TDP
  if (build.components.cpu) {
    totalWattage += build.components.cpu.specs.tdp as number;
  }
  
  // Add GPU TDP
  if (build.components['video-card']) {
    totalWattage += build.components['video-card'].specs.tdp as number;
  }
  
  // Add base system wattage (motherboard, memory, storage, fans)
  totalWattage += 100;
  
  return totalWattage;
}

// Format price as currency
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

// Get component count in a build
export function getComponentCount(build: Build): number {
  return Object.keys(build.components).length;
}

// Check if a build is complete (has all essential components)
export function isBuildComplete(build: Build): boolean {
  const essentialCategories: ComponentCategory[] = [
    'cpu',
    'motherboard',
    'memory',
    'storage',
    'case',
    'power-supply',
  ];
  
  return essentialCategories.every(category => build.components[category]);
}
