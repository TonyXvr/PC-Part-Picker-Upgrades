import {
  formatPrice
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

// app/components/ComponentCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ComponentCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ComponentCard.tsx"
  );
  import.meta.hot.lastModified = "1746036529407";
}
function ComponentCard({
  component,
  isInBuild = false,
  onAddToBuild
}) {
  const handleAddToBuild = () => {
    if (onAddToBuild) {
      onAddToBuild(component);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg overflow-hidden transition-all hover:shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-48 bg-gray-50 rounded-md mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: component.image, alt: component.name, className: "h-40 w-auto object-contain" }, void 0, false, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-1 truncate", children: component.name }, void 0, false, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mb-2", children: [
      component.brand,
      " ",
      component.model
    ] }, void 0, true, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900", children: formatPrice(component.price) }, void 0, false, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: component.category }, void 0, false, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/components/${component.category}/${component.id}`, className: "inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50", children: "Details" }, void 0, false, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      onAddToBuild && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleAddToBuild, disabled: isInBuild, className: `inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${isInBuild ? "bg-green-100 text-green-800 cursor-default" : "text-white bg-blue-600 hover:bg-blue-700"}`, children: isInBuild ? "In Build" : "Add to Build" }, void 0, false, {
        fileName: "app/components/ComponentCard.tsx",
        lineNumber: 64,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ComponentCard.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ComponentCard.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ComponentCard.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = ComponentCard;
var _c;
$RefreshReg$(_c, "ComponentCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ComponentCard
};
//# sourceMappingURL=/build/_shared/chunk-UENCV6PO.js.map
