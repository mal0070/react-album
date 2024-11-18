import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import navJson from './nav.json';
import { Link, useLocation } from 'react-router-dom';
import styles from './nav.module.scss';
import { searchValueAtom } from '@/store';

interface Nav {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function Nav() {
  const location = useLocation();
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const [navItem, setNavItem] = useState<Nav[]>(navJson);

  useEffect(()=> {
    navItem.forEach((nav: Nav)=> {
      nav.isActive = false;
      
      if(nav.path === location.pathname || location.pathname.includes(nav.path)){
        nav.isActive = true;
        setSearchValue(nav.searchValue);
      }
    });
    setNavItem([...navItem]);
  },[location.pathname])

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
