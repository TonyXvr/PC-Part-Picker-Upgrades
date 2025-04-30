import {
  CategorySelector
} from "/build/_shared/chunk-I56ZY62M.js";
import {
  ComponentCard
} from "/build/_shared/chunk-UENCV6PO.js";
import {
  Footer,
  Header,
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

// app/routes/components.$category.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.$category.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.$category.tsx"
  );
  import.meta.hot.lastModified = "1746036641729";
}
var meta = ({
  params
}) => {
  const categoryName = getCategoryDisplayName(params.category);
  return [{
    title: `${categoryName} - AppFit PC Builder`
  }, {
    name: "description",
    content: `Browse and select ${categoryName} for your PC build`
  }];
};
function getCategoryDisplayName(category) {
  const displayNames = {
    "cpu": "CPUs",
    "cpu-cooler": "CPU Coolers",
    "motherboard": "Motherboards",
    "memory": "Memory",
    "storage": "Storage",
    "video-card": "Video Cards",
    "case": "Cases",
    "power-supply": "Power Supplies",
    "monitor": "Monitors"
  };
  return displayNames[category] || "Components";
}
function ComponentCategoryPage() {
  _s();
  const {
    category,
    components,
    currentBuild,
    currentComponent
  } = useLoaderData();
  const submit = useSubmit();
  const handleAddToBuild = (componentId) => {
    const formData = new FormData();
    formData.append("componentId", componentId);
    submit(formData, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { currentBuild }, void 0, false, {
      fileName: "app/routes/components.$category.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-extrabold text-gray-900 mb-8", children: getCategoryDisplayName(category) }, void 0, false, {
        fileName: "app/routes/components.$category.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CategorySelector, { activeCategory: category }, void 0, false, {
          fileName: "app/routes/components.$category.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/components.$category.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: components.map((component) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComponentCard, { component, isInBuild: currentComponent?.id === component.id, onAddToBuild: () => handleAddToBuild(component.id) }, component.id, false, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 144,
            columnNumber: 44
          }, this)) }, void 0, false, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this),
          components.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg p-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "No components found in this category." }, void 0, false, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/components.$category.tsx",
            lineNumber: 147,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.$category.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.$category.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.$category.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/components.$category.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.$category.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_s(ComponentCategoryPage, "MF8ACWxvHQ/aAfnMwlyrbB8rZWY=", false, function() {
  return [useLoaderData, useSubmit];
});
_c = ComponentCategoryPage;
var _c;
$RefreshReg$(_c, "ComponentCategoryPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ComponentCategoryPage as default,
  meta
};
//# sourceMappingURL=/build/routes/components.$category-SOOGMJBD.js.map
