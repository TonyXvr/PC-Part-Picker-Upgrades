import {
  BuildSummary
} from "/build/_shared/chunk-4DHAL4CV.js";
import {
  Footer,
  Header,
  require_node
} from "/build/_shared/chunk-GENXGLHA.js";
import {
  useLoaderData
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

// app/routes/builds.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/builds.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/builds.tsx"
  );
  import.meta.hot.lastModified = "1746036132634";
}
var meta = () => {
  return [{
    title: "Featured Builds - AppFit PC Builder"
  }, {
    name: "description",
    content: "Browse featured PC builds for inspiration"
  }];
};
function BuildsPage() {
  _s();
  const {
    sampleBuilds,
    currentBuild
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { currentBuild }, void 0, false, {
      fileName: "app/routes/builds.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-extrabold text-gray-900 mb-8", children: "Featured Builds" }, void 0, false, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2", children: sampleBuilds.map((build) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuildSummary, { build }, build.id, false, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 62,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 bg-gray-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "About Featured Builds" }, void 0, false, {
          fileName: "app/routes/builds.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "Our featured builds are carefully curated by our team of PC building experts. They represent balanced configurations for different use cases and budgets." }, void 0, false, {
          fileName: "app/routes/builds.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "You can use these builds as a starting point for your own custom PC, or modify them to better suit your specific needs and preferences." }, void 0, false, {
          fileName: "app/routes/builds.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/builds.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/builds.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/builds.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/builds.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(BuildsPage, "PshQL5h2A5yVGQL0pWqePnx/9BM=", false, function() {
  return [useLoaderData];
});
_c = BuildsPage;
var _c;
$RefreshReg$(_c, "BuildsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BuildsPage as default,
  meta
};
//# sourceMappingURL=/build/routes/builds-KIOGAWRN.js.map
