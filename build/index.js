var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData
} from "@remix-run/react";
import { useEffect } from "react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-BOS3TDWS.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "icon", href: "/favicon.ico" }
];
async function loader({ request }) {
  return json({
    isDarkMode: !1
    // You can implement dark mode detection here
  });
}
function App() {
  let { isDarkMode } = useLoaderData();
  return useEffect(() => {
    isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [isDarkMode]), /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: isDarkMode ? "dark" : "", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("title", { children: "Error | AppFit PC Builder" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-100", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-md w-full bg-white shadow-lg rounded-lg p-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV2("h1", { className: "text-3xl font-bold text-red-600 mb-4", children: "Oops! Something went wrong" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { className: "text-gray-600 mb-6", children: "We're sorry, but an unexpected error has occurred." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { className: "text-sm text-gray-500 mb-6", children: error.message }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2(
          "a",
          {
            href: "/",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: "Return to Home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 78,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("title", { children: "Not Found | AppFit PC Builder" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-100", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-md w-full bg-white shadow-lg rounded-lg p-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV2("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Page Not Found" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { className: "text-gray-600 mb-6", children: "We're sorry, but the page you're looking for doesn't exist." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2(
          "a",
          {
            href: "/",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: "Return to Home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 110,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/components.$category.$id.tsx
var components_category_id_exports = {};
__export(components_category_id_exports, {
  action: () => action,
  default: () => ComponentDetailPage,
  loader: () => loader2,
  meta: () => meta
});
import { json as json2, redirect as redirect2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, useSubmit } from "@remix-run/react";

// app/data/components.ts
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
], motherboards = [
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
], memory = [
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
], videoCards = [
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
], storage = [
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
], cases = [
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
      powerSupplyIncluded: !1,
      sidePanelWindow: !0,
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
      powerSupplyIncluded: !1,
      sidePanelWindow: !0,
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
      powerSupplyIncluded: !1,
      sidePanelWindow: !0,
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
      powerSupplyIncluded: !1,
      sidePanelWindow: !0,
      externalBays: 0,
      internalBays: 6
    },
    compatibilityFactors: {
      formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
      maxGpuLength: 420,
      maxCpuCoolerHeight: 155
    }
  }
], powerSupplies = [
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
], cpuCoolers = [
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
], monitors = [
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
], components = [
  ...cpus,
  ...motherboards,
  ...memory,
  ...videoCards,
  ...storage,
  ...cases,
  ...powerSupplies,
  ...cpuCoolers,
  ...monitors
], sampleBuilds = [
  {
    id: "build-1",
    name: "High-End Gaming PC",
    components: {
      cpu: cpus[1],
      // Intel Core i9-12900K
      motherboard: motherboards[1],
      // MSI MPG Z690 Gaming Edge WiFi
      memory: memory[1],
      // G.Skill Trident Z5 RGB 32GB DDR5-6000
      "video-card": videoCards[0],
      // NVIDIA GeForce RTX 3080
      storage: storage[2],
      // Western Digital Black SN850 2TB
      case: cases[3],
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
      cpu: cpus[2],
      // AMD Ryzen 5 5600X
      motherboard: motherboards[0],
      // ASUS ROG Strix B550-F Gaming
      memory: memory[0],
      // Corsair Vengeance LPX 16GB DDR4-3200
      "video-card": videoCards[2],
      // NVIDIA GeForce RTX 3060 Ti
      storage: storage[0],
      // Samsung 970 EVO Plus 1TB
      case: cases[1],
      // Corsair 4000D Airflow
      "power-supply": powerSupplies[2],
      // Seasonic FOCUS GX-650
      "cpu-cooler": cpuCoolers[2]
      // be quiet! Dark Rock Pro 4
    }
  }
];
function getComponentsByCategory(category) {
  return components.filter((component) => component.category === category);
}
function getComponentById(id) {
  return components.find((component) => component.id === id);
}
function getSampleBuilds() {
  return sampleBuilds;
}
function checkCompatibility(build) {
  let issues = [];
  if (build.cpu && build.motherboard) {
    let cpuSocket = build.cpu.compatibilityFactors.socket, motherboardSocket = build.motherboard.compatibilityFactors.socket;
    cpuSocket !== motherboardSocket && issues.push(`CPU socket (${cpuSocket}) is not compatible with motherboard socket (${motherboardSocket})`);
  }
  if (build.memory && build.motherboard) {
    let memoryType = build.memory.compatibilityFactors.memoryType, motherboardMemoryType = build.motherboard.compatibilityFactors.memoryType;
    memoryType !== motherboardMemoryType && issues.push(`Memory type (${memoryType}) is not compatible with motherboard memory type (${motherboardMemoryType})`);
  }
  if (build.case && build.motherboard) {
    let caseFormFactors = build.case.compatibilityFactors.formFactor, motherboardFormFactor = build.motherboard.compatibilityFactors.formFactor;
    caseFormFactors.includes(motherboardFormFactor) || issues.push(`Motherboard form factor (${motherboardFormFactor}) is not compatible with case supported form factors (${caseFormFactors.join(", ")})`);
  }
  if (build.case && build["video-card"]) {
    let maxGpuLength = build.case.compatibilityFactors.maxGpuLength, gpuLength = build["video-card"].compatibilityFactors.length;
    gpuLength > maxGpuLength && issues.push(`GPU length (${gpuLength}mm) exceeds case maximum GPU length (${maxGpuLength}mm)`);
  }
  if (build.case && build["cpu-cooler"] && build["cpu-cooler"].specs.type === "Air") {
    let maxCoolerHeight = build.case.compatibilityFactors.maxCpuCoolerHeight, coolerHeight = build["cpu-cooler"].compatibilityFactors.height;
    coolerHeight > maxCoolerHeight && issues.push(`CPU cooler height (${coolerHeight}mm) exceeds case maximum cooler height (${maxCoolerHeight}mm)`);
  }
  if (build["power-supply"] && build["video-card"]) {
    let psuWattage = build["power-supply"].compatibilityFactors.wattage, gpuPowerRequirement = build["video-card"].compatibilityFactors.powerRequirement;
    psuWattage < gpuPowerRequirement && issues.push(`Power supply wattage (${psuWattage}W) is less than recommended for GPU (${gpuPowerRequirement}W)`);
  }
  return {
    compatible: issues.length === 0,
    issues
  };
}
function calculateTotalPrice(build) {
  return Object.values(build).reduce((total, component) => total + component.price, 0);
}

// app/utils/session.ts
import { createCookieSessionStorage } from "@remix-run/node";

// app/utils/build.ts
function createEmptyBuild() {
  return {
    id: `build-${Date.now()}`,
    name: "New Build",
    components: {}
  };
}
function addComponentToBuild(build, component) {
  return {
    ...build,
    components: {
      ...build.components,
      [component.category]: component
    }
  };
}
function removeComponentFromBuild(build, category) {
  let newComponents = { ...build.components };
  return delete newComponents[category], {
    ...build,
    components: newComponents
  };
}
function updateBuildName(build, name) {
  return {
    ...build,
    name
  };
}
function getTotalWattage(build) {
  let totalWattage = 0;
  return build.components.cpu && (totalWattage += build.components.cpu.specs.tdp), build.components["video-card"] && (totalWattage += build.components["video-card"].specs.tdp), totalWattage += 100, totalWattage;
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
  return [
    "cpu",
    "motherboard",
    "memory",
    "storage",
    "case",
    "power-supply"
  ].every((category) => build.components[category]);
}

// app/utils/session.ts
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "pc_builder_session",
    secrets: ["s3cr3t"],
    // In production, use environment variables
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    // 30 days
    httpOnly: !0,
    secure: !1
  }
});
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getCurrentBuild(request) {
  let buildJson = (await getSession(request)).get("currentBuild");
  return buildJson ? JSON.parse(buildJson) : null;
}
async function saveCurrentBuild(request, build) {
  let session = await getSession(request);
  return session.set("currentBuild", JSON.stringify(build)), sessionStorage.commitSession(session);
}
async function clearCurrentBuild(request) {
  let session = await getSession(request);
  return session.unset("currentBuild"), sessionStorage.commitSession(session);
}
async function ensureBuild(request) {
  let currentBuild = await getCurrentBuild(request);
  if (currentBuild)
    return { build: currentBuild };
  let newBuild = createEmptyBuild(), cookie = await saveCurrentBuild(request, newBuild);
  return { build: newBuild, cookie };
}

// app/components/Header.tsx
import { Link } from "@remix-run/react";
import { useEffect as useEffect2, useState } from "react";
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Header({ currentBuild }) {
  let [isScrolled, setIsScrolled] = useState(!1), [isMobileMenuOpen, setIsMobileMenuOpen] = useState(!1);
  useEffect2(() => {
    let handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, []);
  let totalPrice = currentBuild ? calculateTotalPrice(currentBuild.components) : 0, componentCount = currentBuild ? Object.keys(currentBuild.components).length : 0;
  return /* @__PURE__ */ jsxDEV3("header", { className: `bg-white ${isScrolled ? "shadow" : ""} sticky top-0 z-10 transition-shadow duration-200`, children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV3(
            "img",
            {
              className: "h-8 w-auto",
              src: "/logo-dark.png",
              alt: "AppFit PC Builder"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 34,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3("span", { className: "ml-2 text-lg font-bold text-gray-900", children: "AppFit PC Builder" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("nav", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV3(
            Link,
            {
              to: "/",
              className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: "Home"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            Link,
            {
              to: "/components/cpu",
              className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: "Components"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 50,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            Link,
            {
              to: "/builds",
              className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: "Featured Builds"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 56,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            Link,
            {
              to: "/guides",
              className: "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: "Build Guides"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 62,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ jsxDEV3(
        Link,
        {
          to: "/build",
          className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          children: currentBuild ? /* @__PURE__ */ jsxDEV3(Fragment, { children: [
            /* @__PURE__ */ jsxDEV3("span", { children: [
              "Current Build (",
              componentCount,
              ")"
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV3("span", { className: "ml-2 text-blue-100", children: formatPrice(totalPrice) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this) : "Start New Build"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 72,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsxDEV3(
        "button",
        {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
          children: [
            /* @__PURE__ */ jsxDEV3("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this),
            isMobileMenuOpen ? /* @__PURE__ */ jsxDEV3("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV3("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 99,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ jsxDEV3("div", { className: "sm:hidden", children: /* @__PURE__ */ jsxDEV3("div", { className: "pt-2 pb-3 space-y-1", children: [
      /* @__PURE__ */ jsxDEV3(
        Link,
        {
          to: "/",
          className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
          onClick: () => setIsMobileMenuOpen(!1),
          children: "Home"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 111,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        Link,
        {
          to: "/components/cpu",
          className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
          onClick: () => setIsMobileMenuOpen(!1),
          children: "Components"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 118,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        Link,
        {
          to: "/builds",
          className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
          onClick: () => setIsMobileMenuOpen(!1),
          children: "Featured Builds"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 125,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        Link,
        {
          to: "/guides",
          className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
          onClick: () => setIsMobileMenuOpen(!1),
          children: "Build Guides"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 132,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        Link,
        {
          to: "/build",
          className: "block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50",
          onClick: () => setIsMobileMenuOpen(!1),
          children: currentBuild ? /* @__PURE__ */ jsxDEV3(Fragment, { children: [
            "Current Build (",
            componentCount,
            ") - ",
            formatPrice(totalPrice)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this) : "Start New Build"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 139,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV4("footer", { className: "bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: "About" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 7,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "mt-4 text-base text-gray-500", children: "AppFit PC Builder helps you build a custom PC by selecting compatible components and comparing prices." }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 10,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 6,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: "Resources" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("ul", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Building Guides" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Compatibility FAQ" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 26,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Component Benchmarks" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: "Legal" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("ul", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Privacy Policy" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-base text-gray-500 hover:text-gray-900", children: "Terms of Service" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex space-x-6 md:order-2", children: [
        /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "sr-only", children: "GitHub" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV4("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "sr-only", children: "Twitter" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV4("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-8 text-base text-gray-400 md:mt-0 md:order-1", children: "\xA9 2023 AppFit PC Builder. All rights reserved." }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/CategorySelector.tsx
import { Link as Link2, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var categories = [
  {
    id: "cpu",
    name: "CPU",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M13 7H7v6h6V7zm-1 1v4H8V8h4zM6 5h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zm-3 1a1 1 0 112 0v1h1a1 1 0 110 2H5v1a1 1 0 11-2 0V9H2a1 1 0 110-2h1V6zm14 0a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0V9h1a1 1 0 100-2h-1V6z", clipRule: "evenodd" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  },
  {
    id: "cpu-cooler",
    name: "CPU Cooler",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  },
  {
    id: "motherboard",
    name: "Motherboard",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 1h10v8H5V6zm1 2a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h1a1 1 0 100-2H7zm4-3a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm1 3a1 1 0 100 2h1a1 1 0 100-2h-1z", clipRule: "evenodd" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  },
  {
    id: "memory",
    name: "Memory",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  },
  {
    id: "storage",
    name: "Storage",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z", clipRule: "evenodd" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  },
  {
    id: "video-card",
    name: "Video Card",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  },
  {
    id: "case",
    name: "Case",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z", clipRule: "evenodd" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  },
  {
    id: "power-supply",
    name: "Power Supply",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", clipRule: "evenodd" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  },
  {
    id: "monitor",
    name: "Monitor",
    icon: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z", clipRule: "evenodd" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }
];
function CategorySelector({ activeCategory }) {
  let isInBuildPage = useLocation().pathname.startsWith("/build");
  return /* @__PURE__ */ jsxDEV5("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: /* @__PURE__ */ jsxDEV5("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Component Categories" }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "border-t border-gray-200", children: /* @__PURE__ */ jsxDEV5("ul", { className: "divide-y divide-gray-200", children: categories.map((category) => /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
      Link2,
      {
        to: isInBuildPage ? `/components/${category.id}` : `/components/${category.id}`,
        className: `flex items-center px-4 py-4 hover:bg-gray-50 ${activeCategory === category.id ? "bg-blue-50" : ""}`,
        children: [
          /* @__PURE__ */ jsxDEV5("div", { className: `flex-shrink-0 ${activeCategory === category.id ? "text-blue-600" : "text-gray-400"}`, children: category.icon }, void 0, !1, {
            fileName: "app/components/CategorySelector.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV5("p", { className: `text-sm font-medium ${activeCategory === category.id ? "text-blue-600" : "text-gray-900"}`, children: category.name }, void 0, !1, {
            fileName: "app/components/CategorySelector.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/CategorySelector.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/CategorySelector.tsx",
        lineNumber: 114,
        columnNumber: 15
      },
      this
    ) }, category.id, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CategorySelector.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CategorySelector.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

// app/routes/components.$category.$id.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta = ({ data }) => data?.component ? [
  { title: `${data.component.name} - AppFit PC Builder` },
  { name: "description", content: `View details and specifications for ${data.component.name}` }
] : [
  { title: "Component Not Found - AppFit PC Builder" },
  { name: "description", content: "The requested component could not be found" }
];
async function loader2({ params, request }) {
  let { category, id } = params;
  if (!category || !id)
    return redirect2("/components/cpu");
  let component = getComponentById(id);
  if (!component)
    throw new Response("Component not found", { status: 404 });
  let currentBuild = await getCurrentBuild(request), isInBuild = currentBuild?.components[component.category]?.id === component.id;
  return json2({
    component,
    currentBuild,
    isInBuild
  });
}
async function action({ request, params }) {
  let { id } = params;
  if (!id)
    return json2({ error: "Invalid component ID" }, { status: 400 });
  let component = getComponentById(id);
  if (!component)
    return json2({ error: "Component not found" }, { status: 404 });
  let currentBuild = await getCurrentBuild(request);
  if (!currentBuild)
    return json2({ error: "No active build" }, { status: 400 });
  let updatedBuild = addComponentToBuild(currentBuild, component), cookie = await saveCurrentBuild(request, updatedBuild);
  return redirect2("/build", {
    headers: {
      "Set-Cookie": cookie
    }
  });
}
function ComponentDetailPage() {
  let { component, currentBuild, isInBuild } = useLoaderData2(), submit = useSubmit(), handleAddToBuild = () => {
    submit({}, { method: "post" });
  }, formatSpecValue = (key, value) => {
    if (typeof value == "boolean")
      return value ? "Yes" : "No";
    if (typeof value == "number") {
      if (key.toLowerCase().includes("frequency") || key.toLowerCase().includes("clock"))
        return `${value} GHz`;
      if (key.toLowerCase().includes("capacity"))
        return value >= 1e3 ? `${value / 1e3} TB` : `${value} GB`;
      if (key.toLowerCase().includes("tdp"))
        return `${value}W`;
      if (key.toLowerCase().includes("size"))
        return `${value}"`;
      if (key.toLowerCase().includes("length") || key.toLowerCase().includes("height"))
        return `${value} mm`;
      if (key.toLowerCase().includes("memory"))
        return `${value} GB`;
    }
    return String(value);
  }, formatSpecKey = (key) => key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).replace(/Tdp/g, "TDP").replace(/Rpm/g, "RPM");
  return /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV6(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV6(CategorySelector, { activeCategory: component.category }, void 0, !1, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxDEV6("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: [
          /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold text-gray-900", children: component.name }, void 0, !1, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-sm text-gray-500", children: [
            component.brand,
            " ",
            component.model
          ] }, void 0, !0, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 142,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/components.$category.$id.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center justify-center bg-gray-50 rounded-lg p-6", children: /* @__PURE__ */ jsxDEV6(
              "img",
              {
                src: component.image,
                alt: component.name,
                className: "max-h-64 w-auto object-contain"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 150,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxDEV6("h2", { className: "text-lg font-medium text-gray-900 mb-2", children: "Price" }, void 0, !1, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 159,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("p", { className: "text-3xl font-bold text-gray-900", children: formatPrice(component.price) }, void 0, !1, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 160,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 158,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxDEV6("h2", { className: "text-lg font-medium text-gray-900 mb-2", children: "Category" }, void 0, !1, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 164,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("div", { className: "flex", children: /* @__PURE__ */ jsxDEV6("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800", children: component.category }, void 0, !1, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 166,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 165,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 163,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6(
                "button",
                {
                  onClick: handleAddToBuild,
                  disabled: isInBuild,
                  className: `w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${isInBuild ? "bg-green-100 text-green-800 cursor-default" : "text-white bg-blue-600 hover:bg-blue-700"}`,
                  children: isInBuild ? "Already In Your Build" : "Add to Build"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 172,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 157,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Specifications" }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "bg-gray-50 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxDEV6("div", { className: "border-t border-gray-200 px-4 py-5 sm:p-0", children: /* @__PURE__ */ jsxDEV6("dl", { className: "sm:divide-y sm:divide-gray-200", children: Object.entries(component.specs).map(([key, value]) => /* @__PURE__ */ jsxDEV6("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
              /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500", children: formatSpecKey(key) }, void 0, !1, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 194,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2", children: formatSpecValue(key, value) }, void 0, !1, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 197,
                columnNumber: 29
              }, this)
            ] }, key, !0, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 193,
              columnNumber: 27
            }, this)) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 191,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Compatibility Factors" }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 208,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "bg-gray-50 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxDEV6("div", { className: "border-t border-gray-200 px-4 py-5 sm:p-0", children: /* @__PURE__ */ jsxDEV6("dl", { className: "sm:divide-y sm:divide-gray-200", children: Object.entries(component.compatibilityFactors).map(([key, value]) => /* @__PURE__ */ jsxDEV6("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
              /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500", children: formatSpecKey(key) }, void 0, !1, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 215,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2", children: Array.isArray(value) ? value.join(", ") : formatSpecValue(key, value) }, void 0, !1, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 218,
                columnNumber: 29
              }, this)
            ] }, key, !0, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 214,
              columnNumber: 27
            }, this)) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 212,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 210,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 207,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/components.$category.$id.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Footer, {}, void 0, !1, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/components.$category.$id.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

// app/routes/components.$category.tsx
var components_category_exports = {};
__export(components_category_exports, {
  action: () => action2,
  default: () => ComponentCategoryPage,
  loader: () => loader3,
  meta: () => meta2
});
import { json as json3, redirect as redirect3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3, useSubmit as useSubmit2 } from "@remix-run/react";

// app/components/ComponentCard.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ComponentCard({ component, isInBuild = !1, onAddToBuild }) {
  let handleAddToBuild = () => {
    onAddToBuild && onAddToBuild(component);
  };
  return /* @__PURE__ */ jsxDEV7("div", { className: "bg-white shadow rounded-lg overflow-hidden transition-all hover:shadow-lg", children: /* @__PURE__ */ jsxDEV7("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center justify-center h-48 bg-gray-50 rounded-md mb-4", children: /* @__PURE__ */ jsxDEV7(
      "img",
      {
        src: component.image,
        alt: component.name,
        className: "h-40 w-auto object-contain"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("h3", { className: "text-lg font-medium text-gray-900 mb-1 truncate", children: component.name }, void 0, !1, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "text-sm text-gray-500 mb-2", children: [
      component.brand,
      " ",
      component.model
    ] }, void 0, !0, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxDEV7("span", { className: "text-xl font-bold text-gray-900", children: formatPrice(component.price) }, void 0, !1, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "flex space-x-1", children: /* @__PURE__ */ jsxDEV7("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: component.category }, void 0, !1, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxDEV7(
        Link3,
        {
          to: `/components/${component.category}/${component.id}`,
          className: "inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
          children: "Details"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ComponentCard.tsx",
          lineNumber: 50,
          columnNumber: 11
        },
        this
      ),
      onAddToBuild && /* @__PURE__ */ jsxDEV7(
        "button",
        {
          onClick: handleAddToBuild,
          disabled: isInBuild,
          className: `inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${isInBuild ? "bg-green-100 text-green-800 cursor-default" : "text-white bg-blue-600 hover:bg-blue-700"}`,
          children: isInBuild ? "In Build" : "Add to Build"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ComponentCard.tsx",
          lineNumber: 58,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ComponentCard.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ComponentCard.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/components.$category.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta2 = ({ params }) => {
  let categoryName = getCategoryDisplayName(params.category);
  return [
    { title: `${categoryName} - AppFit PC Builder` },
    { name: "description", content: `Browse and select ${categoryName} for your PC build` }
  ];
};
function getCategoryDisplayName(category) {
  return {
    cpu: "CPUs",
    "cpu-cooler": "CPU Coolers",
    motherboard: "Motherboards",
    memory: "Memory",
    storage: "Storage",
    "video-card": "Video Cards",
    case: "Cases",
    "power-supply": "Power Supplies",
    monitor: "Monitors"
  }[category] || "Components";
}
async function loader3({ params, request }) {
  let category = params.category;
  if (!category)
    return redirect3("/components/cpu");
  let components2 = getComponentsByCategory(category), currentBuild = await getCurrentBuild(request), currentComponent = currentBuild?.components[category];
  return json3({
    category,
    components: components2,
    currentBuild,
    currentComponent
  });
}
async function action2({ request, params }) {
  let componentId = (await request.formData()).get("componentId"), category = params.category;
  if (!componentId || !category)
    return json3({ error: "Invalid component or category" }, { status: 400 });
  let component = getComponentsByCategory(category).find((c) => c.id === componentId);
  if (!component)
    return json3({ error: "Component not found" }, { status: 404 });
  let currentBuild = await getCurrentBuild(request);
  if (!currentBuild)
    return json3({ error: "No active build" }, { status: 400 });
  let updatedBuild = addComponentToBuild(currentBuild, component), cookie = await saveCurrentBuild(request, updatedBuild);
  return redirect3("/build", {
    headers: {
      "Set-Cookie": cookie
    }
  });
}
function ComponentCategoryPage() {
  let { category, components: components2, currentBuild, currentComponent } = useLoaderData3(), submit = useSubmit2(), handleAddToBuild = (componentId) => {
    let formData = new FormData();
    formData.append("componentId", componentId), submit(formData, { method: "post" });
  };
  return /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV8(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/components.$category.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-3xl font-extrabold text-gray-900 mb-8", children: getCategoryDisplayName(category) }, void 0, !1, {
        fileName: "app/routes/components.$category.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV8(CategorySelector, { activeCategory: category }, void 0, !1, {
          fileName: "app/routes/components.$category.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/components.$category.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: components2.map((component) => /* @__PURE__ */ jsxDEV8(
            ComponentCard,
            {
              component,
              isInBuild: currentComponent?.id === component.id,
              onAddToBuild: () => handleAddToBuild(component.id)
            },
            component.id,
            !1,
            {
              fileName: "app/routes/components.$category.tsx",
              lineNumber: 115,
              columnNumber: 17
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this),
          components2.length === 0 && /* @__PURE__ */ jsxDEV8("div", { className: "bg-white shadow rounded-lg p-6 text-center", children: /* @__PURE__ */ jsxDEV8("p", { className: "text-gray-500", children: "No components found in this category." }, void 0, !1, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/components.$category.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/components.$category.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/components.$category.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(Footer, {}, void 0, !1, {
      fileName: "app/routes/components.$category.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/components.$category.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/builds.$id.tsx
var builds_id_exports = {};
__export(builds_id_exports, {
  action: () => action3,
  default: () => BuildDetailPage,
  loader: () => loader4,
  meta: () => meta3
});
import { json as json4, redirect as redirect4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4, useSubmit as useSubmit3 } from "@remix-run/react";

// app/components/BuildComponentList.tsx
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var categoryNames = {
  cpu: "CPU",
  "cpu-cooler": "CPU Cooler",
  motherboard: "Motherboard",
  memory: "Memory",
  storage: "Storage",
  "video-card": "Video Card",
  case: "Case",
  "power-supply": "Power Supply",
  monitor: "Monitor"
}, categoryOrder = [
  "cpu",
  "cpu-cooler",
  "motherboard",
  "memory",
  "storage",
  "video-card",
  "case",
  "power-supply",
  "monitor"
];
function BuildComponentList({ build, onRemoveComponent }) {
  return /* @__PURE__ */ jsxDEV9("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: /* @__PURE__ */ jsxDEV9("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Choose Your Parts" }, void 0, !1, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "border-t border-gray-200", children: /* @__PURE__ */ jsxDEV9("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV9("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ jsxDEV9("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV9("tr", { children: [
        /* @__PURE__ */ jsxDEV9("th", { scope: "col", className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6", children: "Component" }, void 0, !1, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV9("th", { scope: "col", className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/6", children: "Selection" }, void 0, !1, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV9("th", { scope: "col", className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6", children: "Price" }, void 0, !1, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV9("th", { scope: "col", className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6", children: "Action" }, void 0, !1, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BuildComponentList.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/BuildComponentList.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV9("tbody", { className: "bg-white divide-y divide-gray-200", children: categoryOrder.map((category) => {
        let component = build.components[category];
        return /* @__PURE__ */ jsxDEV9("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxDEV9("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV9("div", { className: "text-sm font-medium text-blue-600", children: /* @__PURE__ */ jsxDEV9(Link4, { to: `/components/${category}`, className: "hover:underline", children: categoryNames[category] }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 69,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 68,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 67,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV9("td", { className: "px-4 py-4", children: component ? /* @__PURE__ */ jsxDEV9("div", { children: [
            /* @__PURE__ */ jsxDEV9(
              Link4,
              {
                to: `/components/${category}/${component.id}`,
                className: "text-sm text-gray-900 hover:text-blue-600 font-medium",
                children: component.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/BuildComponentList.tsx",
                lineNumber: 78,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ jsxDEV9("p", { className: "text-xs text-gray-500 mt-1", children: [
              component.brand,
              " ",
              component.model
            ] }, void 0, !0, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 84,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 77,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV9(
            Link4,
            {
              to: `/components/${category}`,
              className: "inline-flex items-center px-3 py-1.5 border border-blue-600 text-xs font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50",
              children: [
                /* @__PURE__ */ jsxDEV9("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV9("path", { fillRule: "evenodd", d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", clipRule: "evenodd" }, void 0, !1, {
                  fileName: "app/components/BuildComponentList.tsx",
                  lineNumber: 95,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/components/BuildComponentList.tsx",
                  lineNumber: 94,
                  columnNumber: 29
                }, this),
                "Choose a ",
                categoryNames[category]
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 90,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 89,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV9("td", { className: "px-4 py-4 whitespace-nowrap", children: component ? /* @__PURE__ */ jsxDEV9("div", { className: "text-sm font-medium text-gray-900", children: formatPrice(component.price) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 105,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDEV9("div", { className: "text-sm text-gray-500", children: "\u2014" }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV9("td", { className: "px-4 py-4 whitespace-nowrap text-right text-sm font-medium", children: component && onRemoveComponent && /* @__PURE__ */ jsxDEV9(
            "button",
            {
              onClick: () => onRemoveComponent(category),
              className: "text-red-600 hover:text-red-800",
              "aria-label": `Remove ${categoryNames[category]}`,
              children: /* @__PURE__ */ jsxDEV9("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV9("path", { fillRule: "evenodd", d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, !1, {
                fileName: "app/components/BuildComponentList.tsx",
                lineNumber: 121,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/BuildComponentList.tsx",
                lineNumber: 120,
                columnNumber: 27
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 115,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 113,
            columnNumber: 21
          }, this)
        ] }, category, !0, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this);
      }) }, void 0, !1, {
        fileName: "app/components/BuildComponentList.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BuildComponentList.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/builds.$id.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta3 = ({ data }) => data?.build ? [
  { title: `${data.build.name} - AppFit PC Builder` },
  { name: "description", content: `View details for the ${data.build.name} PC build` }
] : [
  { title: "Build Not Found - AppFit PC Builder" },
  { name: "description", content: "The requested build could not be found" }
];
async function loader4({ params, request }) {
  let { id } = params;
  if (!id)
    return redirect4("/builds");
  let build = getSampleBuilds().find((build2) => build2.id === id);
  if (!build)
    throw new Response("Build not found", { status: 404 });
  let currentBuild = await getCurrentBuild(request), totalPrice = calculateTotalPrice(build.components), compatibility = checkCompatibility(build.components), totalWattage = getTotalWattage(build);
  return json4({
    build,
    currentBuild,
    totalPrice,
    compatibility,
    totalWattage
  });
}
async function action3({ params, request }) {
  let { id } = params;
  if (!id)
    return redirect4("/builds");
  let build = getSampleBuilds().find((build2) => build2.id === id);
  if (!build)
    throw new Response("Build not found", { status: 404 });
  let cookie = await saveCurrentBuild(request, build);
  return redirect4("/build", {
    headers: {
      "Set-Cookie": cookie
    }
  });
}
function BuildDetailPage() {
  let { build, currentBuild, totalPrice, compatibility, totalWattage } = useLoaderData4(), submit = useSubmit3(), handleLoadBuild = () => {
    window.confirm("This will replace your current build. Are you sure?") && submit({}, { method: "post" });
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV10(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/builds.$id.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxDEV10("h1", { className: "text-3xl font-extrabold text-gray-900", children: build.name }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "mt-2 text-lg text-gray-500", children: [
          "Total Price: ",
          formatPrice(totalPrice)
        ] }, void 0, !0, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/builds.$id.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "mb-6 flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: `flex-1 p-4 rounded-md ${compatibility.compatible ? "bg-green-100" : "bg-red-100"}`, children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center", children: compatibility.compatible ? /* @__PURE__ */ jsxDEV10(Fragment2, { children: [
          /* @__PURE__ */ jsxDEV10("svg", { className: "h-5 w-5 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV10("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "ml-2 text-sm font-medium text-green-800", children: "Compatibility: No issues or incompatibilities found." }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV10(Fragment2, { children: [
          /* @__PURE__ */ jsxDEV10("svg", { className: "h-5 w-5 text-red-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV10("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 115,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "ml-2 text-sm font-medium text-red-800", children: "Compatibility: Issues found" }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 117,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "flex-1 p-4 rounded-md bg-blue-100", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV10("svg", { className: "h-5 w-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV10("path", { fillRule: "evenodd", d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "ml-2 text-sm font-medium text-blue-800", children: [
            "Estimated Wattage: ",
            totalWattage,
            "W"
          ] }, void 0, !0, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/builds.$id.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV10(BuildComponentList, { build }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV10("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: /* @__PURE__ */ jsxDEV10("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Build Actions" }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 gap-4", children: [
              /* @__PURE__ */ jsxDEV10(
                "button",
                {
                  onClick: handleLoadBuild,
                  className: "text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                  children: "Load This Build"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 148,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV10(
                "button",
                {
                  onClick: () => window.print(),
                  className: "text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                  children: "Print Parts List"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 155,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV10(
                "a",
                {
                  href: "#",
                  className: "text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700",
                  children: "Purchase Parts"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 162,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/builds.$id.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, this),
            !compatibility.compatible && /* @__PURE__ */ jsxDEV10("div", { className: "mt-6 p-4 rounded-md bg-red-50", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV10("svg", { className: "h-5 w-5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV10("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, !1, {
                fileName: "app/routes/builds.$id.tsx",
                lineNumber: 174,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/builds.$id.tsx",
                lineNumber: 173,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV10("div", { className: "ml-3", children: [
                /* @__PURE__ */ jsxDEV10("h3", { className: "text-sm font-medium text-red-800", children: "Compatibility issues detected" }, void 0, !1, {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 177,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV10("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ jsxDEV10("ul", { className: "list-disc pl-5 space-y-1", children: compatibility.issues.map((issue, index) => /* @__PURE__ */ jsxDEV10("li", { children: issue }, index, !1, {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 181,
                  columnNumber: 31
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 179,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/builds.$id.tsx",
                  lineNumber: 178,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/builds.$id.tsx",
                lineNumber: 176,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/builds.$id.tsx",
              lineNumber: 172,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/builds.$id.tsx",
              lineNumber: 171,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/builds.$id.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/builds.$id.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/builds.$id.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/builds.$id.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Footer, {}, void 0, !1, {
      fileName: "app/routes/builds.$id.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/builds.$id.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader5,
  meta: () => meta4
});
import { json as json5 } from "@remix-run/node";
import { Link as Link6, useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/BuildSummary.tsx
import { Link as Link5 } from "@remix-run/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function BuildSummary({ build, onLoadBuild, onDeleteBuild, isSaved = !1 }) {
  let totalPrice = calculateTotalPrice(build.components), compatibility = checkCompatibility(build.components), componentCount = getComponentCount(build), isComplete = isBuildComplete(build);
  return /* @__PURE__ */ jsxDEV11("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: build.name }, void 0, !1, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "flex space-x-2", children: isSaved && onDeleteBuild && /* @__PURE__ */ jsxDEV11(
        "button",
        {
          onClick: () => onDeleteBuild(build.id),
          className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
          "aria-label": "Delete build",
          children: /* @__PURE__ */ jsxDEV11("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV11("path", { fillRule: "evenodd", d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BuildSummary.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "px-4 py-5 sm:p-6", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV11("span", { className: "text-sm font-medium text-gray-500", children: "Total Price:" }, void 0, !1, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("span", { className: "text-xl font-bold text-gray-900", children: formatPrice(totalPrice) }, void 0, !1, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxDEV11("span", { className: "text-sm font-medium text-gray-500", children: "Component Count:" }, void 0, !1, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("span", { className: "text-sm font-medium text-gray-900", children: [
            componentCount,
            " / 9"
          ] }, void 0, !0, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: `p-3 rounded-md mb-4 ${compatibility.compatible ? "bg-green-50" : "bg-red-50"}`, children: /* @__PURE__ */ jsxDEV11("div", { className: "flex", children: compatibility.compatible ? /* @__PURE__ */ jsxDEV11(Fragment3, { children: [
        /* @__PURE__ */ jsxDEV11("svg", { className: "h-5 w-5 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV11("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV11("h3", { className: "text-sm font-medium text-green-800", children: "Compatible" }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV11(Fragment3, { children: [
        /* @__PURE__ */ jsxDEV11("svg", { className: "h-5 w-5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV11("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 68,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV11("h3", { className: "text-sm font-medium text-red-800", children: "Compatibility issues" }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 71,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-2 gap-4 mb-4", children: Object.entries(build.components).slice(0, 4).map(([category, component]) => /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-shrink-0 h-10 w-10", children: /* @__PURE__ */ jsxDEV11("img", { className: "h-10 w-10 rounded-full", src: component.image, alt: component.name }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "ml-3 truncate", children: /* @__PURE__ */ jsxDEV11("p", { className: "text-sm font-medium text-gray-900 truncate", children: component.name }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, category, !0, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-1 gap-3", children: [
        onLoadBuild ? /* @__PURE__ */ jsxDEV11(
          "button",
          {
            onClick: () => onLoadBuild(build.id),
            className: "w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: "Load Build"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 93,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ jsxDEV11(
          Link5,
          {
            to: "/build",
            className: "w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: "View Build Details"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 100,
            columnNumber: 13
          },
          this
        ),
        isComplete && /* @__PURE__ */ jsxDEV11(
          "button",
          {
            className: "w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
            children: "Purchase Parts"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BuildSummary.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BuildSummary.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "AppFit PC Builder - Build Your Custom PC" },
  { name: "description", content: "Build your custom PC with our PC part picker tool. Select compatible components and compare prices." }
];
async function loader5({ request }) {
  let { build, cookie } = await ensureBuild(request), sampleBuilds2 = getSampleBuilds(), featuredCpus = getComponentsByCategory("cpu").slice(0, 2), featuredGpus = getComponentsByCategory("video-card").slice(0, 2);
  return json5(
    {
      currentBuild: build,
      sampleBuilds: sampleBuilds2,
      featuredCpus,
      featuredGpus
    },
    cookie ? { headers: { "Set-Cookie": cookie } } : void 0
  );
}
function Index() {
  let { currentBuild, sampleBuilds: sampleBuilds2, featuredCpus, featuredGpus } = useLoaderData5();
  return /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV12(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-700", children: /* @__PURE__ */ jsxDEV12("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV12("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV12("h1", { className: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl", children: "Build Your Dream PC" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-6 max-w-2xl mx-auto text-xl text-blue-100", children: "Select compatible components, compare prices, and create your perfect custom PC build." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-10 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV12(
            Link6,
            {
              to: "/build",
              className: "inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg",
              children: [
                /* @__PURE__ */ jsxDEV12("svg", { className: "h-6 w-6 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV12("path", { fillRule: "evenodd", d: "M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 59,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 58,
                  columnNumber: 19
                }, this),
                "Start Your Build"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 54,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("div", { className: "mt-6 flex space-x-4", children: [
            /* @__PURE__ */ jsxDEV12(
              Link6,
              {
                to: "/components/cpu",
                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70",
                children: "Browse Components"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 65,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV12(
              Link6,
              {
                to: "/guides",
                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70",
                children: "View Build Guides"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 71,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "bg-white py-12", children: /* @__PURE__ */ jsxDEV12("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxDEV12("div", { className: "lg:text-center", children: [
          /* @__PURE__ */ jsxDEV12("h2", { className: "text-base text-blue-600 font-semibold tracking-wide uppercase", children: "How It Works" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl", children: "Build Your PC in 3 Simple Steps" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxDEV12("div", { className: "flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white", children: /* @__PURE__ */ jsxDEV12("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 98,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV12("div", { className: "mt-5 text-center", children: [
              /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg leading-6 font-medium text-gray-900", children: "1. Select Components" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 102,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-base text-gray-500", children: "Browse our extensive catalog of PC components and select the parts for your build." }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxDEV12("div", { className: "flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white", children: /* @__PURE__ */ jsxDEV12("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 112,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 111,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV12("div", { className: "mt-5 text-center", children: [
              /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg leading-6 font-medium text-gray-900", children: "2. Check Compatibility" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-base text-gray-500", children: "Our system automatically checks for compatibility issues between your selected components." }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxDEV12("div", { className: "flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white", children: /* @__PURE__ */ jsxDEV12("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 126,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV12("div", { className: "mt-5 text-center", children: [
              /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg leading-6 font-medium text-gray-900", children: "3. Complete Your Build" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-base text-gray-500", children: "Review your build, save it for later, or share it with others." }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 129,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "bg-gray-50 py-12", children: /* @__PURE__ */ jsxDEV12("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxDEV12("div", { className: "lg:text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV12("h2", { className: "text-base text-blue-600 font-semibold tracking-wide uppercase", children: "Featured Components" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl", children: "Popular CPUs & GPUs" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxDEV12("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Featured CPUs" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2", children: featuredCpus.map((cpu) => /* @__PURE__ */ jsxDEV12(ComponentCard, { component: cpu }, cpu.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 151,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-12", children: [
          /* @__PURE__ */ jsxDEV12("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Featured GPUs" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2", children: featuredGpus.map((gpu) => /* @__PURE__ */ jsxDEV12(ComponentCard, { component: gpu }, gpu.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 164,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxDEV12(
          Link6,
          {
            to: "/components/cpu",
            className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: "Browse All Components"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "bg-white py-12", children: /* @__PURE__ */ jsxDEV12("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxDEV12("div", { className: "lg:text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV12("h2", { className: "text-base text-blue-600 font-semibold tracking-wide uppercase", children: "Featured Builds" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl", children: "Pre-configured PC Builds" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2", children: sampleBuilds2.map((build) => /* @__PURE__ */ jsxDEV12(BuildSummary, { build }, build.id, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 192,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxDEV12(
          Link6,
          {
            to: "/builds",
            className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: "View All Featured Builds"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 197,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/builds.tsx
var builds_exports = {};
__export(builds_exports, {
  default: () => BuildsPage,
  loader: () => loader6,
  meta: () => meta5
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Featured Builds - AppFit PC Builder" },
  { name: "description", content: "Browse featured PC builds for inspiration" }
];
async function loader6({ request }) {
  let sampleBuilds2 = getSampleBuilds(), currentBuild = await getCurrentBuild(request);
  return json6({
    sampleBuilds: sampleBuilds2,
    currentBuild
  });
}
function BuildsPage() {
  let { sampleBuilds: sampleBuilds2, currentBuild } = useLoaderData6();
  return /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV13(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/builds.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV13("h1", { className: "text-3xl font-extrabold text-gray-900 mb-8", children: "Featured Builds" }, void 0, !1, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2", children: sampleBuilds2.map((build) => /* @__PURE__ */ jsxDEV13(BuildSummary, { build }, build.id, !1, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mt-12 bg-gray-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV13("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "About Featured Builds" }, void 0, !1, {
          fileName: "app/routes/builds.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-600 mb-4", children: "Our featured builds are carefully curated by our team of PC building experts. They represent balanced configurations for different use cases and budgets." }, void 0, !1, {
          fileName: "app/routes/builds.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-600", children: "You can use these builds as a starting point for your own custom PC, or modify them to better suit your specific needs and preferences." }, void 0, !1, {
          fileName: "app/routes/builds.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/builds.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(Footer, {}, void 0, !1, {
      fileName: "app/routes/builds.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/builds.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/guides.tsx
var guides_exports = {};
__export(guides_exports, {
  default: () => GuidesPage,
  loader: () => loader7,
  meta: () => meta6
});
import { json as json7 } from "@remix-run/node";
import { Link as Link7, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Build Guides - AppFit PC Builder" },
  { name: "description", content: "Pre-configured PC build guides for different budgets and use cases" }
];
async function loader7({ request }) {
  let sampleBuilds2 = getSampleBuilds(), currentBuild = await getCurrentBuild(request), gamingBuilds = sampleBuilds2.filter((build) => build.name.includes("Gaming")), workstationBuilds = sampleBuilds2.filter((build) => !build.name.includes("Gaming"));
  return json7({
    gamingBuilds,
    workstationBuilds,
    currentBuild
  });
}
function GuidesPage() {
  let { gamingBuilds, workstationBuilds, currentBuild } = useLoaderData7();
  return /* @__PURE__ */ jsxDEV14("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV14(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/guides.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV14("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV14("h1", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Build Guides" }, void 0, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("p", { className: "mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4", children: "Pre-configured PC builds for different budgets and use cases" }, void 0, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/guides.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxDEV14("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Gaming / Streaming" }, void 0, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2", children: gamingBuilds.map((build) => /* @__PURE__ */ jsxDEV14("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxDEV14("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: build.name }, void 0, !1, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsxDEV14("span", { className: "text-sm font-medium text-gray-500", children: "Price:" }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 63,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV14("span", { className: "text-lg font-bold text-gray-900", children: formatPrice(Object.values(build.components).reduce((sum, component) => sum + component.price, 0)) }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 64,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-2 gap-4 mb-6", children: Object.entries(build.components).filter(([category]) => ["cpu", "video-card", "case", "motherboard"].includes(category)).map(([category, component]) => /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV14("div", { className: "flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV14(
              "img",
              {
                src: component.image,
                alt: component.name,
                className: "h-6 w-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/guides.tsx",
                lineNumber: 75,
                columnNumber: 29
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 74,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV14("div", { className: "ml-3 truncate", children: /* @__PURE__ */ jsxDEV14("p", { className: "text-xs font-medium text-gray-900 truncate", children: component.name }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 82,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 81,
              columnNumber: 27
            }, this)
          ] }, category, !0, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 73,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 69,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-1 gap-3", children: /* @__PURE__ */ jsxDEV14(
            Link7,
            {
              to: `/builds/${build.id}`,
              className: "w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
              children: "View Build Details"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/guides.tsx",
              lineNumber: 89,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this) }, build.id, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/guides.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { children: [
        /* @__PURE__ */ jsxDEV14("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Workstation / Professional" }, void 0, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2", children: workstationBuilds.map((build) => /* @__PURE__ */ jsxDEV14("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxDEV14("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: build.name }, void 0, !1, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsxDEV14("span", { className: "text-sm font-medium text-gray-500", children: "Price:" }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 116,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV14("span", { className: "text-lg font-bold text-gray-900", children: formatPrice(Object.values(build.components).reduce((sum, component) => sum + component.price, 0)) }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-2 gap-4 mb-6", children: Object.entries(build.components).filter(([category]) => ["cpu", "video-card", "case", "motherboard"].includes(category)).map(([category, component]) => /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV14("div", { className: "flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV14(
              "img",
              {
                src: component.image,
                alt: component.name,
                className: "h-6 w-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/guides.tsx",
                lineNumber: 128,
                columnNumber: 29
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 127,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV14("div", { className: "ml-3 truncate", children: /* @__PURE__ */ jsxDEV14("p", { className: "text-xs font-medium text-gray-900 truncate", children: component.name }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 135,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/guides.tsx",
              lineNumber: 134,
              columnNumber: 27
            }, this)
          ] }, category, !0, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-1 gap-3", children: /* @__PURE__ */ jsxDEV14(
            Link7,
            {
              to: `/builds/${build.id}`,
              className: "w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
              children: "View Build Details"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/guides.tsx",
              lineNumber: 142,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/guides.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this) }, build.id, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/guides.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/guides.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/guides.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Footer, {}, void 0, !1, {
      fileName: "app/routes/guides.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guides.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/build.tsx
var build_exports = {};
__export(build_exports, {
  action: () => action4,
  default: () => BuildPage,
  loader: () => loader8,
  meta: () => meta7
});
import { json as json8, redirect as redirect5 } from "@remix-run/node";
import { useLoaderData as useLoaderData8, useSubmit as useSubmit4 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { title: "Current Build - AppFit PC Builder" },
  { name: "description", content: "View and edit your current PC build" }
];
async function loader8({ request }) {
  let currentBuild = await getCurrentBuild(request);
  if (!currentBuild)
    return redirect5("/");
  let totalPrice = calculateTotalPrice(currentBuild.components), compatibility = checkCompatibility(currentBuild.components), totalWattage = getTotalWattage(currentBuild);
  return json8({
    currentBuild,
    totalPrice,
    compatibility,
    totalWattage
  });
}
async function action4({ request }) {
  let formData = await request.formData(), action5 = formData.get("_action"), currentBuild = await getCurrentBuild(request);
  if (!currentBuild)
    return redirect5("/");
  let cookie;
  switch (action5) {
    case "remove-component":
      let category = formData.get("category"), updatedBuild = removeComponentFromBuild(currentBuild, category);
      cookie = await saveCurrentBuild(request, updatedBuild);
      break;
    case "update-name":
      let name = formData.get("name"), renamedBuild = updateBuildName(currentBuild, name);
      cookie = await saveCurrentBuild(request, renamedBuild);
      break;
    case "clear-build":
      return cookie = await clearCurrentBuild(request), redirect5("/", {
        headers: {
          "Set-Cookie": cookie
        }
      });
    default:
      return json8({ error: "Invalid action" }, { status: 400 });
  }
  return json8({ success: !0 }, { headers: { "Set-Cookie": cookie } });
}
function BuildPage() {
  let { currentBuild, totalPrice, compatibility, totalWattage } = useLoaderData8(), submit = useSubmit4(), handleRemoveComponent = (category) => {
    let formData = new FormData();
    formData.append("_action", "remove-component"), formData.append("category", category), submit(formData, { method: "post" });
  }, handleUpdateName = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    formData.append("_action", "update-name"), submit(formData, { method: "post" });
  }, handleClearBuild = () => {
    if (window.confirm("Are you sure you want to clear your current build?")) {
      let formData = new FormData();
      formData.append("_action", "clear-build"), submit(formData, { method: "post" });
    }
  }, generateShareableUrl = () => {
    navigator.clipboard.writeText(window.location.href), alert("Build URL copied to clipboard!");
  };
  return /* @__PURE__ */ jsxDEV15("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV15(Header, { currentBuild }, void 0, !1, {
      fileName: "app/routes/build.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV15("div", { className: "mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV15("form", { onSubmit: handleUpdateName, className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV15(
            "input",
            {
              type: "text",
              name: "name",
              defaultValue: currentBuild.name,
              className: "shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mr-2",
              placeholder: "Build Name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/build.tsx",
              lineNumber: 117,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
              children: "Rename"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/build.tsx",
              lineNumber: 124,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/build.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxDEV15(
            "button",
            {
              onClick: generateShareableUrl,
              className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ jsxDEV15("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV15("path", { d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 138,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 137,
                  columnNumber: 15
                }, this),
                "Share"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/build.tsx",
              lineNumber: 133,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15(
            "button",
            {
              onClick: handleClearBuild,
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              children: "Clear Build"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/build.tsx",
              lineNumber: 143,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/build.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/build.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "mb-6 flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsxDEV15("div", { className: `flex-1 p-4 rounded-md ${compatibility.compatible ? "bg-green-100" : "bg-red-100"}`, children: /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center", children: compatibility.compatible ? /* @__PURE__ */ jsxDEV15(Fragment4, { children: [
          /* @__PURE__ */ jsxDEV15("svg", { className: "h-5 w-5 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV15("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 159,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 158,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV15("span", { className: "ml-2 text-sm font-medium text-green-800", children: "Compatibility: No issues or incompatibilities found." }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 161,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/build.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV15(Fragment4, { children: [
          /* @__PURE__ */ jsxDEV15("svg", { className: "h-5 w-5 text-red-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV15("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 166,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 165,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV15("span", { className: "ml-2 text-sm font-medium text-red-800", children: "Compatibility: Issues found" }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/build.tsx",
          lineNumber: 164,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/build.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/build.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "flex-1 p-4 rounded-md bg-blue-100", children: /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV15("svg", { className: "h-5 w-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV15("path", { fillRule: "evenodd", d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV15("span", { className: "ml-2 text-sm font-medium text-blue-800", children: [
            "Estimated Wattage: ",
            totalWattage,
            "W"
          ] }, void 0, !0, {
            fileName: "app/routes/build.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/build.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/build.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/build.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV15("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV15(
          BuildComponentList,
          {
            build: currentBuild,
            onRemoveComponent: handleRemoveComponent
          },
          void 0,
          !1,
          {
            fileName: "app/routes/build.tsx",
            lineNumber: 187,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/build.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV15("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV15("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: /* @__PURE__ */ jsxDEV15("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Build Summary" }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/build.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV15("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV15("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxDEV15("span", { className: "text-sm font-medium text-gray-500", children: "Total Price:" }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 204,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV15("span", { className: "text-xl font-bold text-gray-900", children: formatPrice(totalPrice) }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 205,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/build.tsx",
                lineNumber: 203,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxDEV15("span", { className: "text-sm font-medium text-gray-500", children: "Component Count:" }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 209,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV15("span", { className: "text-sm font-medium text-gray-900", children: [
                  Object.keys(currentBuild.components).length,
                  " / 9"
                ] }, void 0, !0, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 210,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/build.tsx",
                lineNumber: 208,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/build.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, this),
            !compatibility.compatible && /* @__PURE__ */ jsxDEV15("div", { className: "p-4 rounded-md mb-4 bg-red-50", children: /* @__PURE__ */ jsxDEV15("div", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV15("svg", { className: "h-5 w-5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV15("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, !1, {
                fileName: "app/routes/build.tsx",
                lineNumber: 218,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/build.tsx",
                lineNumber: 217,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV15("div", { className: "ml-3", children: [
                /* @__PURE__ */ jsxDEV15("h3", { className: "text-sm font-medium text-red-800", children: "Compatibility issues detected" }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 221,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV15("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ jsxDEV15("ul", { className: "list-disc pl-5 space-y-1", children: compatibility.issues.map((issue, index) => /* @__PURE__ */ jsxDEV15("li", { children: issue }, index, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 225,
                  columnNumber: 31
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 223,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 222,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/build.tsx",
                lineNumber: 220,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/build.tsx",
              lineNumber: 216,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/build.tsx",
              lineNumber: 215,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV15("div", { className: "grid grid-cols-1 gap-4", children: [
              /* @__PURE__ */ jsxDEV15(
                "button",
                {
                  onClick: () => window.print(),
                  className: "text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                  children: "Export Build"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 235,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15(
                "button",
                {
                  onClick: generateShareableUrl,
                  className: "text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                  children: "Share Build"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 242,
                  columnNumber: 19
                },
                this
              ),
              Object.keys(currentBuild.components).length >= 6 && /* @__PURE__ */ jsxDEV15(
                "a",
                {
                  href: "#",
                  className: "text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700",
                  children: "Purchase Parts"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 250,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/build.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/build.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/build.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/build.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/build.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/build.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15(Footer, {}, void 0, !1, {
      fileName: "app/routes/build.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/build.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DBIKN74U.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-36B7IPRI.js", "/build/_shared/chunk-ANJYWBBG.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-S2NJ2QTI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-EH4U6OCG.js", imports: ["/build/_shared/chunk-U47D45R5.js", "/build/_shared/chunk-X4GUHURT.js", "/build/_shared/chunk-KUBTFBQT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/build": { id: "routes/build", parentId: "root", path: "build", index: void 0, caseSensitive: void 0, module: "/build/routes/build-YNH5J32V.js", imports: ["/build/_shared/chunk-J6FUJ22C.js", "/build/_shared/chunk-KUBTFBQT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/builds": { id: "routes/builds", parentId: "root", path: "builds", index: void 0, caseSensitive: void 0, module: "/build/routes/builds-QX3WEKJR.js", imports: ["/build/_shared/chunk-X4GUHURT.js", "/build/_shared/chunk-KUBTFBQT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/builds.$id": { id: "routes/builds.$id", parentId: "routes/builds", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/builds.$id-FPNHLWC4.js", imports: ["/build/_shared/chunk-J6FUJ22C.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.$category": { id: "routes/components.$category", parentId: "root", path: "components/:category", index: void 0, caseSensitive: void 0, module: "/build/routes/components.$category-UM2STTOL.js", imports: ["/build/_shared/chunk-3R5SRJPV.js", "/build/_shared/chunk-U47D45R5.js", "/build/_shared/chunk-KUBTFBQT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components.$category.$id": { id: "routes/components.$category.$id", parentId: "routes/components.$category", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/components.$category.$id-VMWKSQVJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/guides": { id: "routes/guides", parentId: "root", path: "guides", index: void 0, caseSensitive: void 0, module: "/build/routes/guides-IFRPWB3N.js", imports: ["/build/_shared/chunk-KUBTFBQT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e8278e26", hmr: { runtime: "/build/_shared/chunk-ANJYWBBG.js", timestamp: 1746043947242 }, url: "/build/manifest-E8278E26.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/components.$category.$id": {
    id: "routes/components.$category.$id",
    parentId: "routes/components.$category",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: components_category_id_exports
  },
  "routes/components.$category": {
    id: "routes/components.$category",
    parentId: "root",
    path: "components/:category",
    index: void 0,
    caseSensitive: void 0,
    module: components_category_exports
  },
  "routes/builds.$id": {
    id: "routes/builds.$id",
    parentId: "routes/builds",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: builds_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/builds": {
    id: "routes/builds",
    parentId: "root",
    path: "builds",
    index: void 0,
    caseSensitive: void 0,
    module: builds_exports
  },
  "routes/guides": {
    id: "routes/guides",
    parentId: "root",
    path: "guides",
    index: void 0,
    caseSensitive: void 0,
    module: guides_exports
  },
  "routes/build": {
    id: "routes/build",
    parentId: "root",
    path: "build",
    index: void 0,
    caseSensitive: void 0,
    module: build_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
