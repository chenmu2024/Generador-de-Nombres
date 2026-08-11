const fs = require('fs');
let content = fs.readFileSync('src/pages/CategoryPage.tsx', 'utf8');

// Replace standard imports with React.lazy
content = content.replace(/import Generator from '\.\.\/components\/Generator';/, "const Generator = React.lazy(() => import('../components/Generator'));");
content = content.replace(/import InvisibleSpaceTool from '\.\.\/components\/InvisibleSpaceTool';/, "const InvisibleSpaceTool = React.lazy(() => import('../components/InvisibleSpaceTool'));");
content = content.replace(/import AlphabetMatrixTool from '\.\.\/components\/AlphabetMatrixTool';/, "const AlphabetMatrixTool = React.lazy(() => import('../components/AlphabetMatrixTool'));");
content = content.replace(/import StoreNameTool from '\.\.\/components\/StoreNameTool';/, "const StoreNameTool = React.lazy(() => import('../components/StoreNameTool'));");

fs.writeFileSync('src/pages/CategoryPage.tsx', content, 'utf8');
