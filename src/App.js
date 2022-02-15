import React from 'react';
import { Provider } from 'react-redux';
import { store } from './context/store/store';
import { ToastContainer } from 'react-toastify';

/* ROUTER */
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}

export default App;
