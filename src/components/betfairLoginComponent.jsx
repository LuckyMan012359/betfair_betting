import { Button, TextField } from "@mui/material";
import React from "react";

const BetfairLoginComponent = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-[15px]">
      <div className="font-bold">Betfair Login</div>
      <div className="w-[50%] gap-[15px] flex justify-start items-center">
        <p className="w-[150px]">Username</p>
        <TextField
          id="outlined-basic"
          size="small"
          label="Username"
          variant="outlined"
          className="w-[320px]"
        />
        <Button variant="outlined" className="w-[100px]">
          Login
        </Button>
      </div>
      <div className="w-[50%] gap-[15px] flex justify-start items-center">
        <p className="w-[150px]">Password</p>
        <TextField
          id="outlined-password-input"
          size="small"
          label="Password"
          variant="outlined"
          type="password"
          className="w-[320px]"
        />
        <Button variant="outlined" className="w-[100px]">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default BetfairLoginComponent;
