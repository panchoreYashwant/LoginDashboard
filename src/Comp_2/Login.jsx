import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("yash55@gmail.com");
  const [password, setPassword] = useState(12345);
  const [wEmail, setWEmail] = useState();
  const [wPassword, setWPassword] = useState();

  const history = useNavigate();

  const loginBtn = () => {
    if (email == wEmail && password == wPassword) {
      history("/dashboard");
    }
  };
  return (
    <>
      <div
        className="container-fluid justify-content-center main_color align-items-center d-flex"
        style={{ height: "50rem" }}
      >
        <div className=" text-light w-50 p-4 ">
          <h1 className="text-center fw-bolder fs-2 login">LOGIN</h1>
          <form className="text-white">
            <div class="mb-3 text-light mt-5">
              <input
                type="text"
                class="form-control  form-control-lg  rounded-5 text-white"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="User ID"
                onChange={(e) => setWEmail(e.target.value)}
              />
            </div>
            <br></br>
            <div class="mb-3">
              <input
                type="password"
                class="form-control form-control-lg text-white rounded-5  "
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setWPassword(e.target.value)}
              />
            </div>

            <p className="text-end">Forgot password</p>

            <div>
              <button class="button-64 w-100 btn-sm mt-2 " role="button">
                <span class="text" onClick={loginBtn}>
                  Login In
                </span>
              </button>
            </div>

            <div className="position-absolute" style={{ right: "37rem" }}>
              <p style={{ fontSize: "1.2rem" }}>
                Don't have an account?<span>Sign Up</span>
              </p>
            </div>

            <div class="d-flex justify-content-center align-content-end pt-4  mt-5 social-btns">
              <a class="app-btn blu flex vert" href="http:apple.com">
                <i class="fab fa-apple"></i>
                <a href="/" tabIndex="0">
                  <img
                    class="bn46"
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="bn45"
                  />
                </a>
              </a>

              <a class="app-btn blu flex vert" href="http:google.com">
                <i class="fab fa-google-play"></i>
                <a class="btn btn-google" href="#" title="Google Play">
                  Google Play
                </a>
              </a>
            </div>
            <div className="text-center mt-5">
              <p>
                Image result for lorem 25 The lorem ipsum gets its name from the
                Latin phrase Neque porro quisquam est qui dolorem ipsum quia
                dolor sit amet.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginScreen;
