import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import MainContiner from "./components/main-container/main-container.js";

const App = props => {
  {window.location.pathname.split("/").slice(1)}
  return [
    React.createElement(Header, null, null),
    React.createElement(MainContiner, null, window.location.pathname.split("/").slice(1)),
    React.createElement(Footer, null, null)
  ];
};

export default App;
