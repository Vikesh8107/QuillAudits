import React, { useState } from "react";
import type { NextPage } from "next";


const GroupComponent: NextPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  // Function to handle subscribe button click
  const handleSubscribe = () => {
    setShowConfirmation(true);
    setShowCheckmark(true);
    setTimeout(() => {
      setShowCheckmark(false);
    }, 2000); // Hide the checkmark after 2 seconds
  };

  return (
    <section className="self-stretch [background:linear-gradient(89.44deg,_#edf2fe,_rgba(217,_217,_217,_0))] flex flex-row items-end justify-center pt-12 pb-[47px] pr-[402.6px] pl-[403px] box-border gap-[103px] max-w-full text-left text-3xl text-royalblue-100 font-wf-body-body-medium mq850:gap-[26px] mq850:py-[31px] mq850:px-[100px] mq850:box-border mq1225:gap-[51px] mq1225:pl-[201px] mq1225:pr-[201px] mq1225:box-border mq1525:flex-wrap">
      <div className="h-[485px] w-[1927px] relative [background:linear-gradient(89.44deg,_#edf2fe,_rgba(217,_217,_217,_0))] hidden max-w-full" />
      <div className="w-[439px] flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border min-w-[439px] max-w-full mq1525:flex-1 mq1525:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <b className="w-[148px] h-[35px] relative tracking-[-0.01em] leading-[160%] inline-block z-[1] mq450:text-lg mq450:leading-[28px]">
            NEWSLETTER
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full text-29xl text-darkslateblue font-jost mq450:gap-[21px]">
            <h1 className="m-0 self-stretch h-32 relative text-inherit tracking-[-0.01em] font-semibold font-inherit inline-block shrink-0 z-[1] mq450:text-10xl mq850:text-19xl">
              Security First News Letter by QuillAudits
            </h1>
            <div className="w-[364px] h-[72px] relative text-base tracking-[-0.01em] leading-[150%] font-wf-body-body-medium text-wf-base-800 whitespace-pre-wrap inline-block max-w-full z-[1]">
              Subscribe for the most Exclusive Weekly security based newsletter
              and covering all the recent hacks up to date.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[8.5px] min-w-[376px] max-w-full text-2xl-3 text-mediumslateblue-200 font-open-sans mq1225:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[548.2px] flex flex-col items-start justify-start pt-[14.400000000000093px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start pt-[86.90000000000009px] pb-0 pr-[52px] pl-[88.90000000000009px] relative gap-[29.3px] mq450:pl-5 mq450:box-border mq850:flex-wrap mq850:pl-11 mq850:pr-[26px] mq850:box-border">
              <img
                className="h-[315px] w-full absolute my-0 mx-[!important] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden z-[1]"
                alt=""
                src="/group.svg"
              />
              <div className="h-[228.1px] flex-1 relative min-w-[138px]">
                <img
                  className="absolute top-[87.5px] left-[0px] w-[99.3px] h-[140.5px] z-[2]"
                  alt=""
                  src="/group-1.svg"
                />
                <img
                  className="absolute top-[-0.1px] left-[38.9px] w-[127.2px] h-[228.1px] z-[3]"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className="absolute top-[81.5px] left-[97.1px] w-[116px] h-[146.5px] z-[4]"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <div className="h-[210.8px] w-[164.9px] relative min-w-[164.9000000000001px] mq850:flex-1">
                <img
                  className="absolute h-[calc(100%_-_0.1px)] top-[0px] bottom-[0.1px] left-[57.6px] max-h-full w-[107.3px] z-[2]"
                  alt=""
                  src="/group-4.svg"
                />
                <img
                  className="absolute top-[176px] left-[47.7px] w-[17.7px] h-[34.8px] z-[3]"
                  alt=""
                  src="/group-5.svg"
                />
                <div className="absolute h-[calc(100%_-_0.1px)] top-[0px] bottom-[0.1px] left-[0px] w-[115.1px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[115.1px] h-[210.7px] z-[4]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="absolute top-[176px] left-[15.7px] w-[8.9px] h-[34.8px] z-[5]"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className="absolute top-[87.6px] left-[15.7px] w-[83.9px] h-[83.9px] object-contain z-[5]"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[270.4px] flex-1 flex flex-col items-start justify-end pt-[191.4000000000001px] pb-[32.30000000000018px] pr-[148.4999999999999px] pl-[347px] box-border relative gap-[6.1px] max-w-full ml-[-548.2px] mq450:pl-5 mq450:pr-5 mq450:box-border mq850:pl-[173px] mq850:pr-[74px] mq850:box-border">
            <div className="self-stretch h-[10.4px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-[83.9px] h-[10.4px] z-[5]"
                alt=""
                src="/vector-5.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[83.9px] h-[10.4px] z-[6]"
                alt=""
                src="/vector-6.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-0 px-[7px]">
              <div className="h-[15.3px] flex flex-row items-start justify-start relative">
                <img
                  className="h-[22.8px] w-[76.9px] absolute my-0 mx-[!important] right-[-13.4px] bottom-[-5.1px] z-[6]"
                  alt=""
                />
                <div className="h-[30.2px] w-14 relative font-extrabold inline-block z-[7] mq450:text-mid">
                  MAIL
                </div>
              </div>
            </div>
            <img
              className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[8]"
              alt=""
              src="/group-6.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full text-base text-gray-100 font-jost">
          <div className="flex-1 rounded-md bg-white shadow-[2px_2px_12px_rgba(0,_0,_0,_0.06)] flex flex-row items-end justify-between py-2 pr-2 pl-4 box-border max-w-full gap-[20px] z-[1] mq850:flex-wrap">
            {/* Email Input */}
            <input
              type="email"
              placeholder="vitalik@ethereum.org"
              className="h-[52px] w-[300px] sm:w-[400px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5">
              {/* Subscribe Button */}
              <button
                className="cursor-pointer [border:none] py-1.5 px-[22px] bg-[transparent] rounded [background:linear-gradient(264.69deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start z-[1]"
                onClick={() => setShowConfirmation(true)} // Add state to control when to show the confirmation
              >
                <div className="h-6 w-[71px] relative text-base leading-[24px] font-medium font-jost text-white text-left inline-block">
                  Subscribe
                </div>
              </button>

            </div>
          </div>
        </div>
        {showConfirmation && ( // Show the confirmation text when showConfirmation is true
          <div className="text-green-500 mt-2">
            We've sent you a confirmation email. Please click the link to complete your signup!
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupComponent;
