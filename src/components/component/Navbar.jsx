import React from "react";
import { pages } from "../../data/nav";
import { NavLink } from "react-router-dom";

function Navbar() {


  
  return (
    <ul style={{ display: "flex", marginLeft: 550 }}>
      {pages.map((page, id) => {
        return (
          <NavLink>
            <div key={id} style={{ color: "black", marginLeft: 20 }}>
              <NavLink to={page.path}>{page.name}</NavLink>
            </div>
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Navbar;
