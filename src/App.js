import React from "react";
import "./App.css";
import TableComponent from "./components/table";

import { data } from "./utils/data";
import TokenInput from "./components/tokenInput";
import BetfairLoginComponent from "./components/betfairLoginComponent";

function App() {
  return (
    <div className="w-full h-auto py-[100px] px-[50px]">
      <div className="w-full p-[30px] flex flex-col border-black border-[2px] border-solid gap-[30px]">
        <TokenInput />
        <BetfairLoginComponent />
        <TableComponent data={data} />
      </div>
    </div>
  );
}

export default App;
