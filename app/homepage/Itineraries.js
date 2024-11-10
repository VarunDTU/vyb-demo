const images = [
  {
    src: "assets/iti/Frame 1182.png",
    title: "Delhi",
    des: "Delhi",
  },
  {
    src: "assets/iti/Frame 1183.png",
    des: "Munnar",
    title: "Kerala",
  },
  {
    src: "assets/iti/Frame 1575.png",
    des: "Darjeeling",
    title: "West Bengal",
  },
  {
    src: "assets/iti/Frame 1182.png",
    title: "Delhi",
    des: "Delhi",
  },
  {
    src: "assets/iti/Frame 1183.png",
    des: "Munnar",
    title: "Kerala",
  },
  {
    src: "assets/iti/Frame 1575.png",
    des: "Darjeeling",
    title: "West Bengal",
  },
  {
    src: "assets/iti/Frame 1183.png",
    des: "Munnar",
    title: "Kerala",
  },
  {
    src: "assets/iti/Frame 1575.png",
    des: "Darjeeling",
    title: "West Bengal",
  },
];

export default function Itinerary() {
  return (
    <div className="bg-black  ">
      <div className="flex justify-center text-4xl font-semibold mb-6">
        Explore Our Curated Travel Itineraries
      </div>
      <div className="flex flex-row overflow-x-scroll [&::-webkit-scrollbar]:hidden transition-all mt-12">
        <div className="flex flex-row min-w-max">
          {" "}
          {images.map((image, index) => {
            return (
              <article
                key={index}
                className="w-[270px] h-[480px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto  text-center font-semibold   "
              >
                <img
                  src={"/" + image?.src}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover p-2"
                  width={270}
                  height={480}
                />

                <h3 className="z-10 mt-3 text-xl font-bold text-white">
                  {image.des} Itinerary
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-lgleading-6 text-white">
                  {image.title}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className=" bg-[url('/assets/mountain_up.png') bg-transparent h-[547px]">
        {/* <img
          src="/assets/mountain_up.png"
          alt="mountain"
          className="h-[547px] w-full object-cover"
        /> */}
      </div>
    </div>
  );
}
