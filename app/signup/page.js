import { FcGoogle } from "react-icons/fc";
export default function Page() {
  return (
    <div className="flex lg:flex-row flex-col justify-evenly items-center">
      <div className="w-full lg:w-1/2 ">
        <img src="/assets/image.png"></img>
      </div>
      <div>
        <div className="bg-[#181818] rounded-2xl w-[212px] ml-6 flex flex-col items-center justify-center font-semibold text-sm">
          <div className="flex flex-row justify-center items-center rounded-lg border border-white p-2">
            <FcGoogle className="mr-2"></FcGoogle>Login with google
          </div>
          <div className="text-gray-500">OR</div>
          <input
            placeholder="Email"
            className="text-center mt-5 text-white bg-transparent border-b border-slate-500 w-[200px] p-2 active:outline-none focus:outline-none"
          ></input>
          <input
            placeholder="Password"
            className="text-center m-5   text-white bg-transparent border-b border-slate-500 w-[200px] p-2 active:outline-none focus:outline-none"
          ></input>

          <div className="relative p-[1px]  mt-5 w-20 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-red-500">
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
