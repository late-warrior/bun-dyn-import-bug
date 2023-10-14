import React, { lazy } from "react";
import ReactDOM from "react-dom";

console.log("entrypoint");
const Components = lazy(() => import("./trial/components"));

function Fallback() {
    return (
        <div>
            <h1>Loading...</h1>
            <p>This is a fallback component</p>
        </div>
    )
}

function App() {
  return (
    <React.Suspense fallback={<Fallback />}>
      <Components />
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
