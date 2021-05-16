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

import CartItems from 'components/CartItems';

//Hooks
import useWindowSize from 'hooks/useWindowSize';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';

//Selectors,Reducers
import {
  selectItems,
  selectCount,
  addItem,
  increaseItem,
  decreaseItem,
  removeItem,
  incrementByAmount,
} from 'redux/slicers/cart';

//Styles
import styles from './index.module.scss';

const Header = ({ ...props }) => {
  const [search, setSearch] = useState<string>('');
  const items = useAppSelector(selectItems);
  const count = useAppSelector(selectCount);

  //Show Menu Icon When Window Resizes

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const [width] = useWindowSize();

  // Callbacks
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(addItem({ name: 'Itemmm', price: 40, count: 1 }));
  };
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
      {cartVisible && <CartItems visibility={cartVisible} />}
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
            <span
              className={styles.cartCounter}
              onClick={() => {
                handleIncrement();
                setCartVisible(true);
                console.log(count, 'hre selected items');
              }}
            >
              <FiShoppingCart />
              {count && count > 0 ? <span>{count}</span> : null}
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
