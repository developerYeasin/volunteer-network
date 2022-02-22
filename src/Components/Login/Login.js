import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { firebaseConfig } from './Configc';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from '../../App';
const app = initializeApp(firebaseConfig);

const Login = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const navigate = useNavigate();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const auth = getAuth();
   
   const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setLoggedInUser(user)
         navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
    return (
      <div className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-log">
                <Link to='/'>
                  <img src="./logos/Group 1329.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="login-card">
                <h4 className="login-card-title">Login With</h4>
                <button className="google-btn" onClick={signWithGoogle}>
                  Continue With Google
                </button>
                <p className="create-account">
                  Don't have any account?{" "}
                  <Link to="/register">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;