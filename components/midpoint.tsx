import type { NextPage } from "next";

const Midpoint: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[63.5px] box-border max-w-full text-left text-xl text-gray-300 font-wf-body-body-medium mq450:pb-[41px] mq450:box-border">
      <div className="w-[862.5px] flex flex-row flex-wrap items-start justify-center gap-[61px] max-w-full mq450:gap-[15px] mq1225:gap-[30px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[240px] max-w-full">
          <div className="self-stretch h-[67px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0)_58.5%,_#ffabc9_62%)] flex flex-row items-end justify-start py-px px-0.5 box-border whitespace-nowrap">
            <b className="h-6 w-[183px] relative leading-[30px] flex items-center z-[1]">
              Before QuillAudits
            </b>
          </div>
          <div className="w-[362px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-base font-poppins">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch h-24 relative leading-[24px] inline-block">
                Exploits like reentrancy and front-running can let attackers
                withdraw extra funds and manipulate transaction timing for
                unfair gains
              </div>
              <div className="self-stretch h-[72px] relative leading-[24px] inline-block">
                Vulnerabilities could allow users to mint CDP tokens or pension
                shares indefinitely, disrupting the system's economic balance.
              </div>
            </div>
          </div>
        </div>
        <div className="h-[290px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
          <div className="w-px flex-1 relative box-border border-l-[1px] border-solid border-gainsboro" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[240px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24.5px] max-w-full">
              <div className="self-stretch h-[67px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0)_58.5%,_#abcdff_62%)] flex flex-row items-end justify-start py-px px-0.5 box-border whitespace-nowrap">
                <b className="h-6 w-[183px] relative leading-[30px] flex items-center shrink-0 z-[1]">
                  After QuillAudits
                </b>
              </div>
              <div className="w-[349.3px] h-12 relative text-base leading-[24px] font-poppins inline-block max-w-full">
                Implementation of reentrancy protection mechanisms.
              </div>
            </div>
            <div className="self-stretch h-24 relative text-base leading-[24px] font-poppins inline-block">
              Ensure precision in decimal handling with standard libraries,
              recalculate accurately, fix logic errors, and secure referral
              systems against exploitation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midpoint;
