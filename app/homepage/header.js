import Image from "next/image";
export default function Header() {
  return (
    <div className="w-full pt-[36px] flex flex-row font-bold text-black ">
      <div className="w-1/2">
        <div className="w-full text-[64px]">
          <div className="flex flex-row">
            <div className="px-2.5 bg-white rounded-lg mr-2.5">One</div>
            <div className="px-2.5 bg-white rounded-lg mr-2.5">Stop</div>
          </div>
          <div className="flex flex-row mt-2.5">
            <div className="px-2.5 bg-white rounded-lg  flex">Marketplace</div>
          </div>
          <div className="flex flex-row mt-2.5">
            <div className="px-2.5 bg-white rounded-lg mr-2.5 flex">For</div>
            <div className="px-2.5 bg-primary rounded-lg mr-2.5 flex">
              Influencers
            </div>
          </div>
        </div>
        <div className="text-h1 text-white mt-10 leading-tight">
          "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create
          Merch, and Share Content – All in One Hub."
        </div>
        <div className="flex flex-row mt-4">
          <button className="bg-primary text-black rounded-2xl px-5 py-2.5 mt-5 w-36 h-14">
            Demo Store
          </button>
          <div className="ml-10">
            <div className="relative p-[1px]  mt-5 w-36 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-red-500">
              <div className="flex flex-row justify-center rounded-2xl items-center h-full bg-black ">
                <span className="font-semibold text-lg leading-5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                  Join Waitlist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/assets/header.png"
          width={582}
          height={650.5}
          alt="logo"
        ></Image>
      </div>
    </div>
  );
}
