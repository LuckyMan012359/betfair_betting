import { Button } from "@mui/material";
import React from "react";

const BetfairStatusComponent = () => {
  return (
    <div className="w-full flex gap-[30px]">
      <div className="w-[330px] border-black border-solid border-[1px] flex flex-col p-[5px]">
        <p>Api Connect... OK</p>
        <p>Betfair Login... OK</p>
        <p>Placing bets...4 Bets Matched, 1 UnMatched</p>
        <p className="text-[#d32f2f]">
          Connection Lost. Connect to retrieve data
        </p>
      </div>
      <div className="flex flex-col grow w-auto justify-between">
        <div className="flex gap-[30px]">
          <Button variant="outlined" className="w-[140px]">
            connect
          </Button>
          <Button variant="outlined" className="w-[140px]">
            API REFRESH
          </Button>
        </div>
        <div className="flex gap-[30px]">
          <Button variant="outlined" className="w-[140px]">
            Start Bets
          </Button>
          <Button variant="outlined" className="w-[140px]">
            Stop Bets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BetfairStatusComponent;
