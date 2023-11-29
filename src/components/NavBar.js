import React from "react";

function aTag(links) {
  return links.map(link => {
    return <a href={`#${link}`} key={link}>{`${link}`}</a>;
  })
}

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{aTag(links)}</nav>;
}

export default NavBar;
