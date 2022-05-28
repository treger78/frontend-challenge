import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li activeclassname={"active"}>
            <NavLink to="/">Все котики</NavLink>
          </li>
          <li activeclassname={"active"}>
            <NavLink to="/favorite-cats">Любимые котики</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
