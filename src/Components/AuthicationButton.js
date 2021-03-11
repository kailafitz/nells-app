import React from "react";

// Package imports
import { useAuth0 } from "@auth0/auth0-react";

// Component imports
import Login from "./Login";
import Logout from "./Logout";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Logout /> : <Login />;
};

export default AuthenticationButton;