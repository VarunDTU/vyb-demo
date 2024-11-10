import Image from "next/image";

export function StartedGuide() {
  return (
    // <div className="font-sans  [&::-webkit-scrollbar]:hidden px-16  ">
    //   <div className="container h-max  w-full overflow-x-hidden  [&::-webkit-scrollbar]:hidden items-center justify-center flex">
    //     <ul
    //       id="cards"
    //       className=" h-[480px] w-full mb-8 gap-8 p-0 items-center justify-center flex flex-col  overflow-y-scroll  scroll-snap-y-mandatory  [&::-webkit-scrollbar]:hidden "
    //     >
    //       <li
    //         className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] card sticky top-0 z-0 pt-24 scroll-snap-start"
    //         id="card1"
    //       >
    //         <div className="card-body h-[87vh] rounded-lg bg-[#A94949] p-6 text-white shadow-lg">
    //           <h2 className="text-3xl font-bold">Card 1</h2>
    //         </div>
    //       </li>

    //       <li
    //         className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] card  sticky top-0 z-10 pt-24 scroll-snap-start"
    //         id="card2"
    //       >
    //         <div className="card-body h-[87vh] rounded-lg bg-[#A94949] p-6 text-white shadow-lg">
    //           <h2 className="text-3xl font-bold">Card 2</h2>
    //         </div>
    //       </li>
    //       <li
    //         className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] card sticky top-0 z-20 pt-24 scroll-snap-start"
    //         id="card3"
    //       >
    //         <div className="card-body h-[87vh] rounded-lg bg-[#5ED46A] p-6 text-white shadow-lg">
    //           <h2 className="text-3xl font-bold">Card 3</h2>
    //         </div>
    //       </li>
    //       <li
    //         className=" lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] card sticky top-0 z-30 pt-24 scroll-snap-start"
    //         id="card4"
    //       >
    //         <div className="card-body h-[87vh] rounded-lg bg-[#487FD7] p-6 text-white shadow-lg">
    //           <h2 className="text-3xl font-bold">Card 4</h2>
    //         </div>
    //       </li>
    //       <li
    //         className=" lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] card sticky top-0 z-40 pt-24 scroll-snap-start"
    //         id="card5"
    //       >
    //         <div className="card-body h-[87vh] rounded-lg bg-[#5CAAB6] p-6 text-white shadow-lg">
    //           <h2 className="text-3xl font-bold">Card 4</h2>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="flex items-center justify-center">
      <div className="my-auto h-[480px] overflow-y-auto [&::-webkit-scrollbar]:hidden rounded-2xl ">
        <div className="flex flex-col space-y-4">
          <div className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] bg-[#A94949] m-2 rounded-2xl p-8 flex justify-center">
            <div className="w-1/2 flex flex-col items-center justify-center ">
              <div className="font-bold text-h3 leading-tight">
                Sign Up and create your own store hassle-free.
              </div>
              <div>
                Join us via google signin and verify your influencer status by
                entering you social media Id and unlock your store @ zero cost.
              </div>
            </div>
            {/* <div className="bg-[#181818] rounded-2xl w-[212px] ml-6 flex flex-col items-center justify-center font-semibold text-sm">
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
            </div> */}
            <img
              className="ml-6"
              src="/assets/starter/1.png"
              width={212}
              height={305}
            ></img>
          </div>
          <div className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] bg-[#5ED46A] m-2 rounded-2xl p-8 flex justify-center rotate-2">
            <div className="w-1/2 flex flex-col items-center justify-center ">
              <div className="font-bold text-h3 leading-tight">
                "Monetize your influencer status: Earn money adding real value
                to your true followers"!
              </div>
              <div>
                Let VYB the money now !! Its here and widthdraw it periodically.
              </div>
            </div>
            {/* <div className="bg-[#181818] rounded-2xl w-[212px] ml-6 flex flex-col items-center justify-center font-semibold text-sm">
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
            </div> */}
            <div className="flex items-center ">
              <img
                src="/assets/starter/2.png"
                className="ml-2"
                width={212}
              ></img>
            </div>
          </div>
          <div className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] bg-[#487FD7] m-2 rounded-2xl p-8 flex justify-center -rotate-2">
            <div className="w-1/2 flex flex-col items-center justify-center ">
              <div className="font-bold text-h3 leading-tight">
                Call audience to your store. Easily integrate links into
                content.
              </div>
              <div>
                After setting up your products, its time to go public. Put your
                store link in insta bio and lets make first post together !
              </div>
            </div>

            <div className="flex items-center ">
              <img
                src="/assets/starter/3.png"
                className="ml-2"
                width={212}
              ></img>
            </div>
          </div>
          <div className="lg:h-[377px] lg:w-[840px] h-[325px] w-[378px] bg-[#5CAAB6] m-2 rounded-2xl p-8 flex justify-center rotate-1">
            <div className="w-1/2 flex flex-col items-center justify-center ">
              <div className="font-bold text-h3 leading-tight">
                Build & customize your store front.
              </div>
              <div>
                Simply fill in the details to build your digital store. Once
                done, start selling your products to your audience.
              </div>
            </div>

            <div className="flex items-center justify-center  ">
              <Image
                alt="image"
                src="/assets/starter/4.png"
                className="ml-2 h-[305px]"
                width={212}
                height={308}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
