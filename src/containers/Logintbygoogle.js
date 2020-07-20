import React, { Component } from 'react';
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Logintbygoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    // this.signup = this
    //   .signup
    //   .bind(this);
  }
  signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
    debugger;
    // axios.post('http://localhost:3000/Api/Login/SocialmediaData', googleresponse)
    //   .then((result) => {
    //     let responseJson = result;
    //     //sessionStorage.setItem("userData", JSON.stringify(result));
        // this.props.history.push('/Dashboard')
        this.props.history.push('/NavBar')
        this.props.history.push('/Search')
        // this.props.history.push('/Search')
      // });
  };
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Google Using ReactJS
            </div>
        </div>
        <div className="row">
          <div style={{ 'paddingTop': "100px", 'margin-top': '100px', 'margin-left': '360px' }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="120567013050-b2lqtp6vdcp7s7neat1ejpbds5aor7pk.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} ></GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Logintbygoogle;