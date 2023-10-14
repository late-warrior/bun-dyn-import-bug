# Potential issue with bun build in resolving dynamic imports

## Repro

```bash
$> bun install
$> bun build --splitting --outdir=static ./src/index.js
$> cp index.html static/index.html
```

* Serve the built files using a static server - eg. python - 

```bash
$> cd static
$> python -m http.server 8000
```

* In the built file (`static/index.js`) - 

```javascript
// Seen
var Components = import_react.lazy(() => import("trial/components.js"));
// Expected
var Components = import_react.lazy(() => import("./trial/components.js"));
```