import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotLogin = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/auth/sign-in"), []);

  return <></>;
};
