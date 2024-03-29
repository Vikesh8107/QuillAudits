import React from "react";
import type { NextPage } from "next";
import Popup from "./popup";

const Navbar: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[24.5px] pr-5 pl-[308px] box-border max-w-full text-left text-xl-4 text-white font-jost mq450:pl-5 mq450:box-border mq850:pl-[77px] mq850:box-border mq1225:pl-[154px] mq1225:box-border">
      <div className="w-[1210.2px] flex flex-row flex-wrap items-end justify-between max-w-full gap-[20px]">
        <div className="w-[877.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[9.800000000000182px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[30px] mq1225:flex-wrap mt-[16px]">
            <div className="h-[33px] w-[76px] relative leading-[32.13px] inline-block z-[1] mq450:text-mid mq450:leading-[25px]">
              Services
            </div>
            <div className="w-[315.1px] flex flex-row items-start justify-start gap-[53.55px] mq450:gap-[27px]">
              <div className="h-[33px] w-16 relative leading-[32.13px] inline-block z-[1] mq450:text-mid mq450:leading-[26px]">
                Pricing
              </div>
              <div className="h-[33px] w-[99px] relative leading-[32.13px] inline-block z-[1] mq450:text-mid mq450:leading-[26px]">
                Our Audits
              </div>
              <div className="h-[33px] w-[45px] relative leading-[32.13px] inline-block z-[1] mq450:text-mid mq450:leading-[26px]">
                Tools
              </div>
            </div>
            <div className="h-[33px] w-[92px] relative leading-[32.13px] inline-block z-[1] mq450:text-mid mq450:leading-[26px]">
              Resources
            </div>
            <div className="h-[33px] w-40 relative leading-[32.13px] inline-block z-[1] mq450:text-mid mq450:leading-[26px]">
              Refer-Earn-Secure
            </div>
          </div>
        </div>
        <div className="w-[160px] rounded-[8.03px] [background:linear-gradient(266.04deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_13.4px_20.08px_-4.02px_rgba(0,_0,_0,_0.1),_0px_5.4px_8.03px_-5.36px_rgba(0,_0,_0,_0.1)] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[8px] pb-[1px] pr-[20px] pl-[20px] box-border whitespace-nowrap z-[1] text-left">
          <div className="h-[33px] flex-1 relative leading-[32.13px] font-medium inline-block" />
          Request An Audit
        </div>
      </div>
    </div>

  );
};

export default Navbar;
