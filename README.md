# Potential issue with bun build in resolving dynamic imports

## Repro

* Steps -

```bash
$> bun install
$> bun run bun:build
# Serve the built files using a static server - eg. python - 
$> python -m http.server 8000
```

* In the built file (`static/index.js`) - 

```javascript
// Seen
var Components = import_react.lazy(() => import("trial/components.js"));
// Expected
var Components = import_react.lazy(() => import("./trial/components.js"));
```

* As a cross-check, verified that this works in `vite` -

```bash
$> bun run vite:build
$> cd dist
$> python -m http.server 8001
```
