import type { NextPage } from "next";

const ArcNode: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[59px] pr-5 pl-[114px] box-border max-w-full text-left text-base text-white font-poppins mq850:pl-7 mq850:pb-[38px] mq850:box-border mq1225:pl-[57px] mq1225:box-border">
      <div className="w-[1234px] flex flex-row items-end justify-center gap-[30px] max-w-full mq1225:flex-wrap">
        <div className="h-[520px] w-[555px] relative rounded-5xs overflow-hidden shrink-0 bg-[url('/divcshero--img@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[555px] max-w-full z-[1] mq850:min-w-full mq1225:flex-1">
          <img
            className="absolute top-[-13px] left-[-308px] w-[1040px] h-[580px] object-cover hidden"
            alt=""
            src="/image-7@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(201.23deg,_rgba(0,_0,_0,_0)_30%,_#000)] w-520px h-520px z-[2] rounded-lg" />
          <div className="absolute top-[-13px] left-[-13px] w-[612px] h-[612px]">
            <img
              className="absolute top-[0px] left-[5px] w-[471px] h-[491px] object-cover z-[1] rounded-[8px]"
              alt=""
              src="/pifgumz-400x400-1@2x.png"
            />


            <img
              className="absolute top-[170px] left-[70px] w-[400px] h-[100px] object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/cdpension@2x.png"
            />
          </div>
          <div className="absolute top-[300px] left-[51px] leading-[24px] inline-block w-[330px] z-[3]">
            Carpe Diem Pension, a blockchain-based retirement fund, offers
            permanent payouts through CDP deposits, with a 4.32% annual
            inflation claimable by depositors.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[300px] min-h-[320px] max-w-full text-29xl font-jost mq850:min-w-full mq1225:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32.5px] max-w-full mq850:gap-[16px]">
            <h1 className="m-0 self-stretch h-[174px] relative text-inherit tracking-[0.01em] leading-[120%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[1] mq450:text-10xl mq450:leading-[35px] mq850:text-19xl mq850:leading-[46px]">
              Securing Trust : Boosting Security and Strengthening Trust at
              Carpe Diem Pension
            </h1>
            <div className="w-[541.8px] h-[90px] relative text-xl leading-[30px] font-poppins text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#00000a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
              QuillAudits enhances Carpe Diem Pension by addressing 33
              vulnerabilities on the Pulse blockchain, boosting security and
              user trust in digital pensions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcNode;
