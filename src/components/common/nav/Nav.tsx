import { useState } from 'react';
import navJson from './nav.json';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

interface Nav {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function Nav() {
  const [navItem, setNavItem] = useState<Nav[]>(navJson);

  const navLinks = navItem.map((nav: Nav) => {
    return (
      <Link to={nav.path} key={nav.index}>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {nav.label}
        </h4>
      </Link>
    );
  });

  return <nav className={styles.nav}>{navLinks}</nav>;
}

export { Nav };
