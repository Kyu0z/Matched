import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/home"), []);

  return <></>;
};
