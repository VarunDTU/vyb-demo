"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { z } from "zod";

const User = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});
export default function Page() {
  const [credientials, setCredientials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setError("");
    if (loading) return;
    setLoading(true);
    const result = User.safeParse(credientials);
    if (!result.success) {
      const error = JSON.parse(JSON.stringify(result.error.errors));
      console.log(error[0]);

      setError(error[0].message);

      setLoading(false);
      return;
    } else {
      setLoading(false);
      setCredientials({ email: "", password: "" });
    }
  };
  return (
    <div className="flex lg:flex-row flex-col ld:justify-evenly items-center justify-center">
      <div className="w-full lg:w-1/2 ">
        <img src="/assets/image.png"></img>
      </div>
      <div>
        <div
          className={`${
            error === "" ? "hidden" : "block"
          } w-full bg-white text-black font-bold rounded-lg p-2 m-2 text-centers transition-all`}
        >
          {error}
        </div>
        <div className="bg-[#181818] rounded-2xl w-[212px] ml-6 flex flex-col items-center justify-center font-semibold text-sm">
          <div className="flex flex-row justify-center items-center rounded-lg border border-white p-2">
            <FcGoogle className="mr-2"></FcGoogle>Login with google
          </div>
          <div className="text-gray-500">OR</div>
          <input
            //placeholder="Email"
            className="text-center mt-5 text-white bg-transparent border-b border-slate-500 w-[200px] p-2 active:outline-none focus:outline-none"
            value={credientials.email}
            onChange={(e) =>
              setCredientials({ ...credientials, email: e.target.value })
            }
          ></input>
          <input
            placeholder="Password"
            className="text-center m-5   text-white bg-transparent border-b border-slate-500 w-[200px] p-2 active:outline-none focus:outline-none"
            value={credientials.password}
            onChange={(e) =>
              setCredientials({ ...credientials, password: e.target.value })
            }
          ></input>

          <div
            className="relative p-[1px]  mt-5 w-20 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-red-500 cursor-pointer "
            onClick={handleSubmit}
          >
            <div className="flex flex-row justify-center rounded-xl items-center h-full bg-black ">
              <span className="font-semibold text-lg leading-5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                Login
              </span>
            </div>
          </div>

          <div className="text-xs flex flex-row font-normal text-gray-500 mt-2">
            <div>Don’t have an account?</div>
            <div className="text-primary ml-1 underline underline-offset-2">
              {" "}
              Get Started
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
