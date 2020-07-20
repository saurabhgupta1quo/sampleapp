import React from 'react';
import ReactDOM from 'react-dom';

import { GoogleLogout } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
<GoogleLogout
  clientId="120567013050-b2lqtp6vdcp7s7neat1ejpbds5aor7pk.apps.googleusercontent.com"
  buttonText="Logout"
  onLogoutSuccess={logout}
>
</GoogleLogout>,
  document.getElementById('googleButton')
);

export default Logoutbygoogle;