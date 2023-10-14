import React, { lazy } from "react";
import ReactDOM from "react-dom";

console.log("entrypoint");
const Components = lazy(() => import("./trial/components"));

function App() {
  return (
    <React.Suspense fallback={<span> Loading </span>}>
      <Components />
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
