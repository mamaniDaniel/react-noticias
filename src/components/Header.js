import React from 'react';

const Header = ({titulo}) => (
  <nav className="nav-wrapper light-blue darken-3">
    <a className="brand-logo center" href="/#">{titulo}</a>
  </nav>
)
 
export default Header;