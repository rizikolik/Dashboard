import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import Routes from './Routes';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
