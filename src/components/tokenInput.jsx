import { TextField } from "@mui/material";
import React from "react";

const TokenInput = () => {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-[50%] gap-[15px] flex justify-start items-center">
        <p className="w-[150px] font-bold">Smonks API Token</p>
        <TextField
          id="outlined-basic"
          size="small"
          label="Smonks API Token"
          variant="outlined"
          className="w-[440px]"
        />
      </div>
      <div className="w-[50%] gap-[15px] flex justify-start items-center">
        <p className="w-[150px] font-bold">Betfair API Token</p>
        <TextField
          id="outlined-basic"
          size="small"
          label="Betfair API Token"
          variant="outlined"
          className="w-[440px]"
        />
      </div>
    </div>
  );
};

export default TokenInput;
