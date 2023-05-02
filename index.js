import { createElement, render, useState } from "./myreact.js";

const container = document.getElementById("root");

/*
let element = createElement(
  "div",
  { style: "background: salmon;" },
  createElement("h1", {}, "Hello World!"),
  createElement("h2", { style: "text-align: right;" }, "from Didact")
);
render(element, container);
*/

function App() {
  const [count, setCount] = useState(1);

  return createElement(
    "main",
    { style: "background: blue;" },
    createElement("h1", {}, "Hello World!"),
    createElement("h2", { style: "text-align: right;" }, "from Didact"),
    createElement("h1", {}, "Hello World!"),
    createElement(
      "button",
      { onClick: () => setCount((c) => c + 1) },
      "button"
    ),
    createElement("h1", {}, count)
  );
}

const element = createElement(App, { name: "React" });

render(element, container);
