import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
    <h1 className="header__title"><img className="head__img" src={require('../image/favicon.png')} />{props.title}</h1>
    {props.subtitle && <h2 class="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);
  
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;