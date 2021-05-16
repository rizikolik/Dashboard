import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';

//Interface
import { Item } from 'redux/slicers/cart';

//Local Imports

import Header from 'components/Header';

//Hooks
import { useAppDispatch } from 'hooks/reduxHooks';

//Apis
import getItems from 'api/getItems';
//Selectors,Reducers
import { addItem } from 'redux/slicers/cart';

//Styles
import styles from './index.module.scss';

const Home = ({ ...props }) => {
  const dispatch = useAppDispatch();

  //CallBack
  const handleGetItems = useCallback(async () => {
    try {
      const results = await getItems();
      results?.shopping_cart_items?.forEach((ele: Item) => {
        dispatch(addItem(ele));
      });
    } catch (error) {
      console.log(error, 'Fetch Items from Server Error ');
    }
  }, [dispatch]);
  //Effect

  useEffect(() => {
    handleGetItems();
  }, [handleGetItems]);
  return (
    <div className={styles.home}>
      <Header onClick={props.handleClick} />
      <div className={styles.gridContainer}>
        <div className={styles.leftTitle}>
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
          </div>
        </div>
        <div className={styles.rightTitle}>
          <div>
            <div className={styles.titleHeader}>
              <h3 style={{ width: '50%' }}>Title</h3>
              <h5>Updated N month(s) ago.</h5>
            </div>
          </div>
          <div className={styles.circleContainer}>
            <div className={styles.circleWrapper}>
              <span className={classNames(styles.circle, styles.firstCircle)}>
                img
              </span>
              <div className={styles.imgTag}>
                <span>
                  <strong>999K</strong>
                </span>
                <span>Lorem</span>
              </div>
            </div>
            <div className={styles.circleWrapper}>
              <span className={classNames(styles.circle, styles.secondCircle)}>
                img
              </span>
              <div className={styles.imgTag}>
                <span>
                  <strong>999K</strong>
                </span>
                <span>Lorem</span>
              </div>
            </div>
            <div className={styles.circleWrapper}>
              <span className={classNames(styles.circle, styles.thirdCircle)}>
                img
              </span>
              <div className={styles.imgTag}>
                <span>
                  <strong>999K</strong>
                </span>
                <span>Lorem</span>
              </div>
            </div>
            <div className={styles.circleWrapper}>
              <span className={classNames(styles.circle, styles.fourthCircle)}>
                img
              </span>
              <div className={styles.imgTag}>
                <span>
                  <strong>999K</strong>
                </span>
                <span>Lorem</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondLeft}>
          <div className={styles.innerWrapperTop}>
            <div className={styles.innerElement}></div>
            <div className={styles.innerElement}></div>
          </div>
          <div className={styles.innerWrapperBottom}></div>
        </div>
        <div className={styles.secondRight}>I am a Text Centered!</div>
        <div className={styles.bottomItemFirst}></div>
        <div className={styles.bottomItemSecond}></div>
      </div>
    </div>
  );
};
export default Home;
