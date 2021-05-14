import React from 'react';
import './index.scss';

const Home = ({...props}) => {
  return <div className='home' onClick={props.handleClick}>ello from home.....</div>;
};
export default Home;
 