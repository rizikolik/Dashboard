import React, { FC, ReactNode } from 'react';

type MenuItemProps = {
  icon: ReactNode;
  name: string;
  chip?: ReactNode;
  linkIcon?: ReactNode;
};

const MenuItem: FC<MenuItemProps> = ({ icon, name, chip, linkIcon }) => {
  return (
    <div className='menuItemContainer'>
      <div>
        <span className='itemsLeft'>
          <span className='iconWrapper'>{icon}</span>
          <span>{name}</span>
        </span>
        <span className='itemsRight'>
          <span className='iconWrapper'>{chip}</span>
          <span className='iconWrapper'>{linkIcon}</span>
        </span>
      </div>
    </div>
  );
};
export default MenuItem;
