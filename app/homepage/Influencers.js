import Image from "next/image";

export default function Influencers() {
  return (
    <div className="pt-9 w-full flex flex-row items-center">
      <div className="w-1/2 mr-4 text-primary text-4xl h-full font-bold text-center">
        From Creation to Monetization: Vyb Store Has It All
      </div>
      <div className=" flex flex-col font-semibold ">
        <div className="flex flex-row">
          <div className="bg-black rounded-3xl p-6 flex justify-center items-center text-center flex-col ">
            <div className="text-4xl">Trusted By Influencers</div>
            <div className="text-lg">
              A trusted platform for influencers to grow and earn.
            </div>
            <Image
              src={"/assets/illustrations/d.png"}
              width={190}
              height={160}
              alt="illustrations"
            ></Image>
          </div>
          <div className="bg-black rounded-3xl ml-4  flex justify-center items-center text-center flex-col">
            <div className="text-4xl">Secured Data</div>
            <div className="text-lg p-2">
              Advanced security measures to protect your valuable data
            </div>
            <Image
              src={"/assets/illustrations/c.png"}
              width={190}
              height={160}
              alt="illustrations"
            ></Image>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-black rounded-3xl m-4 p-6 flex justify-center items-center text-center flex-col ">
            <div className="text-4xl">Authentic Payment Partner</div>
            <div className="text-lg p-2">
              Reliable, fast, and secure payments you can trust
            </div>
            <Image
              src={"/assets/illustrations/a.png"}
              width={190}
              height={160}
              alt="illustrations"
            ></Image>
          </div>
          <div className="bg-black rounded-3xl mt-4 p-2 flex justify-center items-center text-center flex-col">
            <div className="text-4xl">Monetize Your Influence</div>
            <div className="text-lg p-2">
              Seamlessly turn your influence into consistent revenue
            </div>
            <Image
              src={"/assets/illustrations/b.png"}
              width={190}
              height={160}
              alt="illustrations"
            ></Image>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
