import { GoogleLogout } from 'react-google-login';

import './index.css';

const CLIENT_ID = '534512069329-3mkppqeiv51mhcd1uo147og9v21q4ipb.apps.googleusercontent.com'

const HomeDashboard = ({ name, imageUrl, email, logoutHandler }) => {
  return (
    <div className="home_dashboard">
      <div className="card" style={{ width: '180px' }} >
        <img className="card-img-top" src={imageUrl} alt="user" style={{ height: '180px', width: '178px' }} />
        <div className="card-body">
          <p className="card-text">Hi, 👋 {name}.</p>
            <h3>User Logged in</h3>
            <p>Name: {name}</p>
            <p>Email Address: {email}</p>
            <br />
            <br />
        </div>
      </div>
      <GoogleLogout clientId={CLIENT_ID}  onLogoutSuccess={logoutHandler}/>
    </div>
  )
};

export default HomeDashboard;
