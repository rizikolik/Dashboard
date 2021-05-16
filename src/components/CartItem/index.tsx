import React, { FC } from 'react';

//Interfaces
import { Item } from 'redux/slicers/cart';
//Styles
import styles from './index.module.scss';

type CartItemProps = {
  onIncrease: () => void;
  onDecrease: () => void;
  item: Item;
};

const CartItem: FC<CartItemProps> = ({ onIncrease, onDecrease, item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.updateIcons}>
        <span className={styles.negative} onClick={onDecrease}>
          -
        </span>
        <span className={styles.itemCount}>{item.count}</span>
        <span className={styles.positive} onClick={onIncrease}>
          +
        </span>
      </div>
      <div className={styles.totalItemPrice}>
        ${(item.count * item.price).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
