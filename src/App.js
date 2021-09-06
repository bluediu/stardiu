import React from 'react';
import { Provider } from 'react-redux';
import { store } from './context/store/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Stardiu</h1>
    </Provider>
  );
}

export default App;
