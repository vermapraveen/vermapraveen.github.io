const Nav = props => {
  return React.createElement("div", { class: "nav-menu" }, [
    React.createElement("a", { href: "/about" }, "About Me"),
    React.createElement("a", { href: "/blog" }, "Articles"),
    React.createElement("a", { href: "/projects" }, "Projects")
  ]);
};

export default Nav;
