import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full p-8 flex justify-between border-t">
      <div className="flex gap-4">
        <Link
          target="_blank"
          href={"https://www.linkedin.com/company/strontiumapp/"}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.producthunt.com/posts/strontium?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-strontium"
          }
        >
          <GrProductHunt />
        </Link>
      </div>
    </div>
  );
}
