import { TextField } from "@mui/material";
import React from "react";

const MatchOddsComponent = () => {
  return (
    <div className="w-full flex flex-row items-center gap-[30px]">
      <div className="flex justify-start items-center gap-[15px]">
        <p className="w-[180px] font-bold">Match Odds Vol</p>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          className="w-[110px]"
        />
      </div>
      <div className="w-[20%] gap-[15px] flex justify-start items-center">
        <p className="w-[180px] font-bold">Minimum Value(%)</p>
        <TextField
          id="outlined-number"
          size="small"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
            input: {
              max: 100,
            },
          }}
          className="w-[110px]"
        />
      </div>
    </div>
  );
};

export default MatchOddsComponent;
