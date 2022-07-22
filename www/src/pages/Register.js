import video from "../assets/image.webp";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onLoginAction = useStoreActions((actions) => actions.onLogin);
  const navigate = useNavigate();

  const body = {
    background: "#fff",
  };
  const top = {
    marginTop: "5rem",
  };

  const mystyle = {
    display: "block",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #c4c4c4",
    padding: "1em",
    marginBottom: "1.25rem",
    fontSize: "0.875rem",
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    if (res.data.jwt) {
      localStorage.sessionToken = res.data.jwt;
      onLoginAction(res.data.user);
      navigate("/");
    }
  };

  return (
    <div>
      <style>
        {
          "\
      .navbar{\
        display:none\
      }\
       body {\
          padding-bottom:0px;\
          background:#fff;\
          overflow:hidden\
       }\
   "
        }
      </style>
      <div className="split-screen">
        <div className="left">
          <img id="background-video" autoPlay loop muted src={video} />

          <section class="copy">
            <h1 className="font-medium text-4xl">Fall a sleep </h1>
            <p>Go to the world of dreams now with FAS . </p>
          </section>
        </div>
        <div className="right mt-lg-5  " style={top}>
          <form onSubmit={onSignUp} method="post">
            <section className="copy">
              <h2 className="text-2xl " style={{ fontWeight: "bold" }}>
                Sign up
              </h2>
              <br></br>
            </section>
            <div className="input-container email">
              <label for="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                style={mystyle}
                placeholder="Enter your name  "
                required
                className="login_signup_textfield"
                name="name"
              ></input>
            </div>
            <div className="input-container email">
              <label for="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                style={mystyle}
                placeholder="Enter your email"
                required
                className="login_signup_textfield"
                name="email"
                type="email"
              ></input>
            </div>
            <div className="input-container password">
              <label for="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                style={mystyle}
                placeholder="Must be at least 6 characters"
                required
                className="login_signup_textfield"
                name="password"
                type="password"
              ></input>
            </div>
            <div className="input-container cta"></div>
            <div className="login-container">
              <p>
                Already a member ? |{" "}
                <a href="/login" className="text-decoration-none">
                  {" "}
                  <strong>Sign in</strong>
                </a>
              </p>
            </div>
            <button
              className="signup-btn bg-priamry mt-3"
              type="submit"
              name="submit"
              id="loginFunCode"
            >
              Sign Up
            </button>
            <p className="mt-1 w-full  mt-2" style={{ textAlign: "right" }}>
              <a href="forgot-password.html" className="mt-1 d-block">
                Forgot Password?
              </a>
            </p>
            <section class="copy legal w-full text-center">
              <p className="text-center">
                <span className="small">
                  By continuing, you agree to accept our <br></br>
                  <a href="#" className="color:black">
                    Privacy Policy
                  </a>{" "}
                  &amp;{" "}
                  <a href="#" className="text-color-black">
                    Terms of Service
                  </a>
                </span>
              </p>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
