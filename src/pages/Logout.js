import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/user/actions";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/");
  }, []);

  return <></>;
};
