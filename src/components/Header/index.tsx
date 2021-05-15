import React, { useCallback, useEffect, useState } from 'react';

import {
  FiSearch,
  FiMail,
  FiMessageSquare,
  FiCheckSquare,
  FiCalendar,
  FiStar,
  FiShoppingCart,
  FiBell,
  FiMenu,
} from 'react-icons/fi';

//Local Imports
import useWindowSize from 'hooks/useWindowSize';

//Styles
import styles from './index.module.scss';
const Header = ({ ...props }) => {
  const [search, setSearch] = useState<string>('');

  //Show Menu Icon When Window Resizes

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const [width] = useWindowSize();

  // Callbacks

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
  }, []);

  const handleMenu = useCallback(
    (event: React.MouseEvent<SVGElement, MouseEvent>) => {
      setSideMenu(!sideMenu);
      props.onClick(event);
    },
    [sideMenu, props]
  );

  // Effects
  useEffect(() => {
    if (width <= 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [width]);

  return (
    <div className={styles.headerCont}>
      <div className={styles.leftIconWrapper}>
        <span className={styles.iconWrapper}>
          <FiCalendar />
        </span>
        <span className={styles.iconWrapper}>
          <FiMessageSquare />
        </span>
        <span className={styles.iconWrapper}>
          <FiMail />
        </span>
        <span className={styles.iconWrapper}>
          <FiCheckSquare />
        </span>
        <span className={styles.iconWrapper}>
          <FiStar />
        </span>
      </div>
      {showMenu && (
        <span
          className={!sideMenu ? styles.menuIcon : styles.menuIconFullWidth}
        >
          <FiMenu onClick={handleMenu} />
        </span>
      )}
      {!sideMenu && (
        <>
          <div className={styles.searchWrapper}>
            <input
              name='search'
              value={search}
              onChange={handleChange}
              type='text'
            />
            <span className={styles.iconWrapper}>
              <FiSearch onClick={() => setSearch('')} />
            </span>
          </div>
          <div className={styles.rightIconWrapper}>
            <span className={styles.cartCounter}>
              <FiShoppingCart />
              <span>4</span>
            </span>
            <span className={styles.iconWrapper}>
              <FiBell />
            </span>
          </div>
          <div className={styles.profile}>
            <span className={styles.userName}>UserName</span>
            <span className={styles.role}>admin</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
