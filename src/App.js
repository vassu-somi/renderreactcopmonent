import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div id="root">
      <p>I am learning React. My life is getting better</p>
    </div>
  );
}
ReactDOM.render(
  <p>I am learning React. My life is getting better</p>,
  document.getElementById("root")
);

export default App;
