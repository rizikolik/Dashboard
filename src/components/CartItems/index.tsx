import React, { FC } from 'react';

//Interface
import { Item } from 'redux/slicers/cart';
//Hooks
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';

import CartItem from 'components/CartItem';
//Selectors,Reducers
import {
  selectItems,
  selectCount,
  selectTotalAmount,
  resetCart,
  increaseItem,
  decreaseItem,
  removeItem,
} from 'redux/slicers/cart';

//Styles
import styles from './index.module.scss';
type CartItemsProps = {
  visibility: boolean;
};

const CartItems: FC<CartItemsProps> = ({ visibility }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const count = useAppSelector(selectCount);
  const total = useAppSelector(selectTotalAmount);

  const handleIncrement = (item: Item) => {
    dispatch(increaseItem(item));
  };
  const handleDecrement = (item: Item) => {
    item?.count === 1
      ? dispatch(removeItem(item))
      : dispatch(decreaseItem(item));
  };
  const handleCheckout = () => {
    dispatch(resetCart());
  };
  if (!visibility) {
    return null;
  }
  return (
    <div className={styles.cartItemsContainer}>
      <div className={styles.listHeader}>
        <span className={styles.myCard}>My Cart</span>
        <span className={styles.topCounter}>{count} Items</span>
      </div>
      <div className={styles.cartItemWrapper}>
        {items && items.length > 0
          ? items.map((item: Item, key: number) => {
              return (
                <CartItem
                  key={key}
                  item={item}
                  onDecrease={() => handleDecrement(item)}
                  onIncrease={() => handleIncrement(item)}
                />
              );
            })
          : null}
      </div>
      <div className={styles.totalWrapper}>
        <span>Total:</span>
        <span className={styles.totalAmount}>${total?.toFixed(2)}</span>
      </div>
      <div className={styles.checkout} onClick={handleCheckout}>
        Checkout
      </div>
    </div>
  );
};

export default CartItems;
