import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";

const TableComponent = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[1000px] w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-gray-300 font-bold p-2 w-[1/3]">EVENT</th>
            <th className="bg-green-400 font-bold p-2  w-[1/3]">
              Predictability
            </th>
            <th className="bg-blue-200 font-bold p-2">Back</th>
            <th className="bg-blue-200 font-bold p-2"></th>
            <th className="bg-blue-300 font-bold p-2">Adjust Back</th>
            <th className="bg-orange-300 font-bold p-2">Lay</th>
            <th className="bg-orange-300 font-bold p-2">Adjust Lay</th>
            <th className="bg-yellow-300 font-bold p-2">Probability</th>
            <th className="bg-teal-200 font-bold p-2">Real Back</th>
            <th className="bg-teal-200 font-bold p-2">Real Lay</th>
            <th className="bg-green-200 font-bold p-2">Back Value</th>
            <th className="bg-red-400 font-bold p-2">Lay Value</th>
            <th className="bg-green-300 font-bold p-2">K-Factor Back</th>
            <th className="bg-pink-200 font-bold p-2">K-Factor Lay</th>
            <th className="bg-blue-200 font-bold p-2">Back Amount</th>
            <th className="bg-blue-200 font-bold p-2">Lay Amount</th>
            <th className="bg-blue-200 font-bold p-2">Placed Bet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="17" className="p-0">
              <Collapse
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined
                    style={{ color: "#fff" }}
                    rotate={isActive ? 90 : 0}
                  />
                )}
                defaultActiveKey={[0, 1]}
              >
                {data.map((item, index) => (
                  <Collapse.Panel
                    header={
                      <span className="text-[#fff]">{item.headerName}</span>
                    }
                    key={index}
                    className="!bg-[#c00000]"
                  >
                    <Collapse accordion defaultActiveKey={0}>
                      {item.bettings.map((betting, index) => (
                        <Collapse.Panel
                          header={
                            <span className="text-[#000]">
                              {betting.bettingCategory}
                            </span>
                          }
                          key={index}
                        >
                          <table className="w-full border-collapse">
                            <tbody>
                              {betting.odd.map((row, index) => (
                                <tr key={index} className="text-center w-full">
                                  <td className="p-2 border bg-gray-300">
                                    {row.event}
                                  </td>
                                  <td className="p-2 border bg-green-400 font-bold">
                                    {row.predictability}
                                  </td>
                                  <td className="p-2 border bg-blue-200">
                                    {row.back}
                                  </td>
                                  <td className="p-2 border bg-blue-200">
                                    {row.backOther}
                                  </td>
                                  <td className="p-2 border bg-blue-300">
                                    {row.adjustBack}
                                  </td>
                                  <td className="p-2 border bg-orange-300">
                                    {row.lay}
                                  </td>
                                  <td className="p-2 border bg-orange-300">
                                    {row.adjustLay}
                                  </td>
                                  <td className="p-2 border bg-yellow-300">
                                    {row.probability}
                                  </td>
                                  <td className="p-2 border bg-teal-200">
                                    {row.realBack}
                                  </td>
                                  <td className="p-2 border bg-teal-200">
                                    {row.realLay}
                                  </td>
                                  <td
                                    className={`p-2 border bg-green-200 ${
                                      row.backValue.includes("-")
                                        ? "text-red-600"
                                        : "text-green-600"
                                    }`}
                                  >
                                    {row.backValue}
                                  </td>
                                  <td
                                    className={`p-2 border bg-red-400 ${
                                      row.layValue.includes("-")
                                        ? "text-red-600"
                                        : "text-green-600"
                                    }`}
                                  >
                                    {row.layValue}
                                  </td>
                                  <td
                                    className={`p-2 border bg-green-300 ${
                                      row.kFactorBack.includes("-")
                                        ? "text-red-600"
                                        : "text-green-600"
                                    }`}
                                  >
                                    {row.kFactorBack}
                                  </td>
                                  <td
                                    className={`p-2 border bg-pink-200 ${
                                      row.kFactorLay.includes("-")
                                        ? "text-red-600"
                                        : "text-green-600"
                                    }`}
                                  >
                                    {row.kFactorLay}
                                  </td>
                                  <td className="p-2 border bg-blue-200">
                                    {row.backAmount}
                                  </td>
                                  <td className="p-2 border bg-blue-200">
                                    {row.layAmount}
                                  </td>
                                  <td className="p-2 border bg-blue-200">
                                    {row.placedBet}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Collapse.Panel>
                      ))}
                    </Collapse>
                  </Collapse.Panel>
                ))}
              </Collapse>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
