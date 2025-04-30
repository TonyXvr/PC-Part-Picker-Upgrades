import {
  calculateTotalPrice,
  checkCompatibility,
  formatPrice,
  getComponentCount,
  isBuildComplete
} from "/build/_shared/chunk-GENXGLHA.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/BuildSummary.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/BuildSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/BuildSummary.tsx"
  );
  import.meta.hot.lastModified = "1746036520494.9998";
}
function BuildSummary({
  build,
  onLoadBuild,
  onDeleteBuild,
  isSaved = false
}) {
  const totalPrice = calculateTotalPrice(build.components);
  const compatibility = checkCompatibility(build.components);
  const componentCount = getComponentCount(build);
  const isComplete = isBuildComplete(build);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: build.name }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: isSaved && onDeleteBuild && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => onDeleteBuild(build.id), className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500", "aria-label": "Delete build", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 41,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BuildSummary.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-500", children: "Total Price:" }, void 0, false, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900", children: formatPrice(totalPrice) }, void 0, false, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-500", children: "Component Count:" }, void 0, false, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-900", children: [
            componentCount,
            " / 9"
          ] }, void 0, true, {
            fileName: "app/components/BuildSummary.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-3 rounded-md mb-4 ${compatibility.compatible ? "bg-green-50" : "bg-red-50"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: compatibility.compatible ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-green-800", children: "Compatible" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 64,
        columnNumber: 41
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: "Compatibility issues" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4 mb-4", children: Object.entries(build.components).slice(0, 4).map(([category, component]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 h-10 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: component.image, alt: component.name }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate", children: component.name }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this)
      ] }, category, true, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 83,
        columnNumber: 88
      }, this)) }, void 0, false, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-3", children: [
        onLoadBuild ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => onLoadBuild(build.id), className: "w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700", children: "Load Build" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 94,
          columnNumber: 26
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/build`, className: "w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700", children: "View Build Details" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        isComplete && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50", children: "Purchase Parts" }, void 0, false, {
          fileName: "app/components/BuildSummary.tsx",
          lineNumber: 100,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BuildSummary.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BuildSummary.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BuildSummary.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = BuildSummary;
var _c;
$RefreshReg$(_c, "BuildSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BuildSummary
};
//# sourceMappingURL=/build/_shared/chunk-4DHAL4CV.js.map
