/* Libs */
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

/* Context */
import { startGoogleSignIn } from '@/apps/Users/context';

/* Hooks */
import { useAppDispatch } from '@/hooks';

/*
 Reference: https://livefiredev.com/in-depth-guide-sign-in-with-google-in-a-react-js-application/
*/
export const GoogleButton = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="py-4 d-flex justify-content-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          dispatch(startGoogleSignIn(credentialResponse.credential!));
        }}
        onError={() => {
          toast.error('Failed to login with Google');
        }}
        useOneTap
        shape="pill"
        size="large"
      />
    </section>
  );
};
