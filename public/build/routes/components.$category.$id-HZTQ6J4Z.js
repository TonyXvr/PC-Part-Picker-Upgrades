import {
  CategorySelector
} from "/build/_shared/chunk-I56ZY62M.js";
import {
  Footer,
  Header,
  formatPrice,
  require_node
} from "/build/_shared/chunk-GENXGLHA.js";
import {
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-7ZASLR5K.js";
import {
  createHotContext
} from "/build/_shared/chunk-U5E2PCIK.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/components.$category.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.$category.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.$category.$id.tsx"
  );
  import.meta.hot.lastModified = "1746036671330";
}
var meta = ({
  data
}) => {
  if (!data?.component) {
    return [{
      title: "Component Not Found - AppFit PC Builder"
    }, {
      name: "description",
      content: "The requested component could not be found"
    }];
  }
  return [{
    title: `${data.component.name} - AppFit PC Builder`
  }, {
    name: "description",
    content: `View details and specifications for ${data.component.name}`
  }];
};
function ComponentDetailPage() {
  _s();
  const {
    component,
    currentBuild,
    isInBuild
  } = useLoaderData();
  const submit = useSubmit();
  const handleAddToBuild = () => {
    submit({}, {
      method: "post"
    });
  };
  const formatSpecValue = (key, value) => {
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (typeof value === "number") {
      if (key.toLowerCase().includes("frequency") || key.toLowerCase().includes("clock")) {
        return `${value} GHz`;
      }
      if (key.toLowerCase().includes("capacity")) {
        return value >= 1e3 ? `${value / 1e3} TB` : `${value} GB`;
      }
      if (key.toLowerCase().includes("tdp")) {
        return `${value}W`;
      }
      if (key.toLowerCase().includes("size")) {
        return `${value}"`;
      }
      if (key.toLowerCase().includes("length") || key.toLowerCase().includes("height")) {
        return `${value} mm`;
      }
      if (key.toLowerCase().includes("memory")) {
        return `${value} GB`;
      }
    }
    return String(value);
  };
  const formatSpecKey = (key) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).replace(/Tdp/g, "TDP").replace(/Rpm/g, "RPM");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { currentBuild }, void 0, false, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CategorySelector, { activeCategory: component.category }, void 0, false, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: component.name }, void 0, false, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: [
            component.brand,
            " ",
            component.model
          ] }, void 0, true, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.$category.$id.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center bg-gray-50 rounded-lg p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: component.image, alt: component.name, className: "max-h-64 w-auto object-contain" }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-2", children: "Price" }, void 0, false, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 190,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-gray-900", children: formatPrice(component.price) }, void 0, false, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 191,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 189,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-2", children: "Category" }, void 0, false, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800", children: component.category }, void 0, false, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 197,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/components.$category.$id.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 194,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleAddToBuild, disabled: isInBuild, className: `w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${isInBuild ? "bg-green-100 text-green-800 cursor-default" : "text-white bg-blue-600 hover:bg-blue-700"}`, children: isInBuild ? "Already In Your Build" : "Add to Build" }, void 0, false, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 203,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 183,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Specifications" }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 210,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-lg overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 px-4 py-5 sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "sm:divide-y sm:divide-gray-200", children: Object.entries(component.specs).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: formatSpecKey(key) }, void 0, false, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 216,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2", children: formatSpecValue(key, value) }, void 0, false, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 219,
                columnNumber: 29
              }, this)
            ] }, key, true, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 215,
              columnNumber: 80
            }, this)) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 214,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 213,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 212,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Compatibility Factors" }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 229,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-lg overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 px-4 py-5 sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "sm:divide-y sm:divide-gray-200", children: Object.entries(component.compatibilityFactors).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: formatSpecKey(key) }, void 0, false, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 235,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2", children: Array.isArray(value) ? value.join(", ") : formatSpecValue(key, value) }, void 0, false, {
                fileName: "app/routes/components.$category.$id.tsx",
                lineNumber: 238,
                columnNumber: 29
              }, this)
            ] }, key, true, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 234,
              columnNumber: 95
            }, this)) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 233,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/components.$category.$id.tsx",
              lineNumber: 231,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.$category.$id.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.$category.$id.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/components.$category.$id.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/components.$category.$id.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.$category.$id.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
}
_s(ComponentDetailPage, "PPaXTcjfBEUp6laRRxpj8HDpNOU=", false, function() {
  return [useLoaderData, useSubmit];
});
_c = ComponentDetailPage;
var _c;
$RefreshReg$(_c, "ComponentDetailPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ComponentDetailPage as default,
  meta
};
//# sourceMappingURL=/build/routes/components.$category.$id-HZTQ6J4Z.js.map
