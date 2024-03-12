import type { NextPage } from "next";

const FormInput: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[40.80000000000018px] box-border max-w-full text-left text-lg text-gray-300 font-poppins mq1225:pb-5 mq1225:box-border">
      <div className="w-[1140px] flex flex-col items-start justify-start gap-[40px] max-w-full shrink-0 mq850:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq850:gap-[20px] mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[40.25px] max-w-full mq850:gap-[20px] mq850:min-w-full">
            <div className="w-[617.8px] h-[135px] relative leading-[27px] inline-block max-w-full">
              Carpe Diem Pension, on Pulse blockchain, redefines retirement with
              a self-managed, inclusive, globally portable fund. Unique for its
              token burn mechanism, it ensures a sustainable 4.32% inflation
              payout. With $143.11k and 41.06% of CDP already burned, it serves
              35 users globally.
            </div>
            <h2 className="m-0 w-[551.4px] h-[85px] relative text-15xl leading-[42.5px] font-bold font-jost inline-block max-w-full mq450:text-xl mq450:leading-[25px] mq850:text-8xl mq850:leading-[34px]">
              CarpeDiem Pension's Flexible, Blockchain-Enabled Future
            </h2>
            <div className="w-[613.9px] h-[324px] relative leading-[27px] inline-block max-w-full">
              CarpeDiem Pension redefines retirement planning with a unique
              approach that deviates from traditional pension funds. With no
              minimum age for retirement, it offers flexibility and freedom,
              ensuring all genders receive equal treatment. CarpeDiem Pension
              ensures blockchain transparency, anonymity, and global
              accessibility, safeguarding pensions during international
              relocation. Easily transfer pensions to loved ones; share wallet
              access. Re-deposit payouts for increased future benefits.
              Importantly, CarpeDiem Pension prioritizes deposit security by
              avoiding utilizing client funds for internal investments. To
              become a part of this forward-thinking pension scheme, one simply
              needs to install and configure a blockchain wallet.
            </div>
            <img
              className="self-stretch h-[373px] relative rounded-md max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
            <div className="w-[651px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-15xl font-jost">
              <h2 className="m-0 h-32 flex-1 relative text-inherit leading-[42.5px] font-bold font-inherit inline-block max-w-full mq450:text-xl mq450:leading-[25px] mq850:text-8xl mq850:leading-[34px]">
                CarpeDiem Pension's Challenges: Enhancing Security Against
                Reentrancy, Front-Running, and Infinite Minting
              </h2>
            </div>
            <div className="w-[624.9px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
              <div className="h-[216px] flex-1 relative leading-[27px] inline-block max-w-full">
                CarpeDiem Pension confronts critical security challenges,
                including the risks of reentrancy and front-running
                exploits.Malicious actors may exploit contract vulnerabilities,
                withdrawing excess funds or manipulating transaction timing for
                unfair advantages. System faces infinite minting threats,
                risking economic stability with endless creation of CDP tokens
                or pension shares.  Addressing these challenges is paramount to
                safeguarding the integrity and security of CarpeDiem Pension.
              </div>
            </div>
            <img
              className="w-[640px] h-[370px] relative rounded-md object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/screenshot-20240216-at-743-1@2x.png"
            />
          </div>
          <div className="w-[342px] flex flex-col items-start justify-start pt-[58px] px-0 pb-0 box-border min-w-[342px] max-w-full text-sm text-gray-200 font-wf-body-body-medium mq450:min-w-full mq1225:flex-1">
            <div className="self-stretch rounded-md bg-gray-600 shadow-[0px_3px_12px_1px_rgba(85,_128,_219,_0.21)] overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[30px] pb-[30px] gap-[19.5px] border-[1px] border-solid border-color-palette-1-quill-scheme3">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[0.5px]">
                <div className="w-[91.4px] h-[21px] relative leading-[21px] inline-block">
                  Headquarters
                </div>
                <div className="self-stretch h-6 relative text-base leading-[24px] font-medium text-gray-300 inline-block">
                  Switzerland
                </div>
              </div>
              <div className="w-[185.9px] flex flex-col items-start justify-start">
                <div className="w-[73.7px] h-[21px] relative leading-[21px] flex items-center">
                  Chain
                </div>
                <div className="self-stretch h-6 relative text-base leading-[24px] font-medium text-gray-300 inline-block">
                  Pulse Blockchain
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="m-0 w-[620px] h-[85px] relative text-15xl leading-[42.5px] font-bold font-jost inline-block max-w-full mq450:text-xl mq450:leading-[25px] mq850:text-8xl mq850:leading-[34px]">
          CarpeDiem Pension's Journey Through our Audit Process
        </h2>
      </div>
    </section>
  );
};

export default FormInput;
