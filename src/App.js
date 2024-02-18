import { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import './App.css';
import { isEmpty } from 'lodash';
import HomeDashboard from './screens/HomeDashboard';

const BASE_CLASS = 'main-container';
const CLIENT_ID = '534512069329-3mkppqeiv51mhcd1uo147og9v21q4ipb.apps.googleusercontent.com'

const LoadingOverlay = () => (
  <div className="overlay">
    <div className="overlay__inner">
        <div className="overlay__content"><span className="spinner"></span></div>
    </div>
  </div>
)

function App() {
  const [authType, setAuthType] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [isPageLoaded, setIsPageLoaded] = useState(true);
  console.log(userDetails);
  useEffect(() => {
    const initializeGApi = () => {
      gapi.auth2.init({
        clientId: CLIENT_ID,
        scope: ''
      })
    }
    gapi.load('client:auth2', initializeGApi);
  }, [])

  const onBtnClickHandler = (clickType) => () => setAuthType(clickType);

  const onBackClickhandler = () => setAuthType(null);

  const loginSuccessHandler = ({ profileObj }) => {
    console.log('checking');
    setIsPageLoaded(true);
    setUserDetails({ ...profileObj })
  }

  const logoutHandler = () => {
    setUserDetails({});
  }

  console.log(userDetails, 'userDetails');

  return (
    <section className={`${BASE_CLASS}`}>
      {isEmpty(userDetails) ?
        <div className={`${BASE_CLASS}__login container`}>
          {authType === 'signUp' && <SignUp />}
          {authType === 'login' && <Login />}
          <GoogleLogin
            clientId={CLIENT_ID}
            onSuccess={loginSuccessHandler}
            onFailure={e => console.log(e, 'failure')}
            style={{ margin: '20px' }}
            isSignedIn
            cookiePolicy="single_host_origin"
          />
          {authType === null ? <>
            <button onClick={onBtnClickHandler('login')} type="button" className="btn btn-info login-btn">Login</button>
            <button type="button" className="btn btn-secondary signup-btn" onClick={onBtnClickHandler('signUp')}>SiginUp</button>
          </> : <button onClick={onBackClickhandler} type="button" className="btn btn-dark back-button">Back</button>}
        </div> :
        <HomeDashboard {...userDetails} logoutHandler={logoutHandler} />
      }
     {isPageLoaded ? null : <LoadingOverlay />}
    </section>
  );
}

export default App;
