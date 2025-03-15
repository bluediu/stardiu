/* Container */
import { Social } from './Social';
import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <hr />
        <small>Contact</small>
        <Social />
        <hr />
        <div
          className="text-center p-3"
          style={{
            backgroundColor: 'white',
          }}
        >
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className="text-dark" href="https://mdbootstrap.com/">
            Stardiu Coffee Company. All rights reserved.
          </a>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
};
