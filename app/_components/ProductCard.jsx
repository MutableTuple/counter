"use client";

import React, { useState, useEffect } from "react";
import { getDays, getHours, getMinutes, getSeconds } from "../_utils/countdown";
import { CiShoppingTag } from "react-icons/ci";

export default function ProductCard({ product_image }) {
  const targetDate = new Date("2024-12-31T23:59:59");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to update the countdown
    const updateCountdown = () => {
      setDays(getDays(targetDate));
      setHours(getHours(targetDate));
      setMinutes(getMinutes(targetDate));
      setSeconds(getSeconds(targetDate));
    };

    updateCountdown(); // Update once on mount

    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="w-80 h-96 border text-2xl grid grid-cols-1 grid-rows-6 hover:scale-105 transition-all duration-300 cursor-pointer relative">
      <div className="row-start-1 row-end-4 border-b overflow-hidden">
        <img
          className="object-cover min-w-full min-h-full"
          src={product_image}
          alt=""
        />
        <div className="absolute bottom-52 left-2 bg-stone-800/20 text-xs px-2 py-1 backdrop-blur-md text-stone-50 rounded-md flex gap-1 items-center max-w-64  ">
          <CiShoppingTag /> Tesla Model X Lorem ipsum dolor sit amet, offic
        </div>
      </div>
      <div className="row-start-4 row-end-6 flex flex-col items-center justify-center gap-2">
        <div className="font-bold flex justify-center items-center gap-3">
          <div className="flex items-center flex-col text-4xl">
            {days}
            <p className="text-xs">days</p>
          </div>
          <div>:</div>
          <div className="flex items-center flex-col text-4xl">
            {hours}
            <p className="text-xs">hours</p>
          </div>
          <div>:</div>
          <div className="flex items-center flex-col text-4xl">
            {minutes}
            <p className="text-xs">minutes</p>
          </div>
          <div>:</div>
          <div className="flex items-center flex-col text-4xl">
            {seconds}
            <p className="text-xs">seconds</p>
          </div>
        </div>
        <p className="text-xs font-thin">time until launch</p>
      </div>
      <div className="row-start-6 row-end-7 text-white flex items-center justify-center text-lg">
        <button className="h-full w-full bg-green-600 hover:bg-green-700 transition-all duration-300">
          View Live
        </button>
      </div>
    </div>
  );
}
