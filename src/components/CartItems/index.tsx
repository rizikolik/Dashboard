import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';

//Interface
import { Item } from 'redux/slicers/cart';
//Hooks
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import useOnClickOutside from 'hooks/useOnClickOutside';
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
  const cartRef = useRef<HTMLHeadingElement>(null);
  const items = useAppSelector(selectItems);
  const count = useAppSelector(selectCount);
  const total = useAppSelector(selectTotalAmount);
  const [showCart, setShowCart] = useState<boolean>(visibility);

  const handleIncrement = (item: Item) => {
    dispatch(increaseItem(item));
  };
  const handleDecrement = (item: Item) => {
    item?.count === 1
      ? dispatch(removeItem(item))
      : dispatch(decreaseItem(item));
  };
  const handleRemove = (item: Item) => {
    dispatch(removeItem(item));
  };
  const handleCheckout = () => {
    console.log('here.');
    dispatch(resetCart());
  };

  // Function for Closing the Cart When user Click to anywhere else in the Page
  const handleClickOutside = () => {
    setShowCart(false);
  };

  useOnClickOutside(cartRef, handleClickOutside);

  if (!showCart) {
    return null;
  }
  return (
    <div className={styles.cartItemsContainer} ref={cartRef}>
      <div className={styles.listHeader}>
        <span className={styles.myCard}>My Cart</span>
        {count && count > 0 ? (
          <span className={styles.topCounter}>{count} Items</span>
        ) : null}
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
                  onRemove={() => handleRemove(item)}
                />
              );
            })
          : null}
      </div>
      <div className={styles.totalWrapper}>
        <span>Total:</span>
        <span className={styles.totalAmount}>${total?.toFixed(2)}</span>
      </div>
      <button
        className={classNames(
          styles.checkout,
          total <= 0 ? styles.disabledButton : null
        )}
        onClick={handleCheckout}
        disabled={total <= 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartItems;
