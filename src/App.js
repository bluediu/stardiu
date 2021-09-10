import React from 'react';
import { Provider } from 'react-redux';
import { store } from './context/store/store';

/* ROUTER */
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
