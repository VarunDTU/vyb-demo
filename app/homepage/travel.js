import Image from "next/image";
export default function Travel() {
  return (
    <div className="mt-[36px]">
      <div className="text-h2 font-semibold justify-evenly w-full p-[24px] rounded-3xl bg-black ">
        <div className="flex flex-row justify-between">
          <div className="cursor-pointer active:underline hover:underline-offset-[15px] decoration-primary">
            Travel
          </div>
          <div className="cursor-pointer active:underline underline-offset-8 decoration-primary">
            Digital
          </div>
          <div className="cursor-pointer active:underline underline-offset-8 decoration-primary">
            Brand
          </div>
          <div className="cursor-pointer active:underline underline-offset-8 decoration-primary">
            Merch
          </div>
        </div>
      </div>
      <div className="mt-2.5 relative z-0 rounded-t-3xl h-full w-full">
        <Image
          src="/assets/mountain_down.png"
          className="rounded-t-3xl relative"
          width={1440}
          height={800}
          alt="travel"
        />
        <div className="absolute inset-y-0 justify-center w-full z-10 p-[100px] font-bold">
          <div className="flex flex-col h-full items-center justify-evenly text-4xl text-center">
            <div className="text-h0 uppercase font-bold p-[32px]">Travel</div>
            <div className="mt-20 px-40">
              Turn your travel experience into itinerary, travel package with
              VYB Store and share it with your true followers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
