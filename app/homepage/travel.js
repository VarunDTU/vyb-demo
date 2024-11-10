export default function Travel() {
  return (
    <div className="mt-[36px]">
      <div className=" text-xl lg:text-h2 font-semibold justify-evenly w-full p-[24px] rounded-3xl bg-black ">
        <div className="flex flex-row justify-between">
          <div className="cursor-pointer hover:underline hover:underline-offset-[15px] decoration-primary">
            Travel
          </div>
          <div className="cursor-pointer hover:underline hover:underline-offset-[15px] underline-offset-8 decoration-primary">
            Digital
          </div>
          <div className="cursor-pointer hover:underline hover:underline-offset-[15px] underline-offset-8 decoration-primary">
            Brand
          </div>
          <div className="cursor-pointer hover:underline hover:underline-offset-[15px] underline-offset-8 decoration-primary">
            Merch
          </div>
        </div>
      </div>
      <div className="mt-2.5 z-0 rounded-t-3xl bg-[url('/assets/mountain_down.png')] w-full bg-cover bg-center bg-no-repeat h-[540px] lg:h-[800px] flex justify-end ">
        <div className="  inset-y-0 justify-center w-full z-10 lg:p-[100px] p-5 font-bold">
          <div className="flex flex-col h-full items-center justify-evenly text-4xl text-center">
            <div className="text-4xl lg:text-h0 uppercase font-bold p-[32px]">
              Travel
            </div>
            <div className="lg:mt-20 mt-0 px-0  lg:px-40 md:text-4xl text-[34px]">
              Turn your travel experience into itinerary, travel package with
              VYB Store and share it with your true followers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
