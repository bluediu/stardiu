import React from 'react';
import { Provider } from 'react-redux';
import { store } from './context/store/store';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
