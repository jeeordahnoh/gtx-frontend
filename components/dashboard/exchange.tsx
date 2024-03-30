"use client";
import React, { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import styles from "./styles";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomChart from "./customChart";
import localFont from "next/font/local";

const sofia = localFont({ src: "../../public/fonts/Sofia Pro Regular.ttf" });
const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

const Exchange = () => {
  const [usd, setUsd] = useState(0);
  const [btc, setBtc] = useState(0);
  const [rate, setRate] = useState(0);

  const onExchange = () => {
    let _usd = usd;
    let _btc = _usd / rate;
    setBtc(_btc);
  };

  return (
    <div
      className="flex flex-col text-white px-7 py-5 font-medium bg-[#1E1F25] rounded-xl"
      // style={{ height: "100%" }}
    >
      <div
        className="flex flex-row space-x-10 items-center"
        style={{ justifyContent: "space-between" }}
      >
        <div className={`text-white text-xl font-bold ${sofia.className}`}>
          Exchange
        </div>
        <button>
          <img
            className="cursor-pointer"
            src="/images/refresh-icon.png"
            alt="refresh-icon"
          />
        </button>
      </div>
      <div className="flex flex-row items-center text-xs justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-white text-xl font-semibold">1</div>
          <div className="text-gtxTextLight text-base">BTC</div>
        </div>
        <img src="/images/arrow-right.png" alt="arrow-right" />
        <div className="flex flex-row gap-4 items-center py-1">
          {/* <div className="text-white text-xl font-semibold"> */}
          <input
            className="bg-[#1E1F25] text-xl font-semibold w-40"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
          {/* </div> */}
          <div className="text-gtxTextLight text-base">USD</div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${graphik.className} py-1`}>
        <div className="flex justify-start text-gtxText text-base">Get</div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border border-gtxBackLight bg-search px-4 py-2">
          <div className="flex justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-gtxBackLight">
            <input
              className="bg-[#1E1F25]"
              value={usd}
              onChange={(e) => setUsd(parseFloat(e.target.value))}
            ></input>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 pl-4 w-full">
            {/* <img src="/images/money-icon.png" alt="money-icon" />
            <img
              className="cursor-pointer"
              src="/images/arrow-down-medium.png"
              alt="arrow-down-medium"
            /> */}
            <select
              name="getCurrency"
              id="getCurrency"
              className="bg-[#1E1F25] border--none rounded-2xl px-4 py-0.5"
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="LTC">LTC</option>
              <option value="BCH">BCH</option>
              <option value="XRP">XRP</option>
              <option value="DOGE">DOGE</option>
              <option value="DASH">DASH</option>
              <option value="ZEC">ZEC</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${graphik.className} py-1`}>
        <div className="flex justify-start text-gtxText text-base">Pay</div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border border-gtxBackLight bg-search px-4 py-2">
          <div className="flex justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-gtxBackLight">
            <input
              className="bg-[#1E1F25]"
              value={btc}
              onChange={(e) => setBtc(parseFloat(e.target.value))}
            ></input>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 pl-4">
            {/* <img
              src="/images/bitcoin-icon-medium.png"
              alt="money-icon-medium"
            />
            <img
              className="cursor-pointer"
              src="/images/arrow-down-medium.png"
              alt="arrow-down-medium"
            /> */}
            <select
              name="getCurrency"
              id="getCurrency"
              className="bg-[#1E1F25] border--none rounded-2xl px-4 py-0.5"
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="LTC">LTC</option>
              <option value="BCH">BCH</option>
              <option value="XRP">XRP</option>
              <option value="DOGE">DOGE</option>
              <option value="DASH">DASH</option>
              <option value="ZEC">ZEC</option>
            </select>
          </div>
        </div>
      </div>

      <select
        name="getCurrency"
        id="getCurrency"
        className="bg-[#34384C] border--none rounded-2xl px-4 py-0.5 my-1 w-full"
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
        <option value="BCH">BCH</option>
        <option value="XRP">XRP</option>
        <option value="DOGE">DOGE</option>
        <option value="DASH">DASH</option>
        <option value="ZEC">ZEC</option>
      </select>

      <div
        className={`flex justify-center items-center rounded-full cursor-pointer w-full text-white font-semibold bg-black px-8 py-4 my-1 ${sofia.className}`}
      >
        <button onClick={onExchange}>Exchange</button>
      </div>
    </div>
  );
};

export default Exchange;