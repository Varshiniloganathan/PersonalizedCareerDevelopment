import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => loginWithRedirect()}
      style={{
        textTransform: "none",
        padding: "10px 20px", // Adjust padding for size
        fontSize: "15px", // Adjust font size
        borderRadius : 10
      }}
    >
      Continue with Google
    </Button>
  );
}

export default LoginButton;
