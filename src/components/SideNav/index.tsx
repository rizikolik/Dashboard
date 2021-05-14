import React, { FC, ReactElement } from 'react';
import StyledSelect from 'components/Forms/Select';
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
import MenuItem from './MenuItem';
import './index.scss';
import { MouseEventHandler } from 'react-select';

type SideNavProps = {
  Component: ReactElement;
};
const SideNav: FC<SideNavProps> = ({ Component }) => {
  const options = [
    {
      value: 'home',
      label: (
        <span className='labelCont'>
          <span className='menuItem'>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <FiHome />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              Home
            </span>
          </span>
          <span className='menuItemCount'>2</span>
        </span>
      ),
    },
    {
      value: 'shop',
      label: (
        <span className='labelCont'>
          <span className='menuItem'>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <FiHome />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              Home
            </span>
          </span>
          <span className='menuItemCount'>2</span>
        </span>
      ),
    },
  ];
  const handleClick=(e:MouseEventHandler)=>console.log(e);

  return (
    <div className='container'>
      <div className='nav-wrapper'>
        <div className='dropdown'>
          <StyledSelect options={options} />
        </div>
        <div className='category'>
          <span className='categoryName'>Category 1</span>

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
        <div className='category'>
          <span className='categoryName'>Category 2</span>
          <MenuItem name='Typography' icon={<FiType />} />
          <MenuItem name='Feather' icon={<FiEye />} />

          <MenuItem
            name='Cards'
            chip={<span className='new'>New</span>}
            icon={<FiCreditCard />}
            linkIcon={<FiChevronRight />}
          />
        </div>
      </div>
{React.cloneElement(Component ,{handleClick:handleClick})}
    </div>
  );
};

export default SideNav;
