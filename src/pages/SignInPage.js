import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import InputPasswordToggle from "../components/input/InputPasswordToggle";
import AuthenticationPage from "./AuthenticationPage";
import api from "../api";
import { useDispatch } from "react-redux";
import { login } from "../store/user/actions";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // Default của input là 1 chuỗi trống
  // Enter
  const [password, setPassword] = useState(""); // hook
  // Support "enter"
  const passwordEl = useRef();
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const handleLogin = () => {
    api.login(username, password).then(({ success, user, error }) => {
      if (success) {
        dispatch(
          login({
            id: 1,
            name: "Admin",
            token: "admin@@@@",
          })
        );
        // Chuyển hướng tới trang chủ
        return navigate("/home");
      }
      if (error) {
        alert(error.message);
        // Hiện thông báo lỗi
      }
    });
    console.log(
      "🚀 ~ file: SignInPage.js ~ line 38 ~ handleLogin ~ handleLogin",
      handleLogin
    );
  };

  return (
    <AuthenticationPage>
      <form className="form" autoComplete="off">
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            // Suport enter
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
                passwordEl.current.querySelector("input").focus();
              }
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Enter
            ref={passwordEl}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
                handleLogin();
              }
            }}
          ></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You have not had an account?{" "}
          <NavLink to={"/sign-up"}>Register an account</NavLink>{" "}
        </div>
        <Button
          onClick={handleLogin}
          type="button"
          className="w-full max-w-[300px] mx-auto"
        >
          Login
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
