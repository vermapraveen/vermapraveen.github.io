import Home from "/src/components/header/home.js";
import Nav from "/src/components/header/nav-menu.js";

const Header = props => {
  return React.createElement("div", { class: "header" }, [
    React.createElement(Home, null, null),
    React.createElement(Nav, null, null)
  ]);
};

export default Header;
