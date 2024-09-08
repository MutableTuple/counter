import React from "react";
import ProductCard from "./ProductCard";
export default function Countdowns() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3  grid-cols-1 gap-6  duration-300 transition-all  justify-items-center ">
      <ProductCard
        product_image={
          "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230901023724_Tesla.png&w=700&c=1"
        }
      />
      <ProductCard
        product_image={"https://static.dhiwise.com/home/OG-image.jpeg"}
      />
      <ProductCard
        product_image={
          "https://ph-files.imgix.net/d3dab0c6-5926-4341-a340-3e70ab6c0730.png?auto=format"
        }
      />
      <ProductCard
        product_image={
          "https://media.npr.org/assets/img/2023/02/15/eon-pokemon-and-rayquaza_wide-cea1a349c9173133e447083850ed1daffdec5991.jpg?s=1400&c=100&f=jpeg"
        }
      />
      <ProductCard
        product_image={
          "https://static.toiimg.com/thumb/msid-112927149,width-400,resizemode-4/112927149.jpg"
        }
      />{" "}
      <ProductCard
        product_image={
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg"
        }
      />{" "}
      <ProductCard
        product_image={
          "https://raw.githubusercontent.com/MutableTuple/fm_images/main/Screenshot%202024-09-04%20123904.png"
        }
      />{" "}
      <ProductCard
        product_image={
          "https://static.toiimg.com/thumb/msid-112927149,width-400,resizemode-4/112927149.jpg"
        }
      />
    </div>
  );
}
