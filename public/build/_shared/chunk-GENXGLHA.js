import {
  Link
} from "/build/_shared/chunk-7ZASLR5K.js";
import {
  createHotContext
} from "/build/_shared/chunk-U5E2PCIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/data/components.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/components.ts"
  );
  import.meta.hot.lastModified = "1746036131994";
}
var cpus = [
  {
    id: "cpu-1",
    category: "cpu",
    name: "AMD Ryzen 7 5800X",
    brand: "AMD",
    model: "Ryzen 7 5800X",
    price: 299.99,
    image: "/images/components/cpu-amd-ryzen-7.png",
    specs: {
      cores: 8,
      threads: 16,
      baseFrequency: 3.8,
      boostFrequency: 4.7,
      tdp: 105,
      socket: "AM4"
    },
    compatibilityFactors: {
      socket: "AM4",
      tdp: 105
    }
  },
  {
    id: "cpu-2",
    category: "cpu",
    name: "Intel Core i9-12900K",
    brand: "Intel",
    model: "Core i9-12900K",
    price: 589.99,
    image: "/images/components/cpu-intel-i9.png",
    specs: {
      cores: 16,
      threads: 24,
      baseFrequency: 3.2,
      boostFrequency: 5.2,
      tdp: 125,
      socket: "LGA1700"
    },
    compatibilityFactors: {
      socket: "LGA1700",
      tdp: 125
    }
  },
  {
    id: "cpu-3",
    category: "cpu",
    name: "AMD Ryzen 5 5600X",
    brand: "AMD",
    model: "Ryzen 5 5600X",
    price: 199.99,
    image: "/images/components/cpu-amd-ryzen-5.png",
    specs: {
      cores: 6,
      threads: 12,
      baseFrequency: 3.7,
      boostFrequency: 4.6,
      tdp: 65,
      socket: "AM4"
    },
    compatibilityFactors: {
      socket: "AM4",
      tdp: 65
    }
  },
  {
    id: "cpu-4",
    category: "cpu",
    name: "Intel Core i5-12600K",
    brand: "Intel",
    model: "Core i5-12600K",
    price: 279.99,
    image: "/images/components/cpu-intel-i5.png",
    specs: {
      cores: 10,
      threads: 16,
      baseFrequency: 3.7,
      boostFrequency: 4.9,
      tdp: 125,
      socket: "LGA1700"
    },
    compatibilityFactors: {
      socket: "LGA1700",
      tdp: 125
    }
  }
];
var motherboards = [
  {
    id: "mb-1",
    category: "motherboard",
    name: "ASUS ROG Strix B550-F Gaming",
    brand: "ASUS",
    model: "ROG Strix B550-F Gaming",
    price: 179.99,
    image: "/images/components/mb-asus-rog.png",
    specs: {
      socket: "AM4",
      chipset: "B550",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR4",
      pciSlots: 3,
      m2Slots: 2,
      sataConnectors: 6,
      formFactor: "ATX"
    },
    compatibilityFactors: {
      socket: "AM4",
      memoryType: "DDR4",
      formFactor: "ATX"
    }
  },
  {
    id: "mb-2",
    category: "motherboard",
    name: "MSI MPG Z690 Gaming Edge WiFi",
    brand: "MSI",
    model: "MPG Z690 Gaming Edge WiFi",
    price: 289.99,
    image: "/images/components/mb-msi-mpg.png",
    specs: {
      socket: "LGA1700",
      chipset: "Z690",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      pciSlots: 4,
      m2Slots: 4,
      sataConnectors: 6,
      formFactor: "ATX"
    },
    compatibilityFactors: {
      socket: "LGA1700",
      memoryType: "DDR5",
      formFactor: "ATX"
    }
  },
  {
    id: "mb-3",
    category: "motherboard",
    name: "Gigabyte B550I AORUS PRO AX",
    brand: "Gigabyte",
    model: "B550I AORUS PRO AX",
    price: 199.99,
    image: "/images/components/mb-gigabyte-aorus.png",
    specs: {
      socket: "AM4",
      chipset: "B550",
      memorySlots: 2,
      maxMemory: 64,
      memoryType: "DDR4",
      pciSlots: 1,
      m2Slots: 2,
      sataConnectors: 4,
      formFactor: "Mini-ITX"
    },
    compatibilityFactors: {
      socket: "AM4",
      memoryType: "DDR4",
      formFactor: "Mini-ITX"
    }
  },
  {
    id: "mb-4",
    category: "motherboard",
    name: "ASUS Prime Z690-A",
    brand: "ASUS",
    model: "Prime Z690-A",
    price: 249.99,
    image: "/images/components/mb-asus-prime.png",
    specs: {
      socket: "LGA1700",
      chipset: "Z690",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      pciSlots: 3,
      m2Slots: 4,
      sataConnectors: 4,
      formFactor: "ATX"
    },
    compatibilityFactors: {
      socket: "LGA1700",
      memoryType: "DDR5",
      formFactor: "ATX"
    }
  }
];
var memory = [
  {
    id: "mem-1",
    category: "memory",
    name: "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3200",
    brand: "Corsair",
    model: "Vengeance LPX",
    price: 69.99,
    image: "/images/components/mem-corsair-vengeance.png",
    specs: {
      capacity: 16,
      modules: 2,
      speed: 3200,
      type: "DDR4",
      casLatency: 16
    },
    compatibilityFactors: {
      memoryType: "DDR4"
    }
  },
  {
    id: "mem-2",
    category: "memory",
    name: "G.Skill Trident Z5 RGB 32GB (2 x 16GB) DDR5-6000",
    brand: "G.Skill",
    model: "Trident Z5 RGB",
    price: 189.99,
    image: "/images/components/mem-gskill-trident.png",
    specs: {
      capacity: 32,
      modules: 2,
      speed: 6e3,
      type: "DDR5",
      casLatency: 36
    },
    compatibilityFactors: {
      memoryType: "DDR5"
    }
  },
  {
    id: "mem-3",
    category: "memory",
    name: "Crucial Ballistix 32GB (2 x 16GB) DDR4-3600",
    brand: "Crucial",
    model: "Ballistix",
    price: 149.99,
    image: "/images/components/mem-crucial-ballistix.png",
    specs: {
      capacity: 32,
      modules: 2,
      speed: 3600,
      type: "DDR4",
      casLatency: 16
    },
    compatibilityFactors: {
      memoryType: "DDR4"
    }
  },
  {
    id: "mem-4",
    category: "memory",
    name: "Kingston FURY Beast 32GB (2 x 16GB) DDR5-5200",
    brand: "Kingston",
    model: "FURY Beast",
    price: 169.99,
    image: "/images/components/mem-kingston-fury.png",
    specs: {
      capacity: 32,
      modules: 2,
      speed: 5200,
      type: "DDR5",
      casLatency: 40
    },
    compatibilityFactors: {
      memoryType: "DDR5"
    }
  }
];
var videoCards = [
  {
    id: "gpu-1",
    category: "video-card",
    name: "NVIDIA GeForce RTX 3080",
    brand: "NVIDIA",
    model: "GeForce RTX 3080",
    price: 699.99,
    image: "/images/components/gpu-nvidia-3080.png",
    specs: {
      chipset: "GeForce RTX 3080",
      memory: 10,
      coreClock: 1440,
      boostClock: 1710,
      length: 285,
      tdp: 320
    },
    compatibilityFactors: {
      pciSlots: 3,
      powerRequirement: 750,
      length: 285
    }
  },
  {
    id: "gpu-2",
    category: "video-card",
    name: "AMD Radeon RX 6800 XT",
    brand: "AMD",
    model: "Radeon RX 6800 XT",
    price: 649.99,
    image: "/images/components/gpu-amd-6800xt.png",
    specs: {
      chipset: "Radeon RX 6800 XT",
      memory: 16,
      coreClock: 1825,
      boostClock: 2250,
      length: 267,
      tdp: 300
    },
    compatibilityFactors: {
      pciSlots: 2.5,
      powerRequirement: 750,
      length: 267
    }
  },
  {
    id: "gpu-3",
    category: "video-card",
    name: "NVIDIA GeForce RTX 3060 Ti",
    brand: "NVIDIA",
    model: "GeForce RTX 3060 Ti",
    price: 399.99,
    image: "/images/components/gpu-nvidia-3060ti.png",
    specs: {
      chipset: "GeForce RTX 3060 Ti",
      memory: 8,
      coreClock: 1410,
      boostClock: 1665,
      length: 242,
      tdp: 200
    },
    compatibilityFactors: {
      pciSlots: 2,
      powerRequirement: 600,
      length: 242
    }
  },
  {
    id: "gpu-4",
    category: "video-card",
    name: "AMD Radeon RX 6700 XT",
    brand: "AMD",
    model: "Radeon RX 6700 XT",
    price: 479.99,
    image: "/images/components/gpu-amd-6700xt.png",
    specs: {
      chipset: "Radeon RX 6700 XT",
      memory: 12,
      coreClock: 2321,
      boostClock: 2581,
      length: 267,
      tdp: 230
    },
    compatibilityFactors: {
      pciSlots: 2,
      powerRequirement: 650,
      length: 267
    }
  }
];
var storage = [
  {
    id: "storage-1",
    category: "storage",
    name: "Samsung 970 EVO Plus 1TB M.2 NVMe SSD",
    brand: "Samsung",
    model: "970 EVO Plus",
    price: 119.99,
    image: "/images/components/storage-samsung-970.png",
    specs: {
      capacity: 1e3,
      type: "SSD",
      interface: "M.2 NVMe",
      readSpeed: 3500,
      writeSpeed: 3300,
      formFactor: "M.2 2280"
    },
    compatibilityFactors: {
      storageInterface: "M.2 NVMe"
    }
  },
  {
    id: "storage-2",
    category: "storage",
    name: "Seagate Barracuda 2TB 7200RPM",
    brand: "Seagate",
    model: "Barracuda",
    price: 54.99,
    image: "/images/components/storage-seagate-barracuda.png",
    specs: {
      capacity: 2e3,
      type: "HDD",
      interface: "SATA 6Gb/s",
      rpm: 7200,
      cache: 256,
      formFactor: '3.5"'
    },
    compatibilityFactors: {
      storageInterface: "SATA"
    }
  },
  {
    id: "storage-3",
    category: "storage",
    name: "Western Digital Black SN850 2TB M.2 NVMe SSD",
    brand: "Western Digital",
    model: "Black SN850",
    price: 299.99,
    image: "/images/components/storage-wd-black.png",
    specs: {
      capacity: 2e3,
      type: "SSD",
      interface: "M.2 NVMe",
      readSpeed: 7e3,
      writeSpeed: 5300,
      formFactor: "M.2 2280"
    },
    compatibilityFactors: {
      storageInterface: "M.2 NVMe"
    }
  },
  {
    id: "storage-4",
    category: "storage",
    name: "Crucial MX500 1TB SATA SSD",
    brand: "Crucial",
    model: "MX500",
    price: 89.99,
    image: "/images/components/storage-crucial-mx500.png",
    specs: {
      capacity: 1e3,
      type: "SSD",
      interface: "SATA 6Gb/s",
      readSpeed: 560,
      writeSpeed: 510,
      formFactor: '2.5"'
    },
    compatibilityFactors: {
      storageInterface: "SATA"
    }
  }
];
var cases = [
  {
    id: "case-1",
    category: "case",
    name: "NZXT H510",
    brand: "NZXT",
    model: "H510",
    price: 69.99,
    image: "/images/components/case-nzxt-h510.png",
    specs: {
      type: "Mid Tower",
      color: "Black",
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 6
    },
    compatibilityFactors: {
      formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
      maxGpuLength: 381,
      maxCpuCoolerHeight: 165
    }
  },
  {
    id: "case-2",
    category: "case",
    name: "Corsair 4000D Airflow",
    brand: "Corsair",
    model: "4000D Airflow",
    price: 94.99,
    image: "/images/components/case-corsair-4000d.png",
    specs: {
      type: "Mid Tower",
      color: "Black",
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 4
    },
    compatibilityFactors: {
      formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
      maxGpuLength: 360,
      maxCpuCoolerHeight: 170
    }
  },
  {
    id: "case-3",
    category: "case",
    name: "Fractal Design Meshify C",
    brand: "Fractal Design",
    model: "Meshify C",
    price: 89.99,
    image: "/images/components/case-fractal-meshify.png",
    specs: {
      type: "Mid Tower",
      color: "Black",
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 5
    },
    compatibilityFactors: {
      formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
      maxGpuLength: 315,
      maxCpuCoolerHeight: 172
    }
  },
  {
    id: "case-4",
    category: "case",
    name: "Lian Li O11 Dynamic",
    brand: "Lian Li",
    model: "O11 Dynamic",
    price: 149.99,
    image: "/images/components/case-lianli-o11.png",
    specs: {
      type: "Mid Tower",
      color: "White",
      powerSupplyIncluded: false,
      sidePanelWindow: true,
      externalBays: 0,
      internalBays: 6
    },
    compatibilityFactors: {
      formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
      maxGpuLength: 420,
      maxCpuCoolerHeight: 155
    }
  }
];
var powerSupplies = [
  {
    id: "psu-1",
    category: "power-supply",
    name: "Corsair RM750x",
    brand: "Corsair",
    model: "RM750x",
    price: 124.99,
    image: "/images/components/psu-corsair-rmx.png",
    specs: {
      type: "ATX",
      wattage: 750,
      efficiency: "80+ Gold",
      modular: "Full"
    },
    compatibilityFactors: {
      wattage: 750
    }
  },
  {
    id: "psu-2",
    category: "power-supply",
    name: "EVGA SuperNOVA 850 G5",
    brand: "EVGA",
    model: "SuperNOVA 850 G5",
    price: 149.99,
    image: "/images/components/psu-evga-supernova.png",
    specs: {
      type: "ATX",
      wattage: 850,
      efficiency: "80+ Gold",
      modular: "Full"
    },
    compatibilityFactors: {
      wattage: 850
    }
  },
  {
    id: "psu-3",
    category: "power-supply",
    name: "Seasonic FOCUS GX-650",
    brand: "Seasonic",
    model: "FOCUS GX-650",
    price: 99.99,
    image: "/images/components/psu-seasonic-focus.png",
    specs: {
      type: "ATX",
      wattage: 650,
      efficiency: "80+ Gold",
      modular: "Full"
    },
    compatibilityFactors: {
      wattage: 650
    }
  },
  {
    id: "psu-4",
    category: "power-supply",
    name: "be quiet! Straight Power 11 750W",
    brand: "be quiet!",
    model: "Straight Power 11",
    price: 139.99,
    image: "/images/components/psu-bequiet-straight.png",
    specs: {
      type: "ATX",
      wattage: 750,
      efficiency: "80+ Gold",
      modular: "Full"
    },
    compatibilityFactors: {
      wattage: 750
    }
  }
];
var cpuCoolers = [
  {
    id: "cooler-1",
    category: "cpu-cooler",
    name: "Noctua NH-D15",
    brand: "Noctua",
    model: "NH-D15",
    price: 99.99,
    image: "/images/components/cooler-noctua-nhd15.png",
    specs: {
      type: "Air",
      fanRPM: "300-1500",
      noise: "24.6",
      height: 165
    },
    compatibilityFactors: {
      height: 165,
      socket: ["AM4", "LGA1700", "LGA1200"]
    }
  },
  {
    id: "cooler-2",
    category: "cpu-cooler",
    name: "Corsair H100i RGB PRO XT",
    brand: "Corsair",
    model: "H100i RGB PRO XT",
    price: 119.99,
    image: "/images/components/cooler-corsair-h100i.png",
    specs: {
      type: "Liquid",
      radiatorSize: 240,
      fanRPM: "400-2400",
      noise: "37"
    },
    compatibilityFactors: {
      radiatorSize: 240,
      socket: ["AM4", "LGA1700", "LGA1200"]
    }
  },
  {
    id: "cooler-3",
    category: "cpu-cooler",
    name: "be quiet! Dark Rock Pro 4",
    brand: "be quiet!",
    model: "Dark Rock Pro 4",
    price: 89.99,
    image: "/images/components/cooler-bequiet-darkrock.png",
    specs: {
      type: "Air",
      fanRPM: "1500",
      noise: "24.3",
      height: 162.8
    },
    compatibilityFactors: {
      height: 162.8,
      socket: ["AM4", "LGA1700", "LGA1200"]
    }
  },
  {
    id: "cooler-4",
    category: "cpu-cooler",
    name: "NZXT Kraken X63",
    brand: "NZXT",
    model: "Kraken X63",
    price: 149.99,
    image: "/images/components/cooler-nzxt-kraken.png",
    specs: {
      type: "Liquid",
      radiatorSize: 280,
      fanRPM: "500-2000",
      noise: "38"
    },
    compatibilityFactors: {
      radiatorSize: 280,
      socket: ["AM4", "LGA1700", "LGA1200"]
    }
  }
];
var monitors = [
  {
    id: "monitor-1",
    category: "monitor",
    name: 'LG 27GL83A-B 27" 1440p 144Hz',
    brand: "LG",
    model: "27GL83A-B",
    price: 379.99,
    image: "/images/components/monitor-lg-27gl83a.png",
    specs: {
      size: 27,
      resolution: "2560 x 1440",
      refreshRate: 144,
      panelType: "IPS",
      responseTime: 1,
      adaptive_sync: "G-Sync Compatible"
    },
    compatibilityFactors: {}
  },
  {
    id: "monitor-2",
    category: "monitor",
    name: 'Samsung Odyssey G7 32" 1440p 240Hz',
    brand: "Samsung",
    model: "Odyssey G7",
    price: 699.99,
    image: "/images/components/monitor-samsung-odyssey.png",
    specs: {
      size: 32,
      resolution: "2560 x 1440",
      refreshRate: 240,
      panelType: "VA",
      responseTime: 1,
      adaptive_sync: "G-Sync Compatible, FreeSync Premium Pro"
    },
    compatibilityFactors: {}
  },
  {
    id: "monitor-3",
    category: "monitor",
    name: 'ASUS TUF Gaming VG259QM 24.5" 1080p 280Hz',
    brand: "ASUS",
    model: "TUF Gaming VG259QM",
    price: 319.99,
    image: "/images/components/monitor-asus-tuf.png",
    specs: {
      size: 24.5,
      resolution: "1920 x 1080",
      refreshRate: 280,
      panelType: "IPS",
      responseTime: 1,
      adaptive_sync: "G-Sync Compatible"
    },
    compatibilityFactors: {}
  },
  {
    id: "monitor-4",
    category: "monitor",
    name: 'Dell S2721DGF 27" 1440p 165Hz',
    brand: "Dell",
    model: "S2721DGF",
    price: 399.99,
    image: "/images/components/monitor-dell-s2721dgf.png",
    specs: {
      size: 27,
      resolution: "2560 x 1440",
      refreshRate: 165,
      panelType: "IPS",
      responseTime: 1,
      adaptive_sync: "G-Sync Compatible, FreeSync Premium Pro"
    },
    compatibilityFactors: {}
  }
];
var components = [
  ...cpus,
  ...motherboards,
  ...memory,
  ...videoCards,
  ...storage,
  ...cases,
  ...powerSupplies,
  ...cpuCoolers,
  ...monitors
];
var sampleBuilds = [
  {
    id: "build-1",
    name: "High-End Gaming PC",
    components: {
      "cpu": cpus[1],
      // Intel Core i9-12900K
      "motherboard": motherboards[1],
      // MSI MPG Z690 Gaming Edge WiFi
      "memory": memory[1],
      // G.Skill Trident Z5 RGB 32GB DDR5-6000
      "video-card": videoCards[0],
      // NVIDIA GeForce RTX 3080
      "storage": storage[2],
      // Western Digital Black SN850 2TB
      "case": cases[3],
      // Lian Li O11 Dynamic
      "power-supply": powerSupplies[1],
      // EVGA SuperNOVA 850 G5
      "cpu-cooler": cpuCoolers[1]
      // Corsair H100i RGB PRO XT
    }
  },
  {
    id: "build-2",
    name: "Mid-Range Gaming PC",
    components: {
      "cpu": cpus[2],
      // AMD Ryzen 5 5600X
      "motherboard": motherboards[0],
      // ASUS ROG Strix B550-F Gaming
      "memory": memory[0],
      // Corsair Vengeance LPX 16GB DDR4-3200
      "video-card": videoCards[2],
      // NVIDIA GeForce RTX 3060 Ti
      "storage": storage[0],
      // Samsung 970 EVO Plus 1TB
      "case": cases[1],
      // Corsair 4000D Airflow
      "power-supply": powerSupplies[2],
      // Seasonic FOCUS GX-650
      "cpu-cooler": cpuCoolers[2]
      // be quiet! Dark Rock Pro 4
    }
  }
];
function checkCompatibility(build) {
  const issues = [];
  if (build.cpu && build.motherboard) {
    const cpuSocket = build.cpu.compatibilityFactors.socket;
    const motherboardSocket = build.motherboard.compatibilityFactors.socket;
    if (cpuSocket !== motherboardSocket) {
      issues.push(`CPU socket (${cpuSocket}) is not compatible with motherboard socket (${motherboardSocket})`);
    }
  }
  if (build.memory && build.motherboard) {
    const memoryType = build.memory.compatibilityFactors.memoryType;
    const motherboardMemoryType = build.motherboard.compatibilityFactors.memoryType;
    if (memoryType !== motherboardMemoryType) {
      issues.push(`Memory type (${memoryType}) is not compatible with motherboard memory type (${motherboardMemoryType})`);
    }
  }
  if (build.case && build.motherboard) {
    const caseFormFactors = build.case.compatibilityFactors.formFactor;
    const motherboardFormFactor = build.motherboard.compatibilityFactors.formFactor;
    if (!caseFormFactors.includes(motherboardFormFactor)) {
      issues.push(`Motherboard form factor (${motherboardFormFactor}) is not compatible with case supported form factors (${caseFormFactors.join(", ")})`);
    }
  }
  if (build.case && build["video-card"]) {
    const maxGpuLength = build.case.compatibilityFactors.maxGpuLength;
    const gpuLength = build["video-card"].compatibilityFactors.length;
    if (gpuLength > maxGpuLength) {
      issues.push(`GPU length (${gpuLength}mm) exceeds case maximum GPU length (${maxGpuLength}mm)`);
    }
  }
  if (build.case && build["cpu-cooler"] && build["cpu-cooler"].specs.type === "Air") {
    const maxCoolerHeight = build.case.compatibilityFactors.maxCpuCoolerHeight;
    const coolerHeight = build["cpu-cooler"].compatibilityFactors.height;
    if (coolerHeight > maxCoolerHeight) {
      issues.push(`CPU cooler height (${coolerHeight}mm) exceeds case maximum cooler height (${maxCoolerHeight}mm)`);
    }
  }
  if (build["power-supply"] && build["video-card"]) {
    const psuWattage = build["power-supply"].compatibilityFactors.wattage;
    const gpuPowerRequirement = build["video-card"].compatibilityFactors.powerRequirement;
    if (psuWattage < gpuPowerRequirement) {
      issues.push(`Power supply wattage (${psuWattage}W) is less than recommended for GPU (${gpuPowerRequirement}W)`);
    }
  }
  return {
    compatible: issues.length === 0,
    issues
  };
}
function calculateTotalPrice(build) {
  return Object.values(build).reduce((total, component) => total + component.price, 0);
}

// app/utils/build.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/build.ts"
  );
  import.meta.hot.lastModified = "1746036132012";
}
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
}
function getComponentCount(build) {
  return Object.keys(build.components).length;
}
function isBuildComplete(build) {
  const essentialCategories = [
    "cpu",
    "motherboard",
    "memory",
    "storage",
    "case",
    "power-supply"
  ];
  return essentialCategories.every((category) => build.components[category]);
}

// app/components/Header.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1746036577852";
}
function Header({
  currentBuild
}) {
  _s();
  const [isScrolled, setIsScrolled] = (0, import_react2.useState)(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const totalPrice = currentBuild ? calculateTotalPrice(currentBuild.components) : 0;
  const componentCount = currentBuild ? Object.keys(currentBuild.components).length : 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `bg-white ${isScrolled ? "shadow" : ""} sticky top-0 z-10 transition-shadow duration-200`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-auto", src: "/logo-dark.png", alt: "AppFit PC Builder" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-lg font-bold text-gray-900", children: "AppFit PC Builder" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 48,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300", children: "Home" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/components/cpu", className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300", children: "Components" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/builds", className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300", children: "Featured Builds" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/build", className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: currentBuild ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          "Current Build (",
          componentCount,
          ")"
        ] }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 68,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-blue-100", children: formatPrice(totalPrice) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 67,
        columnNumber: 31
      }, this) : "Start New Build" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 77,
          columnNumber: 35
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 80,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 79,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2 pb-3 space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800", onClick: () => setIsMobileMenuOpen(false), children: "Home" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/components/cpu", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800", onClick: () => setIsMobileMenuOpen(false), children: "Components" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/builds", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800", onClick: () => setIsMobileMenuOpen(false), children: "Featured Builds" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/build", className: "block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50", onClick: () => setIsMobileMenuOpen(false), children: currentBuild ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        "Current Build (",
        componentCount,
        ") - ",
        formatPrice(totalPrice)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 100,
        columnNumber: 31
      }, this) : "Start New Build" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 88,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Header, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1746036594348";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-white border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: "About" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4 text-base text-gray-500", children: "AppFit PC Builder helps you build a custom PC by selecting compatible components and comparing prices." }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: "Resources" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Building Guides" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Compatibility FAQ" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Component Benchmarks" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: "Legal" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Terms of Service" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-6 md:order-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "GitHub" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Twitter" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-8 text-base text-gray-400 md:mt-0 md:order-1", children: "\xA9 2023 AppFit PC Builder. All rights reserved." }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  checkCompatibility,
  calculateTotalPrice,
  formatPrice,
  getComponentCount,
  isBuildComplete,
  Header,
  Footer
};
//# sourceMappingURL=/build/_shared/chunk-GENXGLHA.js.map
