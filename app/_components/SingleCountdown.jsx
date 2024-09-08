"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDays, getHours, getMinutes, getSeconds } from "../_utils/countdown";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import ProductFeatureCard from "./ProductFeatureCard";

export default function SingleCountdown() {
  const targetDate = new Date("2024-09-08T23:59:59");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      setDays(getDays(targetDate));
      setHours(getHours(targetDate));
      setMinutes(getMinutes(targetDate));
      setSeconds(getSeconds(targetDate));
    };

    updateCountdown(); // Initial update
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup
  }, [targetDate]);

  const numberAnimationProps = {
    initial: { y: 100, opacity: 0 }, // Start off-screen below and transparent
    animate: { y: 0, opacity: 1 }, // Move to the center and become visible
    exit: { y: -100, opacity: 0 }, // Move off-screen above and fade out
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut", // Smooth easing for glide and fade effect
    },
  };

  return (
    <div>
      <div className="h-96 w-full flex items-center justify-center gap-6">
        <div className="flex items-center flex-col text-9xl">
          <AnimatePresence mode="popLayout">
            <motion.div key={days} {...numberAnimationProps}>
              {days}
            </motion.div>
          </AnimatePresence>
          <p className="text-xs">days</p>
        </div>
        <div className="text-9xl">:</div>
        <div className="flex items-center flex-col text-9xl">
          <AnimatePresence mode="popLayout">
            <motion.div key={hours} {...numberAnimationProps}>
              {hours}
            </motion.div>
          </AnimatePresence>
          <p className="text-xs">hours</p>
        </div>
        <div className="text-9xl">:</div>
        <div className="flex items-center flex-col text-9xl">
          <AnimatePresence mode="popLayout">
            <motion.div key={minutes} {...numberAnimationProps}>
              {minutes}
            </motion.div>
          </AnimatePresence>
          <p className="text-xs">minutes</p>
        </div>
        <div className="text-9xl">:</div>
        <div className="flex items-center flex-col text-9xl">
          <AnimatePresence mode="popLayout">
            <motion.div key={seconds} {...numberAnimationProps}>
              {seconds}
            </motion.div>
          </AnimatePresence>
          <p className="text-xs">seconds</p>
        </div>
      </div>
      <div className="text-center"> Time until launch</div>
      <div className="flex items-center justify-center gap-4 my-4">
        <FaInstagram />
        <FaFacebookF />
        <FaLinkedinIn />
        <RiTwitterXLine />
      </div>{" "}
      <div className="flex items-center   justify-center">
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/33ClKDEJ7LzYL0Cu5D6Nnu?utm_source=generator"
          width="25%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <h1 className="my-12">Snapshots</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-y-10 sm:grid-cols-2  ">
        <ProductFeatureCard />
        <ProductFeatureCard src="https://car-images.bauersecure.com/wp-images/12942/063-tesla-model-3-2024-review.jpg" />
        <ProductFeatureCard src="https://i.ytimg.com/vi/p_is7qzLuFM/maxresdefault.jpg" />
        <ProductFeatureCard src="https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_1600.jpg" />
        <ProductFeatureCard src="https://upload.wikimedia.org/wikipedia/commons/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg" />{" "}
        <ProductFeatureCard src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/aventador_coupe/s/aventador_coupe_s_02_m.jpg" />{" "}
        <ProductFeatureCard src="https://www.exoticcarhacks.com/wp-content/uploads/2024/02/uFcbfiuL-scaled.jpeg" />{" "}
        <ProductFeatureCard src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/2021/restyle_03_05/aven_s_s_01_m.jpg" />
      </div>
    </div>
  );
}
