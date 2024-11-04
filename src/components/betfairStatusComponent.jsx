import { TextField } from "@mui/material";
import React from "react";

const BetfairStatusComponent = () => {
  return (
    <div className="w-full flex flex-row gap-[20px]">
      <div className="w-[20%] flex flex-col justify-start items-center border-black border-solid border-2">
        <p className="w-[180px] font-bold">Refresh interval</p>
      </div>
      <div className="w-[20%] gap-[15px] flex justify-start items-center">
        <p className="w-[180px] font-bold">Refresh interval</p>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          className="w-[110px]"
        />
        <p className="w-[180px] font-bold">minutes</p>
      </div>
    </div>
  );
};

export default BetfairStatusComponent;
