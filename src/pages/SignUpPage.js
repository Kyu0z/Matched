import React, { useEffect } from "react";

import AuthenticationPage from "./AuthenticationPage";

import { NavLink, useNavigate } from "react-router-dom";

import Field from "../components/field/Field";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import InputPasswordToggle from "../components/input/InputPasswordToggle";

const SignUpPage = () => {
  const navigate = useNavigate();

  // Title
  useEffect(() => {
    document.title = "Register Page";
  }, []);

  return (
    <AuthenticationPage>
      <form
        className="form"
        // onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            // control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            // control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You already have an account? <NavLink to={"/"}>Login</NavLink>{" "}
        </div>
        <Button type="submit" className="w-full max-w-[300px] mx-auto">
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
