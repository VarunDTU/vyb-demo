"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" rounded-lg font-bold  h-full text-h3 text-white flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <Image src="/assets/vyb.png" width={105} height={63} alt="logo"></Image>
        <input
          className="w-[290px] h-[50px] text-[#404040] ml-[30px] rounded-full p-2.5 text-b2 outline-none hover:outline-none"
          placeholder="Search Creator/Product"
        ></input>
      </div>

      <div className="cursor-pointer">Fav Creators</div>
      <div className="cursor-pointer">Merchandise</div>
      <div className="cursor-pointer">Brand</div>
      <div className="cursor-pointer">Digital</div>
      <div className="w-[100px] h-[41px] bg-white rounded-2xl"></div>
    </div>
  );
}
