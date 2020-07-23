import React from 'react';
import {
  NavLink
} from "react-router-dom";

import styles from './style.css';

export default function Navbar() {
  return (
    <nav className={styles['navigation']}>
      <ul>
        <li>
          <NavLink activeClassName={styles['active']} to="/me">Me</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles['active']} to="/experiments">Experiments</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles['active']} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}