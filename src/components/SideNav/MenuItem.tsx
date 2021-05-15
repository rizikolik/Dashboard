import React, { FC, ReactNode } from 'react';
import styles from './index.module.scss';
type MenuItemProps = {
  icon: ReactNode;
  name: string;
  chip?: ReactNode;
  linkIcon?: ReactNode;
};

const MenuItem: FC<MenuItemProps> = ({ icon, name, chip, linkIcon }) => {
  return (
    <div className={styles.menuItemContainer}>
      <div>
        <span className={styles.itemsLeft}>
          <span className={styles.iconWrapper}>{icon}</span>
          <span>{name}</span>
        </span>
        <span className={styles.itemsRight}>
          <span className={styles.iconWrapper}>{chip}</span>
          <span className={styles.iconWrapper}>{linkIcon}</span>
        </span>
      </div>
    </div>
  );
};
export default MenuItem;
