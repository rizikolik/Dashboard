import React from 'react';
import './index.scss';
import Header from 'components/Header';

const Home = ({ ...props }) => {
  return (
    <div className='home'>
      <Header onClick={props.handleClick} />
      <div>INner COntaiern</div>
    </div>
  );
};
export default Home;
