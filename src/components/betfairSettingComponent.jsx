import { TextField } from "@mui/material";
import React from "react";

const BetfairSettingComponent = () => {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-[60%] gap-[15px] flex justify-start items-center">
        <p className="w-[180px] font-bold">Load events for next</p>
        <div className="gap-[30px] flex items-center">
          <TextField
            id="outlined-number"
            size="small"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            className="w-[110px]"
          />
          <p className="w-[180px] font-bold">minutes</p>
        </div>
      </div>
      <div className="w-[60%] gap-[15px] flex justify-start items-center">
        <p className="w-[180px] font-bold">Refresh interval</p>
        <div className="gap-[30px] flex items-center">
          <TextField
            id="outlined-number"
            size="small"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            className="w-[110px]"
          />
          <p className="w-[180px] font-bold">minutes</p>
        </div>
      </div>
    </div>
  );
};

export default BetfairSettingComponent;
