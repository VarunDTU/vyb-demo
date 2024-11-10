import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const influencers = [
  {
    name: "Samira",
    image: "/assets/influencers/samira.png",
  },
  {
    name: "Mindi",
    image: "/assets/influencers/Mindi.png",
  },
  {
    name: "Samira",
    image: "/assets/influencers/Samira2.png",
  },
  {
    name: "Mindi",
    image: "/assets/influencers/Mindi.png",
  },
  {
    name: "Samira",
    image: "/assets/influencers/Samira2.png",
  },
];
export default function Influencers() {
  return (
    <div className="flex flex-col">
      <div className="pt-9 w-full flex lg:flex-row flex-col items-center">
        <div className="w-1/2 mr-4 text-primary text-xl lg:text-4xl h-full font-bold text-center mb-5">
          From Creation to Monetization: Vyb Store Has It All
        </div>
        <div className=" flex flex-col font-semibold ">
          <div className="flex flex-row">
            <div className="bg-black rounded-3xl p-6 flex justify-center items-center text-center flex-col ">
              <div className="text-xl lg:text-4xl">Trusted By Influencers</div>
              <div className="lg:text-lg text-sm">
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
              <div className="text-xl lg:text-4xl">Secured Data</div>
              <div className="lg:text-lg text-sm p-2">
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
              <div className="text-xl lg:text-4xl">
                Authentic Payment Partner
              </div>
              <div className="lg:text-lg text-sm p-2">
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
              <div className="text-xl lg:text-4xl">Monetize Your Influence</div>
              <div className="lg:text-lg text-sm p-2">
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
      </div>
      <div className="flex flex-col justify-center lg:m-8 m-0">
        <div className="text-primary text-3xl font-bold text-center">
          Our Influencers
        </div>
        <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden m-5">
          <div className="flex flex-row w-max justify-end">
            {influencers.map((influencer, index) => (
              // <div key={index} className="flex justify-end w-[278px] h-[278px]">
              //   <div className="absolute rounded-full m-2 pb-2 w-[278px] h-[278px] bg-gradient-to-r from-red-500 to-cyan-500">
              //     <Image
              //       width={268}
              //       height={268}
              //       className="rounded-full my-4 filter grayscale hover:filter-none"
              //       src={influencer.image}
              //       alt={influencer.name}
              //     ></Image>
              //     <div className="z-10">sss</div>
              //   </div>
              // </div>
              <article
                key={index}
                className=" transition-all group w-[116px] h-[116px] lg:w-[298px] lg:h-[310px] relative isolate flex flex-col overflow-hidden rounded-2xl pb-8 max-w-sm mx-auto text-center font-semibold "
              >
                {/* <img
                  src={influencer?.image}
                  alt="University of Southern California"
                  className="relative inset-0 w-[278px] h-[278px] object-cover p-2 rounded-full "
                /> */}
                <div className="justify-start flex ">
                  <div className="absolute rounded-full m-1 pb-1 w-[95px] h-[95px] lg:w-[288px] lg:h-[288px]  group-hover:bg-gradient-to-r from-red-500 to-cyan-500 filter-none">
                    <img
                      className="rounded-full my-4   lg:w-[268px] lg:h-[268px] group-hover:filter-none grayscale filter"
                      src={influencer.image}
                      alt={influencer.name}
                    ></img>
                    <div className="z-10">sss</div>
                  </div>
                </div>
                <div className="hidden group-hover:flex  absolute inset-0 justify-center items-center cursor-pointer">
                  <h3 className="p-2 text-sm lg:text-xl font-bold text-black bg-white rounded-lg">
                    {influencer.name}
                    <FaExternalLinkAlt className="inline-block ml-2" />
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
