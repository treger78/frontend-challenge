import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Все котики</Link>
          </li>
          <li>
            <Link to="/favorite-cats">Любимые котики</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
