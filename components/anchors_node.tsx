import type { NextPage } from "next";

const AnchorsNode: NextPage = () => {
  return (
    <section className="w-full h-[802px] absolute my-0 mx-[!important] top-[0px] right-[0px] left-[0px]">
      <img
        className="absolute top-[-25px] left-[-187px] w-[2148px] h-[827px] object-contain"
        alt=""
        src="/mask-group@2x.png"
      />
      <img
        className="absolute top-[52.3px] left-[205.4px] w-[16.1px] h-[9.4px] z-[1] ml-[200px]"
        loading="lazy"
        alt=""
        src="/arrow.svg"
      />
      <img
        className="absolute top-[52.3px] left-[807.6px] w-[16.1px] h-[9.4px] z-[1]"
        alt=""
        src="/arrow-1.svg"
      />
      <img
        className="absolute top-[52.3px] left-[963.6px] w-[16.1px] h-[9.4px] z-[1]"
        alt=""
        src="/arrow-2.svg"
      />
      <img
        className="absolute top-[40.1px] left-[88px] w-[158px] h-[21.4px] z-[1]"
        loading="lazy"
        alt=""
        src="/quillaudits.svg"
      />
      <img
        className="absolute top-[29.4px] left-[25px] w-[45.5px] h-[42.8px] z-[1]"
        loading="lazy"
        alt=""
        src="/icon.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[225px] left-[570px] rounded-md shadow-[0px_10px_20px_rgba(90,_122,_190,_0.2),_0px_1px_1px_rgba(90,_122,_190,_0.1)] w-[180px] h-20 z-[4]">
        <img
          className="absolute top-[calc(50%_-_15.4px)] left-[calc(50%_-_74px)] w-[148px] h-[30.8px] overflow-hidden object-cover hidden"
          alt=""
          src="/agorapulselogopng@2x.png"
        />
        <img
          className="absolute top-[16px] left-[15px] w-[152px] h-[49px] object-cover z-[5]"
          alt=""
          src="/cdpensionblack@2x.png"
        />
      </button>
    </section>
  );
};

export default AnchorsNode;
