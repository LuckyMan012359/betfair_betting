import React, { useState } from "react";

const BettingSettings = () => {
  const [formData, setFormData] = useState({
    betfairMoney: "126.32",
    commission: "6.50",
    discount: "0.00",
    betUnitSize: "50.00",
    betUnit: "63.16",
    hidePredictability: false,
    hideBackLayOdds: false,
    hideProbability: false,
    hideBackLayValues: false,
    hideKFactors: false,
    hideBackLayAmounts: false,
    onlyBackBetsForCS: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex flex-row w-[50%]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center">
          <label className="w-1/2 font-bold">Betfair Money</label>
          <input
            type="text"
            name="betfairMoney"
            value={formData.betfairMoney}
            onChange={handleInputChange}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/2">Commission %</label>
          <input
            type="text"
            name="commission"
            value={formData.commission}
            onChange={handleInputChange}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/2">Discount %</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/2">Bet Unit Size %</label>
          <input
            type="text"
            name="betUnitSize"
            value={formData.betUnitSize}
            onChange={handleInputChange}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/2">Bet Unit</label>
          <input
            type="text"
            name="betUnit"
            value={formData.betUnit}
            onChange={handleInputChange}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[15px] ml-[30px]">
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Hide Predictability</span>
          <input
            type="checkbox"
            name="hidePredictability"
            checked={formData.hidePredictability}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Hide Back/Lay Odds</span>
          <input
            type="checkbox"
            name="hideBackLayOdds"
            checked={formData.hideBackLayOdds}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Hide Probability</span>
          <input
            type="checkbox"
            name="hideProbability"
            checked={formData.hideProbability}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Hide Back/Lay Values</span>
          <input
            type="checkbox"
            name="hideBackLayValues"
            checked={formData.hideBackLayValues}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Hide K-Factors</span>
          <input
            type="checkbox"
            name="hideKFactors"
            checked={formData.hideKFactors}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Hide Back/Lay Amounts</span>
          <input
            type="checkbox"
            name="hideBackLayAmounts"
            checked={formData.hideBackLayAmounts}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="w-[170px]">Only Back Bets for CS</span>
          <input
            type="checkbox"
            name="onlyBackBetsForCS"
            checked={formData.onlyBackBetsForCS}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default BettingSettings;
