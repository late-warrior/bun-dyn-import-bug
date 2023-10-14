# Potential issue with bun build in resolving dynamic imports

## Repro

* Steps -

```bash
$> bun install
$> bun build --splitting --outdir=static ./src/index.js
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