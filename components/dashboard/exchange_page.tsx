"use client";
import React, { useState, useContext, useEffect } from "react";
import { AdvancedChart } from "react-tradingview-embed";
import Exchange from "./exchange";
import { AuthContext } from "@/context/AddContext";

const ExchangePage = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

  const data = [
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
  ];

  return (
    <div className="flex flex-row w-full h-[913px] px-11 pb-5 bg-black">
      <div className="flex flex-col w-3/4 h-full mr-6">
        <div className="flex flex-row w-full h-[15%] mb-4">
          <div className="flex flex-row items-center w-1/4 h-full mr-4 p-3 rounded-xl bg-[#1E1F25]">
            <div className="flex flex-row justify-between items-center w-full h-full p-6">
              <div>
                <img src="/images/bitcoin-icon-large.png" />
              </div>
              <div className="flex flex-col w-full h-full ml-4">
                <div className="flex flex-row justify-between items-center w-full h-1/2">
                  <div className="flex items-center text-base text-[#5D6588]">
                    Bitcoin
                  </div>
                  <img src="/images/arrow-down.png" />
                </div>
                <div className="flex text-[#FFFFFF] text-[20px]">BTC/USD</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-1/4 h-full mr-4 p-4 rounded-xl bg-[#1E1F25]">
            <div className="flex flex-row items-center p-3 w-full h-full">
              <div className="flex flex-col items-center w-3/5 h-full">
                <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">
                  24h Change
                </div>
                <div className="flex flex-row items-center w-full h-1/2">
                  <div className="mr-2">
                    <img src="/images/Arrow - Up 3.png" />
                  </div>
                  <div className="text-[#11CABE] text-[20px]">0.53%</div>
                </div>
              </div>
              <div className="flex items-center w-2/5 h-full">
                <div>
                  <img src="/images/exchange-graph.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-1/4 h-full mr-4 p-4 rounded-xl bg-[#1E1F25]">
            <div className="flex flex-col items-center p-3 w-full h-full">
              <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">
                Last Price
              </div>
              <div className="flex w-full h-1/2 items-center text-[20px] text-white">
                18372.595198 USD
              </div>
            </div>
          </div>
          <div className="flex items-center w-1/4 h-full p-4 rounded-xl bg-[#1E1F25]">
            <div className="flex flex-col items-center p-3 w-full h-full">
              <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">
                24h Low
              </div>
              <div className="flex w-full h-1/2 items-center text-[20px] text-white">
                18372.595198 USD
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[55%] mb-4 p-4 rounded-xl bg-[#1E1F25]">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between w-full h-[10%]">
              <div className="flex flex-row justify-between items-center w-2/3 h-full">
                <div className="flex items-center w-1/5">BTC/USD</div>
                <div className="flex flex-row justify-between w-full h-full">
                  <div className="flex flex-row items-center mr-4">
                    <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                    <div className="text-[14px] text-[#11CABE]">18432.320</div>
                  </div>
                  <div className="flex flex-row items-center mr-4">
                    <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                    <div className="text-[14px] text-[#11CABE]">18432.320</div>
                  </div>
                  <div className="flex flex-row items-center mr-4">
                    <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                    <div className="text-[14px] text-[#11CABE]">18432.320</div>
                  </div>
                  <div className="flex flex-row items-center mr-4">
                    <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                    <div className="text-[14px] text-[#11CABE]">18432.320</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center w-1/3 h-full">
                <button className="flex flex-row items-center h-full p-4 border-2 rounded-full">
                  <div className="text-white">Price</div>
                  <img className="ml-2" src="/images/arrow-down-white.png" />
                </button>
                <button className="flex flex-row items-center h-full p-4 border-2 rounded-full">
                  <div className="text-white">1 min</div>
                  <img className="ml-2" src="/images/arrow-down-white.png" />
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full h-[90%] pt-5">
              <div className="h-full">
                <AdvancedChart
                  widgetProps={{ width: "440%", height: "100%", theme: "dark" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[30%] bg-[#1E1F25] rounded-xl">
          <div className="flex w-full h-full p-4">
            <table className="w-full flex flex-col h-full text-white">
              <thead className="flex flex-col w-full h-full">
                <tr className="flex flex-row w-full justify-between h-[48px] pt-3">
                  <p className="">Market Trades</p>
                  <p className="flex flex-row h-full">
                    <button className="flex items-center h-full text-white rounded-full mr-4 px-4 py-2 focus:bg-black focus:text-white">
                      <p>Open Orders</p>
                    </button>
                    <button className="flex items-center text-white rounded-full mr-4 px-4 py-2 focus:bg-black focus:text-white">
                      <p>Order History</p>
                    </button>
                    <button className="flex items-center text-white rounded-full px-4 py-2 focus:bg-black focus:text-white">
                      <p>Order Book</p>
                    </button>
                  </p>
                </tr>
                <tr className="flex flex-row w-full justify-between h-[48px] border-b-2 pt-3">
                  <td className="w-1/4">Time</td>
                  <td className="w-1/4">Price(ETH)</td>
                  <td className="w-1/4">Amount(BTC)</td>
                  <td className="w-1/4">Total(ETH)</td>
                </tr>
              </thead>
              <tbody className="flex flex-col w-full h-full overflow-auto">
                {data.map((item) => (
                  <tr
                    key={item.change}
                    className="flex flex-row w-full justify-between items-center h-15 py-2"
                  >
                    <td className="flex flex-row py-2 w-1/4">
                      <p className="w-full">{item.time}</p>
                    </td>
                    <td className="w-1/4">
                      <p className="w-full">
                        <div
                          className={`${
                            item.change > 0
                              ? "text-[#30E0A1]"
                              : "text-[#FA2256]"
                          } w-full`}
                        >
                          {Math.abs(item.price)}
                        </div>
                      </p>
                    </td>
                    <td className="w-1/4">
                      <p className="w-full">{item.amount}</p>
                    </td>
                    <td className="w-1/4">
                      <p className="w-full">{item.total}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full">
        <div className="flex w-full h-[55.55%] mb-4 rounded-xl bg-[#1E1F25]">
          <div className="flex flex-col jusitfy-between px-6 py-4 w-full h-full">
            <div className="flex flex-row justify-between items-center w-full h-[15%] mb-4">
              <div className="text-white">Bitcoin</div>
              <img src="/images/bitcoin-icon-big.png" />
            </div>
            <div className="flex flex-col h-[20%] mb-4">
              <div className="text-[#5D6588] text-base h-full">
                Current Balance
              </div>
              <div className="flex flex-row justify-between items-center text-white h-full border-b-2 border-[#34384C]">
                <div>4,000</div>
                <div>BTC</div>
              </div>
            </div>
            <div className="flex flex-col h-[20%] mb-8">
              <div className="flex flex-row justify-between h-full py-4">
                <div className="text-[#5D6588]">Volume (24h)</div>
                <div className="text-[#11CABE]">2.36%</div>
              </div>
              <div className="flex flex-row justify-between text-white h-full border-b-2  border-[#34384C]">
                <div>4,000</div>
                <div>USD</div>
              </div>
            </div>
            <div className="flex flex-col h-[25%] mb-8">
              <div className="text-[#5D6588] h-full py-4">Payment Method</div>
              <button className="flex flex-row justify-between items-center px-6 py-3 mb-4 rounded-full bg-[#34384C] text-white h-full">
                <div className="flex flex-row h-full items-center">
                  <img className="mr-2" src="/images/money-icon.png" />
                  <div>Paywallet</div>
                </div>
                <img src="/images/arrow-down-medium.png" />
              </button>
            </div>
            <div className="flex flex-row justify-between h-full">
              <button className="text-[#11CABE] px-16 py-3 rounded-full border-2 border-[#11CABE]">
                Buy
              </button>
              <button className="text-[#FA2256] px-16 py-3 rounded-full border-2 border-[#FA2256]">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[44.44%] rounded-xl bg-[#1E1F25]">
          <Exchange />
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
