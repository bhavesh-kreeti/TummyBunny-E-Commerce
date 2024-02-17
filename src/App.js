import { useState } from 'react';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import './App.css';

const BASE_CLASS = 'main-container';

function App() {
  const [authType, setAuthType] = useState(null);

  const onBtnClickHandler = (clickType) => () => setAuthType(clickType);

  const onBackClickhandler = () => setAuthType(null);

  return (
    <section className={`${BASE_CLASS} container`}>
     {authType === 'signUp' && <SignUp />}
     {authType === 'login' && <Login />}
     {authType === null ? <>
      <button onClick={onBtnClickHandler('login')} type="button" class="btn btn-info m-3">Login</button>
      <button type="button" class="btn btn-secondary" onClick={onBtnClickHandler('signUp')}>SiginUp</button>
     </> : <button onClick={onBackClickhandler} type="button" class="btn btn-dark mt-4 back-button">Back</button>}

    </section>
  );
}

export default App;
