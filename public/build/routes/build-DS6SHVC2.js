import {
  Footer,
  Header,
  formatPrice,
  require_node
} from "/build/_shared/chunk-GENXGLHA.js";
import {
  Link,
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

// app/routes/build.tsx
var import_node = __toESM(require_node(), 1);

// app/components/BuildComponentList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/BuildComponentList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/BuildComponentList.tsx"
  );
  import.meta.hot.lastModified = "1746036132408";
}
var categoryNames = {
  "cpu": "CPU",
  "cpu-cooler": "CPU Cooler",
  "motherboard": "Motherboard",
  "memory": "Memory",
  "storage": "Storage",
  "video-card": "Video Card",
  "case": "Case",
  "power-supply": "Power Supply",
  "monitor": "Monitor"
};
var categoryOrder = ["cpu", "cpu-cooler", "motherboard", "memory", "storage", "video-card", "case", "power-supply", "monitor"];
function BuildComponentList({
  build,
  onRemoveComponent
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Components" }, void 0, false, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: categoryOrder.map((category) => {
      const component = build.components[category];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-900", children: categoryNames[category] }, void 0, false, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 51,
          columnNumber: 19
        }, this),
        component ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2/4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/components/${category}/${component.id}`, className: "text-sm text-blue-600 hover:text-blue-800", children: component.name }, void 0, false, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 59,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: [
              component.brand,
              " ",
              component.model
            ] }, void 0, true, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 62,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 58,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/4 flex justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-900", children: formatPrice(component.price) }, void 0, false, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 68,
              columnNumber: 25
            }, this),
            onRemoveComponent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => onRemoveComponent(category), className: "text-red-600 hover:text-red-800", "aria-label": `Remove ${categoryNames[category]}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 74,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 73,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/BuildComponentList.tsx",
              lineNumber: 72,
              columnNumber: 47
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 67,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 57,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2/4 text-sm text-gray-500 italic", children: "No component selected" }, void 0, false, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 79,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/4 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/components/${category}`, className: "text-sm text-blue-600 hover:text-blue-800", children: [
            "Add ",
            categoryNames[category]
          ] }, void 0, true, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 84,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/BuildComponentList.tsx",
            lineNumber: 83,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BuildComponentList.tsx",
          lineNumber: 78,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BuildComponentList.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this) }, category, false, {
        fileName: "app/components/BuildComponentList.tsx",
        lineNumber: 49,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/BuildComponentList.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BuildComponentList.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c = BuildComponentList;
var _c;
$RefreshReg$(_c, "BuildComponentList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/build.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/build.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/build.tsx"
  );
  import.meta.hot.lastModified = "1746036132621";
}
var meta = () => {
  return [{
    title: "Current Build - AppFit PC Builder"
  }, {
    name: "description",
    content: "View and edit your current PC build"
  }];
};
function BuildPage() {
  _s();
  const {
    currentBuild,
    totalPrice,
    compatibility
  } = useLoaderData();
  const submit = useSubmit();
  const handleRemoveComponent = (category) => {
    const formData = new FormData();
    formData.append("_action", "remove-component");
    formData.append("category", category);
    submit(formData, {
      method: "post"
    });
  };
  const handleUpdateName = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("_action", "update-name");
    submit(formData, {
      method: "post"
    });
  };
  const handleClearBuild = () => {
    if (window.confirm("Are you sure you want to clear your current build?")) {
      const formData = new FormData();
      formData.append("_action", "clear-build");
      submit(formData, {
        method: "post"
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, { currentBuild }, void 0, false, {
      fileName: "app/routes/build.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-8 flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit: handleUpdateName, className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "name", defaultValue: currentBuild.name, className: "shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mr-2", placeholder: "Build Name" }, void 0, false, {
            fileName: "app/routes/build.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: "Rename" }, void 0, false, {
            fileName: "app/routes/build.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/build.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: handleClearBuild, className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500", children: "Clear Build" }, void 0, false, {
          fileName: "app/routes/build.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/build.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BuildComponentList, { build: currentBuild, onRemoveComponent: handleRemoveComponent }, void 0, false, {
          fileName: "app/routes/build.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/build.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-5 sm:px-6 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Build Summary" }, void 0, false, {
            fileName: "app/routes/build.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/build.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium text-gray-500", children: "Total Price:" }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 162,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xl font-bold text-gray-900", children: formatPrice(totalPrice) }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 163,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/build.tsx",
                lineNumber: 161,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium text-gray-500", children: "Component Count:" }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 167,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium text-gray-900", children: Object.keys(currentBuild.components).length }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 168,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/build.tsx",
                lineNumber: 166,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/build.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `p-4 rounded-md mb-4 ${compatibility.compatible ? "bg-green-50" : "bg-red-50"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: compatibility.compatible ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-5 w-5 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 176,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 175,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-medium text-green-800", children: "All components are compatible" }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 179,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 178,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/build.tsx",
              lineNumber: 174,
              columnNumber: 49
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-5 w-5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 183,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 182,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: "Compatibility issues detected" }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 186,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: compatibility.issues.map((issue, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: issue }, index, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 189,
                  columnNumber: 75
                }, this)) }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 188,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/build.tsx",
                  lineNumber: 187,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/build.tsx",
                lineNumber: 185,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/build.tsx",
              lineNumber: 181,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/build.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/build.tsx",
              lineNumber: 172,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700", children: "Export Build" }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 198,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50", children: "Share Build" }, void 0, false, {
                fileName: "app/routes/build.tsx",
                lineNumber: 201,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/build.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/build.tsx",
            lineNumber: 159,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/build.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/build.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/build.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/build.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/build.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/build.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_s(BuildPage, "g4ZM4FeKrQi/ozHDECvOvzCM36U=", false, function() {
  return [useLoaderData, useSubmit];
});
_c2 = BuildPage;
var _c2;
$RefreshReg$(_c2, "BuildPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BuildPage as default,
  meta
};
//# sourceMappingURL=/build/routes/build-DS6SHVC2.js.map
