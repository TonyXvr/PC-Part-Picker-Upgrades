// This file contains mock data for PC components

export type ComponentCategory = 
  | 'cpu' 
  | 'cpu-cooler' 
  | 'motherboard' 
  | 'memory' 
  | 'storage' 
  | 'video-card' 
  | 'case' 
  | 'power-supply' 
  | 'monitor';

export interface Component {
  id: string;
  category: ComponentCategory;
  name: string;
  brand: string;
  model: string;
  price: number;
  image: string;
  specs: Record<string, string | number | boolean>;
  compatibilityFactors: Record<string, string | number | boolean>;
}

export interface Build {
  id: string;
  name: string;
  components: Partial<Record<ComponentCategory, Component>>;
}

// CPU Components
const cpus: Component[] = [
  {
    id: 'cpu-1',
    category: 'cpu',
    name: 'AMD Ryzen 7 5800X',
    brand: 'AMD',
    model: 'Ryzen 7 5800X',
    price: 299.99,
    image: '/images/components/cpu-amd-ryzen-7.png',
    specs: {
      cores: 8,
      threads: 16,
      baseFrequency: 3.8,
      boostFrequency: 4.7,
      tdp: 105,
      socket: 'AM4',
    },
    compatibilityFactors: {
      socket: 'AM4',
      tdp: 105,
    },
  },
  {
    id: 'cpu-2',
    category: 'cpu',
    name: 'Intel Core i9-12900K',
    brand: 'Intel',
    model: 'Core i9-12900K',
    price: 589.99,
    image: '/images/components/cpu-intel-i9.png',
    specs: {
      cores: 16,
      threads: 24,
      baseFrequency: 3.2,
      boostFrequency: 5.2,
      tdp: 125,
      socket: 'LGA1700',
    },
    compatibilityFactors: {
      socket: 'LGA1700',
      tdp: 125,
    },
  },
  {
    id: 'cpu-3',
    category: 'cpu',
    name: 'AMD Ryzen 5 5600X',
    brand: 'AMD',
    model: 'Ryzen 5 5600X',
    price: 199.99,
    image: '/images/components/cpu-amd-ryzen-5.png',
    specs: {
      cores: 6,
      threads: 12,
      baseFrequency: 3.7,
      boostFrequency: 4.6,
      tdp: 65,
      socket: 'AM4',
    },
    compatibilityFactors: {
      socket: 'AM4',
      tdp: 65,
    },
  },
  {
    id: 'cpu-4',
    category: 'cpu',
    name: 'Intel Core i5-12600K',
    brand: 'Intel',
    model: 'Core i5-12600K',
    price: 279.99,
    image: '/images/components/cpu-intel-i5.png',
    specs: {
      cores: 10,
      threads: 16,
      baseFrequency: 3.7,
      boostFrequency: 4.9,
      tdp: 125,
      socket: 'LGA1700',
    },
    compatibilityFactors: {
      socket: 'LGA1700',
      tdp: 125,
    },
  },
];

// Motherboard Components
const motherboards: Component[] = [
  {
    id: 'mb-1',
    category: 'motherboard',
    name: 'ASUS ROG Strix B550-F Gaming',
    brand: 'ASUS',
    model: 'ROG Strix B550-F Gaming',
    price: 179.99,
    image: '/images/components/mb-asus-rog.png',
    specs: {
      socket: 'AM4',
      chipset: 'B550',
      memorySlots: 4,
      maxMemory: 128,
      memoryType: 'DDR4',
      pciSlots: 3,
      m2Slots: 2,
      sataConnectors: 6,
      formFactor: 'ATX',
    },
    compatibilityFactors: {
      socket: 'AM4',
      memoryType: 'DDR4',
      formFactor: 'ATX',
    },
  },
  {
    id: 'mb-2',
    category: 'motherboard',
    name: 'MSI MPG Z690 Gaming Edge WiFi',
    brand: 'MSI',
    model: 'MPG Z690 Gaming Edge WiFi',
    price: 289.99,
    image: '/images/components/mb-msi-mpg.png',
    specs: {
      socket: 'LGA1700',
      chipset: 'Z690',
      memorySlots: 4,
      maxMemory: 128,
      memoryType: 'DDR5',
      pciSlots: 4,
      m2Slots: 4,
      sataConnectors: 6,
      formFactor: 'ATX',
    },
    compatibilityFactors: {
      socket: 'LGA1700',
      memoryType: 'DDR5',
      formFactor: 'ATX',
    },
  },
  {
    id: 'mb-3',
    category: 'motherboard',
    name: 'Gigabyte B550I AORUS PRO AX',
    brand: 'Gigabyte',
    model: 'B550I AORUS PRO AX',
    price: 199.99,
    image: '/images/components/mb-gigabyte-aorus.png',
    specs: {
      socket: 'AM4',
      chipset: 'B550',
      memorySlots: 2,
      maxMemory: 64,
      memoryType: 'DDR4',
      pciSlots: 1,
      m2Slots: 2,
      sataConnectors: 4,
      formFactor: 'Mini-ITX',
    },
    compatibilityFactors: {
      socket: 'AM4',
      memoryType: 'DDR4',
      formFactor: 'Mini-ITX',
    },
  },
  {
    id: 'mb-4',
    category: 'motherboard',
    name: 'ASUS Prime Z690-A',
    brand: 'ASUS',
    model: 'Prime Z690-A',
    price: 249.99,
    image: '/images/components/mb-asus-prime.png',
    specs: {
      socket: 'LGA1700',
      chipset: 'Z690',
      memorySlots: 4,
      maxMemory: 128,
      memoryType: 'DDR5',
      pciSlots: 3,
      m2Slots: 4,
      sataConnectors: 4,
      formFactor: 'ATX',
    },
    compatibilityFactors: {
      socket: 'LGA1700',
      memoryType: 'DDR5',
      formFactor: 'ATX',
    },
  },
];

// Memory Components
const memory: Component[] = [
  {
    id: 'mem-1',
    category: 'memory',
    name: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3200',
    brand: 'Corsair',
    model: 'Vengeance LPX',
    price: 69.99,
    image: '/images/components/mem-corsair-vengeance.png',
    specs: {
      capacity: 16,
      modules: 2,
      speed: 3200,
      type: 'DDR4',
      casLatency: 16,
    },
    compatibilityFactors: {
      memoryType: 'DDR4',
    },
  },
  {
    id: 'mem-2',
    category: 'memory',
    name: 'G.Skill Trident Z5 RGB 32GB (2 x 16GB) DDR5-6000',
    brand: 'G.Skill',
    model: 'Trident Z5 RGB',
    price: 189.99,
    image: '/images/components/mem-gskill-trident.png',
    specs: {
      capacity: 32,
      modules: 2,
      speed: 6000,
      type: 'DDR5',
      casLatency: 36,
    },
    compatibilityFactors: {
      memoryType: 'DDR5',
    },
  },
  {
    id: 'mem-3',
    category: 'memory',
    name: 'Crucial Ballistix 32GB (2 x 16GB) DDR4-3600',
    brand: 'Crucial',
    model: 'Ballistix',
    price: 149.99,
    image: '/images/components/mem-crucial-ballistix.png',
    specs: {
      capacity: 32,
      modules: 2,
      speed: 3600,
      type: 'DDR4',
      casLatency: 16,
    },
    compatibilityFactors: {
      memoryType: 'DDR4',
    },
  },
  {
    id: 'mem-4',
    category: 'memory',
    name: 'Kingston FURY Beast 32GB (2 x 16GB) DDR5-5200',
    brand: 'Kingston',
    model: 'FURY Beast',
    price: 169.99,
    image: '/images/components/mem-kingston-fury.png',
    specs: {
      capacity: 32,
      modules: 2,
      speed: 5200,
      type: 'DDR5',
      casLatency: 40,
    },
    compatibilityFactors: {
      memoryType: 'DDR5',
    },
  },
];

// Video Card Components
const videoCards: Component[] = [
  {
    id: 'gpu-1',
    category: 'video-card',
    name: 'NVIDIA GeForce RTX 3080',
    brand: 'NVIDIA',
    model: 'GeForce RTX 3080',
    price: 699.99,
    image: '/images/components/gpu-nvidia-3080.png',
    specs: {
      chipset: 'GeForce RTX 3080',
      memory: 10,
      coreClock: 1440,
      boostClock: 1710,
      length: 285,
      tdp: 320,
    },
    compatibilityFactors: {
      pciSlots: 3,
      powerRequirement: 750,
      length: 285,
    },
  },
  {
    id: 'gpu-2',
    category: 'video-card',
    name: 'AMD Radeon RX 6800 XT',
    brand: 'AMD',
    model: 'Radeon RX 6800 XT',
    price: 649.99,
    image: '/images/components/gpu-amd-6800xt.png',
    specs: {
      chipset: 'Radeon RX 6800 XT',
      memory: 16,
      coreClock: 1825,
      boostClock: 2250,
      length: 267,
      tdp: 300,
    },
    compatibilityFactors: {
      pciSlots: 2.5,
      powerRequirement: 750,
      length: 267,
    },
  },
  {
    id: 'gpu-3',
    category: 'video-card',
    name: 'NVIDIA GeForce RTX 3060 Ti',
    brand: 'NVIDIA',
    model: 'GeForce RTX 3060 Ti',
    price: 399.99,
    image: '/images/components/gpu-nvidia-3060ti.png',
    specs: {
      chipset: 'GeForce RTX 3060 Ti',
      memory: 8,
      coreClock: 1410,
      boostClock: 1665,
      length: 242,
      tdp: 200,
    },
    compatibilityFactors: {
      pciSlots: 2,
      powerRequirement: 600,
      length: 242,
    },
  },
  {
    id: 'gpu-4',
    category: 'video-card',
    name: 'AMD Radeon RX 6700 XT',
    brand: 'AMD',
    model: 'Radeon RX 6700 XT',
    price: 479.99,
    image: '/images/components/gpu-amd-6700xt.png',
    specs: {
      chipset: 'Radeon RX 6700 XT',
      memory: 12,
      coreClock: 2321,
      boostClock: 2581,
      length: 267,
      tdp: 230,
    },
    compatibilityFactors: {
      pciSlots: 2,
      powerRequirement: 650,
      length: 267,
    },
  },
];

// Storage Components
const storage: Component[] = [
  {
    id: 'storage-1',
    category: 'storage',
    name: 'Samsung 970 EVO Plus 1TB M.2 NVMe SSD',
    brand: 'Samsung',
    model: '970 EVO Plus',
    price: 119.99,
    image: '/images/components/storage-samsung-970.png',
    specs: {
      capacity: 1000,
      type: 'SSD',
      interface: 'M.2 NVMe',
      readSpeed: 3500,
      writeSpeed: 3300,
      formFactor: 'M.2 2280',
    },
    compatibilityFactors: {
      storageInterface: 'M.2 NVMe',
    },
  },
  {
    id: 'storage-2',
    category: 'storage',
    name: 'Seagate Barracuda 2TB 7200RPM',
    brand: 'Seagate',
    model: 'Barracuda',
    price: 54.99,
    image: '/images/components/storage-seagate-barracuda.png',
    specs: {
      capacity: 2000,
      type: 'HDD',
      interface: 'SATA 6Gb/s',
      rpm: 7200,
      cache: 256,
      formFactor: '3.5"',
    },
    compatibilityFactors: {
      storageInterface: 'SATA',
    },
  },
  {
    id: 'storage-3',
    category: 'storage',
    name: 'Western Digital Black SN850 2TB M.2 NVMe SSD',
    brand: 'Western Digital',
    model: 'Black SN850',
    price: 299.99,
    image: '/images/components/storage-wd-black.png',
    specs: {
      capacity: 2000,
      type: 'SSD',
      interface: 'M.2 NVMe',
      readSpeed: 7000,
      writeSpeed: 5300,
      formFactor: 'M.2 2280',
    },
    compatibilityFactors: {
      storageInterface: 'M.2 NVMe',
    },
  },
  {
    id: 'storage-4',
    category: 'storage',
    name: 'Crucial MX500 1TB SATA SSD',
    brand: 'Crucial',
    model: 'MX500',
    price: 89.99,
    image: '/images/components/storage-crucial-mx500.png',
    specs: {
      capacity: 1000,
      type: 'SSD',
      interface: 'SATA 6Gb/s',
      readSpeed: 560,
      writeSpeed: 510,
      formFactor: '2.5"',
    },
    compatibilityFactors: {
      storageInterface: 'SATA',
    },
  },
];

// Case Components
const cases: Component[] = [
  {
    id: 'case-1',
    category: 'case',
    name: 'NZXT H510',
    brand: 'NZXT',
    model: 'H510',
    price: 69.99,
    image: '/images/components/case-nzxt-h510.png',
    specs: {
      type: 'Mid Tower',
      color: 'Black',
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 6,
    },
    compatibilityFactors: {
      formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      maxGpuLength: 381,
      maxCpuCoolerHeight: 165,
    },
  },
  {
    id: 'case-2',
    category: 'case',
    name: 'Corsair 4000D Airflow',
    brand: 'Corsair',
    model: '4000D Airflow',
    price: 94.99,
    image: '/images/components/case-corsair-4000d.png',
    specs: {
      type: 'Mid Tower',
      color: 'Black',
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 4,
    },
    compatibilityFactors: {
      formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      maxGpuLength: 360,
      maxCpuCoolerHeight: 170,
    },
  },
  {
    id: 'case-3',
    category: 'case',
    name: 'Fractal Design Meshify C',
    brand: 'Fractal Design',
    model: 'Meshify C',
    price: 89.99,
    image: '/images/components/case-fractal-meshify.png',
    specs: {
      type: 'Mid Tower',
      color: 'Black',
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 5,
    },
    compatibilityFactors: {
      formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      maxGpuLength: 315,
      maxCpuCoolerHeight: 172,
    },
  },
  {
    id: 'case-4',
    category: 'case',
    name: 'Lian Li O11 Dynamic',
    brand: 'Lian Li',
    model: 'O11 Dynamic',
    price: 149.99,
    image: '/images/components/case-lianli-o11.png',
    specs: {
      type: 'Mid Tower',
      color: 'White',
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 6,
    },
    compatibilityFactors: {
      formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      maxGpuLength: 420,
      maxCpuCoolerHeight: 155,
    },
  },
];

// Power Supply Components
const powerSupplies: Component[] = [
  {
    id: 'psu-1',
    category: 'power-supply',
    name: 'Corsair RM750x',
    brand: 'Corsair',
    model: 'RM750x',
    price: 124.99,
    image: '/images/components/psu-corsair-rmx.png',
    specs: {
      type: 'ATX',
      wattage: 750,
      efficiency: '80+ Gold',
      modular: 'Full',
    },
    compatibilityFactors: {
      wattage: 750,
    },
  },
  {
    id: 'psu-2',
    category: 'power-supply',
    name: 'EVGA SuperNOVA 850 G5',
    brand: 'EVGA',
    model: 'SuperNOVA 850 G5',
    price: 149.99,
    image: '/images/components/psu-evga-supernova.png',
    specs: {
      type: 'ATX',
      wattage: 850,
      efficiency: '80+ Gold',
      modular: 'Full',
    },
    compatibilityFactors: {
      wattage: 850,
    },
  },
  {
    id: 'psu-3',
    category: 'power-supply',
    name: 'Seasonic FOCUS GX-650',
    brand: 'Seasonic',
    model: 'FOCUS GX-650',
    price: 99.99,
    image: '/images/components/psu-seasonic-focus.png',
    specs: {
      type: 'ATX',
      wattage: 650,
      efficiency: '80+ Gold',
      modular: 'Full',
    },
    compatibilityFactors: {
      wattage: 650,
    },
  },
  {
    id: 'psu-4',
    category: 'power-supply',
    name: 'be quiet! Straight Power 11 750W',
    brand: 'be quiet!',
    model: 'Straight Power 11',
    price: 139.99,
    image: '/images/components/psu-bequiet-straight.png',
    specs: {
      type: 'ATX',
      wattage: 750,
      efficiency: '80+ Gold',
      modular: 'Full',
    },
    compatibilityFactors: {
      wattage: 750,
    },
  },
];

// CPU Cooler Components
const cpuCoolers: Component[] = [
  {
    id: 'cooler-1',
    category: 'cpu-cooler',
    name: 'Noctua NH-D15',
    brand: 'Noctua',
    model: 'NH-D15',
    price: 99.99,
    image: '/images/components/cooler-noctua-nhd15.png',
    specs: {
      type: 'Air',
      fanRPM: '300-1500',
      noise: '24.6',
      height: 165,
    },
    compatibilityFactors: {
      height: 165,
      socket: ['AM4', 'LGA1700', 'LGA1200'],
    },
  },
  {
    id: 'cooler-2',
    category: 'cpu-cooler',
    name: 'Corsair H100i RGB PRO XT',
    brand: 'Corsair',
    model: 'H100i RGB PRO XT',
    price: 119.99,
    image: '/images/components/cooler-corsair-h100i.png',
    specs: {
      type: 'Liquid',
      radiatorSize: 240,
      fanRPM: '400-2400',
      noise: '37',
    },
    compatibilityFactors: {
      radiatorSize: 240,
      socket: ['AM4', 'LGA1700', 'LGA1200'],
    },
  },
  {
    id: 'cooler-3',
    category: 'cpu-cooler',
    name: 'be quiet! Dark Rock Pro 4',
    brand: 'be quiet!',
    model: 'Dark Rock Pro 4',
    price: 89.99,
    image: '/images/components/cooler-bequiet-darkrock.png',
    specs: {
      type: 'Air',
      fanRPM: '1500',
      noise: '24.3',
      height: 162.8,
    },
    compatibilityFactors: {
      height: 162.8,
      socket: ['AM4', 'LGA1700', 'LGA1200'],
    },
  },
  {
    id: 'cooler-4',
    category: 'cpu-cooler',
    name: 'NZXT Kraken X63',
    brand: 'NZXT',
    model: 'Kraken X63',
    price: 149.99,
    image: '/images/components/cooler-nzxt-kraken.png',
    specs: {
      type: 'Liquid',
      radiatorSize: 280,
      fanRPM: '500-2000',
      noise: '38',
    },
    compatibilityFactors: {
      radiatorSize: 280,
      socket: ['AM4', 'LGA1700', 'LGA1200'],
    },
  },
];

// Monitor Components
const monitors: Component[] = [
  {
    id: 'monitor-1',
    category: 'monitor',
    name: 'LG 27GL83A-B 27" 1440p 144Hz',
    brand: 'LG',
    model: '27GL83A-B',
    price: 379.99,
    image: '/images/components/monitor-lg-27gl83a.png',
    specs: {
      size: 27,
      resolution: '2560 x 1440',
      refreshRate: 144,
      panelType: 'IPS',
      responseTime: 1,
      adaptive_sync: 'G-Sync Compatible',
    },
    compatibilityFactors: {},
  },
  {
    id: 'monitor-2',
    category: 'monitor',
    name: 'Samsung Odyssey G7 32" 1440p 240Hz',
    brand: 'Samsung',
    model: 'Odyssey G7',
    price: 699.99,
    image: '/images/components/monitor-samsung-odyssey.png',
    specs: {
      size: 32,
      resolution: '2560 x 1440',
      refreshRate: 240,
      panelType: 'VA',
      responseTime: 1,
      adaptive_sync: 'G-Sync Compatible, FreeSync Premium Pro',
    },
    compatibilityFactors: {},
  },
  {
    id: 'monitor-3',
    category: 'monitor',
    name: 'ASUS TUF Gaming VG259QM 24.5" 1080p 280Hz',
    brand: 'ASUS',
    model: 'TUF Gaming VG259QM',
    price: 319.99,
    image: '/images/components/monitor-asus-tuf.png',
    specs: {
      size: 24.5,
      resolution: '1920 x 1080',
      refreshRate: 280,
      panelType: 'IPS',
      responseTime: 1,
      adaptive_sync: 'G-Sync Compatible',
    },
    compatibilityFactors: {},
  },
  {
    id: 'monitor-4',
    category: 'monitor',
    name: 'Dell S2721DGF 27" 1440p 165Hz',
    brand: 'Dell',
    model: 'S2721DGF',
    price: 399.99,
    image: '/images/components/monitor-dell-s2721dgf.png',
    specs: {
      size: 27,
      resolution: '2560 x 1440',
      refreshRate: 165,
      panelType: 'IPS',
      responseTime: 1,
      adaptive_sync: 'G-Sync Compatible, FreeSync Premium Pro',
    },
    compatibilityFactors: {},
  },
];

// Combine all components
export const components: Component[] = [
  ...cpus,
  ...motherboards,
  ...memory,
  ...videoCards,
  ...storage,
  ...cases,
  ...powerSupplies,
  ...cpuCoolers,
  ...monitors,
];

// Sample builds
export const sampleBuilds: Build[] = [
  {
    id: 'build-1',
    name: 'High-End Gaming PC',
    components: {
      'cpu': cpus[1], // Intel Core i9-12900K
      'motherboard': motherboards[1], // MSI MPG Z690 Gaming Edge WiFi
      'memory': memory[1], // G.Skill Trident Z5 RGB 32GB DDR5-6000
      'video-card': videoCards[0], // NVIDIA GeForce RTX 3080
      'storage': storage[2], // Western Digital Black SN850 2TB
      'case': cases[3], // Lian Li O11 Dynamic
      'power-supply': powerSupplies[1], // EVGA SuperNOVA 850 G5
      'cpu-cooler': cpuCoolers[1], // Corsair H100i RGB PRO XT
    },
  },
  {
    id: 'build-2',
    name: 'Mid-Range Gaming PC',
    components: {
      'cpu': cpus[2], // AMD Ryzen 5 5600X
      'motherboard': motherboards[0], // ASUS ROG Strix B550-F Gaming
      'memory': memory[0], // Corsair Vengeance LPX 16GB DDR4-3200
      'video-card': videoCards[2], // NVIDIA GeForce RTX 3060 Ti
      'storage': storage[0], // Samsung 970 EVO Plus 1TB
      'case': cases[1], // Corsair 4000D Airflow
      'power-supply': powerSupplies[2], // Seasonic FOCUS GX-650
      'cpu-cooler': cpuCoolers[2], // be quiet! Dark Rock Pro 4
    },
  },
];

// Get components by category
export function getComponentsByCategory(category: ComponentCategory): Component[] {
  return components.filter(component => component.category === category);
}

// Get component by ID
export function getComponentById(id: string): Component | undefined {
  return components.find(component => component.id === id);
}

// Get sample builds
export function getSampleBuilds(): Build[] {
  return sampleBuilds;
}

// Check compatibility between components
export function checkCompatibility(build: Partial<Record<ComponentCategory, Component>>): { compatible: boolean; issues: string[] } {
  const issues: string[] = [];

  // Check CPU and Motherboard socket compatibility
  if (build.cpu && build.motherboard) {
    const cpuSocket = build.cpu.compatibilityFactors.socket as string;
    const motherboardSocket = build.motherboard.compatibilityFactors.socket as string;
    
    if (cpuSocket !== motherboardSocket) {
      issues.push(`CPU socket (${cpuSocket}) is not compatible with motherboard socket (${motherboardSocket})`);
    }
  }

  // Check Memory and Motherboard compatibility
  if (build.memory && build.motherboard) {
    const memoryType = build.memory.compatibilityFactors.memoryType as string;
    const motherboardMemoryType = build.motherboard.compatibilityFactors.memoryType as string;
    
    if (memoryType !== motherboardMemoryType) {
      issues.push(`Memory type (${memoryType}) is not compatible with motherboard memory type (${motherboardMemoryType})`);
    }
  }

  // Check Case and Motherboard form factor compatibility
  if (build.case && build.motherboard) {
    const caseFormFactors = build.case.compatibilityFactors.formFactor as string[];
    const motherboardFormFactor = build.motherboard.compatibilityFactors.formFactor as string;
    
    if (!caseFormFactors.includes(motherboardFormFactor)) {
      issues.push(`Motherboard form factor (${motherboardFormFactor}) is not compatible with case supported form factors (${caseFormFactors.join(', ')})`);
    }
  }

  // Check GPU length compatibility with case
  if (build.case && build['video-card']) {
    const maxGpuLength = build.case.compatibilityFactors.maxGpuLength as number;
    const gpuLength = build['video-card'].compatibilityFactors.length as number;
    
    if (gpuLength > maxGpuLength) {
      issues.push(`GPU length (${gpuLength}mm) exceeds case maximum GPU length (${maxGpuLength}mm)`);
    }
  }

  // Check CPU cooler height compatibility with case
  if (build.case && build['cpu-cooler'] && build['cpu-cooler'].specs.type === 'Air') {
    const maxCoolerHeight = build.case.compatibilityFactors.maxCpuCoolerHeight as number;
    const coolerHeight = build['cpu-cooler'].compatibilityFactors.height as number;
    
    if (coolerHeight > maxCoolerHeight) {
      issues.push(`CPU cooler height (${coolerHeight}mm) exceeds case maximum cooler height (${maxCoolerHeight}mm)`);
    }
  }

  // Check power supply wattage is sufficient
  if (build['power-supply'] && build['video-card']) {
    const psuWattage = build['power-supply'].compatibilityFactors.wattage as number;
    const gpuPowerRequirement = build['video-card'].compatibilityFactors.powerRequirement as number;
    
    if (psuWattage < gpuPowerRequirement) {
      issues.push(`Power supply wattage (${psuWattage}W) is less than recommended for GPU (${gpuPowerRequirement}W)`);
    }
  }

  return {
    compatible: issues.length === 0,
    issues,
  };
}

// Calculate total price of a build
export function calculateTotalPrice(build: Partial<Record<ComponentCategory, Component>>): number {
  return Object.values(build).reduce((total, component) => total + component.price, 0);
}
