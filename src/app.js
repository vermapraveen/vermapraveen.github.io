import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import MainContiner from "./components/main-container/main-container.js";

const App = props => {
  return [
    React.createElement(Header, null, `Hello ${props.toWhat}`),
    React.createElement(MainContiner, null, `Hello ${props.toWhat}`),
    React.createElement(Footer, null, `Hello ${props.toWhat}`)
  ];
};

export default App;
