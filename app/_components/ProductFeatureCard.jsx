import React from "react";

export default function ProductFeatureCard({
  src = "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230901023724_Tesla.png&w=700&c=1",
}) {
  return (
    <div className="w-80 h-96 ">
      <img
        src={src}
        alt="image"
        className="object-cover min-w-full min-h-full"
      />
    </div>
  );
}
