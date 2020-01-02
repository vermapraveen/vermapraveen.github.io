import React from 'react'
const Nav = props => {
  return React.createElement("div", { className: "nav-menu" }, [
    React.createElement("a", { href: "/about", key: 'about-href' }, "About Me"),
    React.createElement("a", { href: "/blog", key: 'blog-href' }, "Articles"),
    React.createElement("a", { href: "/projects", key: 'projects-href' }, "Projects")
  ]);
};

export default Nav;
