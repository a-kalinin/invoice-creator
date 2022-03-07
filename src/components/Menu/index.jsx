import React from 'react';
import style from './index.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={style.root}>
      <div className={style.title}>invoice-creator</div>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to="/">Export PDF</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

Menu.propTypes = {
};

Menu.defaultProps = {};

export default Menu;
