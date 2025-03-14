/* Redux */
import { Provider } from 'react-redux';

/* Libs */
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

/* Routes */
import { AppRouter } from './routes';

/* Context store */
import store from './context/store';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_CLIENT_ID}>
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
          pauseOnHover={false}
        />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
