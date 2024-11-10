"use client";

import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import Dropdown from "../homepage/dropdown";

export default function Navbar() {
  return (
    <div className=" rounded-lg font-bold  h-full text-h3 text-white flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <Image src="/assets/vyb.png" width={105} height={63} alt="logo"></Image>
        <div className="rounded-full w-[290px] h-[50px] bg-white ml-8">
          <div className="flex px-4 py-3 rounded-lg overflow-hidden max-w-lg mx-auto font-semibold items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="20px"
              className="fill-black mr-3 "
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              placeholder="Search Creator/Product"
              className="w-full outline-none bg-transparent text-black text-base font-bold "
            />
          </div>
        </div>
      </div>

      <div className="cursor-pointer hidden lg:block">Fav Creators</div>
      <div className="cursor-pointer hidden lg:block">Merchandise</div>
      <div className="cursor-pointer hidden lg:block">Brand</div>
      <div className="cursor-pointer hidden lg:block">Digital</div>
      <div className="hidden lg:block">
        <Dropdown className=""></Dropdown>
      </div>
      <div className="lg:hidden block mx-2">
        <FiAlignJustify></FiAlignJustify>
      </div>
    </div>
  );
}
