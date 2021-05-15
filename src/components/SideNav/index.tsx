import React, {
  FC,
  ReactElement,
  useEffect,
  useCallback,
  useState,
} from 'react';
import {
  FiHome,
  FiMail,
  FiMessageSquare,
  FiCheckSquare,
  FiCalendar,
  FiShoppingCart,
  FiType,
  FiEye,
  FiCreditCard,
  FiChevronRight,
} from 'react-icons/fi';

//Local Imports
import StyledSelect from 'components/Forms/Select';
import MenuItem from './MenuItem';

//Hooks
import useWindowSize from 'hooks/useWindowSize';

//Styles
import styles from './index.module.scss';

type SideNavProps = {
  Component: ReactElement;
};
const SideNav: FC<SideNavProps> = ({ Component }) => {
  const [width] = useWindowSize();
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const options = [
    {
      value: 'home',
      label: (
        <span className={styles.labelCont}>
          <span className={styles.menuItem}>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <FiHome />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              Home
            </span>
          </span>
          <span className={styles.menuItemCount}>2</span>
        </span>
      ),
    },
    {
      value: 'shop',
      label: (
        <span className={styles.labelCont}>
          <span className={styles.menuItem}>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <FiHome />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              Home
            </span>
          </span>
          <span className={styles.menuItemCount}>2</span>
        </span>
      ),
    },
  ];

  // Callbacks

  const handleClick = useCallback(
    (e: HTMLFormElement) => {
      e.preventDefault();
      setShowMenu(!showMenu);
    },
    [showMenu]
  );

  // Effects
  useEffect(() => {
    if (width <= 768) {
      setShowMenu(false);
      setIsMobile(true);
    } else {
      setShowMenu(true);
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className={styles.container}>
      {showMenu && (
        <div className={ isMobile ? styles.mobile : styles['nav-wrapper']}>
          <div className={styles.dropdown}>
            <StyledSelect options={options} />
          </div>
          <div className={styles.category}>
            <span className={styles.categoryName}>Category 1</span>

            <MenuItem name='Email' icon={<FiMail />} />
            <MenuItem name='Chat' icon={<FiMessageSquare />} />

            <MenuItem name='Todo' icon={<FiCheckSquare />} />

            <MenuItem name='Calendar' icon={<FiCalendar />} />

            <MenuItem
              name='eCommerce'
              icon={<FiShoppingCart />}
              linkIcon={<FiChevronRight />}
            />
          </div>
          <div className={styles.category}>
            <span className={styles.categoryName}>Category 2</span>
            <MenuItem name='Typography' icon={<FiType />} />
            <MenuItem name='Feather' icon={<FiEye />} />

            <MenuItem
              name='Cards'
              chip={<span className={styles.new}>New</span>}
              icon={<FiCreditCard />}
              linkIcon={<FiChevronRight />}
            />
          </div>
        </div>
      )}
      {React.cloneElement(Component, { handleClick: handleClick })}
    </div>
  );
};

export default SideNav;
