import Hello from "./hello.js";

ReactDOM.render(
  React.createElement(Hello, { toWhat: "Praveen" }, null),
  document.getElementById("root")
);
