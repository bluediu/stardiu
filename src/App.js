import React from 'react';
import { Provider } from 'react-redux';
import { store } from './context/store/store';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
      <h1>Stardiu</h1>
    </Provider>
  );
}

export default App;
