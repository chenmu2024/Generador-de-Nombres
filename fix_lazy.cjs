const fs = require('fs');
let content = fs.readFileSync('src/pages/CategoryPage.tsx', 'utf8');

// The tools are already replaced with React.lazy in the imports.
// Now we need to wrap their usage in Suspense.
// They are used like: <Generator />, <InvisibleSpaceTool />, etc.
// But they have props! <Generator initialStyle={...} />
// We can just find the render return and wrap the whole thing?
// No, it's easier to create wrapper components in CategoryPage.

// We will find the React.lazy declarations and create wrapper components.

content = content.replace(
  "const Generator = React.lazy(() => import('../components/Generator'));",
  `const LazyGenerator = React.lazy(() => import('../components/Generator'));
const Generator = (props: any) => (
  <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>}>
    <LazyGenerator {...props} />
  </React.Suspense>
);`
);

content = content.replace(
  "const InvisibleSpaceTool = React.lazy(() => import('../components/InvisibleSpaceTool'));",
  `const LazyInvisibleSpaceTool = React.lazy(() => import('../components/InvisibleSpaceTool'));
const InvisibleSpaceTool = (props: any) => (
  <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>}>
    <LazyInvisibleSpaceTool {...props} />
  </React.Suspense>
);`
);

content = content.replace(
  "const AlphabetMatrixTool = React.lazy(() => import('../components/AlphabetMatrixTool'));",
  `const LazyAlphabetMatrixTool = React.lazy(() => import('../components/AlphabetMatrixTool'));
const AlphabetMatrixTool = (props: any) => (
  <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>}>
    <LazyAlphabetMatrixTool {...props} />
  </React.Suspense>
);`
);

content = content.replace(
  "const StoreNameTool = React.lazy(() => import('../components/StoreNameTool'));",
  `const LazyStoreNameTool = React.lazy(() => import('../components/StoreNameTool'));
const StoreNameTool = (props: any) => (
  <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>}>
    <LazyStoreNameTool {...props} />
  </React.Suspense>
);`
);

fs.writeFileSync('src/pages/CategoryPage.tsx', content, 'utf8');
