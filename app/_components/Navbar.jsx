import React from "react";

export default function Navbar() {
  return (
    <div className="w-full z-50 border-b fixed top-0 left-0 right-0 bg-white/70 z-50 backdrop-blur-sm px-6">
      <ul className="flex gap-6 justify-between items-center font-semibold text-stone-700 py-2 ">
        <img
          src="https://raw.githubusercontent.com/MutableTuple/fm_images/main/DeltaTime.png"
          alt=""
          className="h-12 w-12"
        />
      </ul>
    </div>
  );
}
