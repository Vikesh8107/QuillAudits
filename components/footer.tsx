import React from "react";
import type { NextPage } from "next";


const Footer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[0px] box-border max-w-full text-right text-base-2 text-ea-white font-jost">
      <div className="flex-1 flex flex-col items-start justify-start pt-[34px] pb-[57.1px] pr-[195px] pl-[20px] box-border gap-[50.6px] bg-[url('/bg@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] mq850:gap-[25px] mq850:pt-5 mq850:pb-6 mq850:pr-12 mq850:pl-[41px] mq850:box-border mq1225:pt-[22px] mq1225:pb-[37px] mq1225:pr-[97px] mq1225:pl-[83px] mq1225:box-border">
        <img
          className="w-[1920px] h-[948px] relative object-cover hidden max-w-full"
          alt=""
          src="/bg@2x.png"
        />
        <img
          className="w-[23.1px] h-[23.1px] relative hidden"
          alt=""
          src="/vector.svg"
        />
        <div className="w-[296.8px] flex flex-row items-start justify-start py-0 pr-0.5 pl-[0px] box-border">
          <div className="flex-1 flex flex-col items-end justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[18.1px]">
              <img
                className="h-[57.8px] w-[61.6px] relative z-[1]"
                alt=""
                src="/icon-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[14.4px] px-0 pb-0 box-border min-w-[139px]">
                <img
                  className="self-stretch h-[28.9px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/quillaudits-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5 mt-[-2.4px]">
              <div className="h-[23px] w-[189px] relative inline-block z-[1]">
                Making Web3 a safer place
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[66.7px] max-w-full text-left text-lg-5 text-whitesmoke-200 mq450:gap-[17px] mq850:gap-[33px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[1.7px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[156.9px] max-w-full mq450:gap-[20px] mq850:gap-[39px] mq1225:gap-[78px]">
              <div className="flex flex-col items-start justify-start gap-[31.9px] mq1225:hidden ml-[30px]">
                <div className="w-[160.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[7.7px] box-border gap-[13.8px] text-base-2">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[4.7px] gap-[4.6px] text-xl-8 text-white">
                    <div className="w-40 h-[30px] relative font-medium inline-block z-[1] mq450:text-mid">
                      More About Quill
                    </div>
                    <div className="self-stretch h-[2.3px] relative rounded-[18.48px] bg-dodgerblue z-[1]" />
                  </div>
                  <div className="w-[66px] h-[23px] relative font-medium inline-block z-[1]">
                    About Us
                  </div>
                  <div className="w-[39px] h-[23px] relative font-medium inline-block z-[1]">
                    FAQs
                  </div>
                  <div className="w-[155px] h-[23px] relative font-medium inline-block z-[1]">
                    Blockchains We Audit
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8.8px]">
                  <div className="w-[93px] h-[27px] relative font-medium inline-block z-[1]">
                    Contact Us:
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[13.4px]">
                    <div className="flex flex-row items-start justify-start gap-[9.5px]">
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <img
                          className="w-[23.1px] h-[16.2px] relative z-[1]"
                          alt=""
                          src="/email.svg"
                        />
                      </div>
                      <a href="mailto:audits@quillhash.com" className="h-[27px] w-[186px] relative text-white italic tracking-[0.05em] inline-block whitespace-nowrap z-[1]">
                        audits@quillhash.com
                      </a>

                    </div>
                    <div className="flex flex-row items-start justify-start gap-[10.5px]">
                      <div className="flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0 box-border w-[23.1px] h-[23.1px]">
                        <img
                          className="w-[23.1px] h-[18.5px] relative z-[1]"
                          alt=""
                          src="/telegram.svg"
                        />
                      </div>
                      <a href="https://t.me/quillaudits" className="h-[27px] w-[134px] relative text-white italic underline tracking-[0.05em] inline-block z-[1]">
                        t.me/quillaudits
                      </a>

                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8.8px]">
                  <div className="flex flex-row items-start justify-start gap-[9.2px]">
                    <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
                      <img
                        className="w-[16.2px] h-[20.8px] relative z-[1]"
                        alt=""
                        src="/location.svg"
                      />
                    </div>
                    <div className="h-[27px] w-28 relative font-medium inline-block z-[1]">
                      Our Location:
                    </div>
                  </div>
                  <div className="w-[238px] h-[162px] relative inline-block z-[1]">
                    <p className="m-0">Office 104/105 Level 1,</p>
                    <p className="m-0">Emaar Square, Building 4</p>
                    <p className="m-0">Sheikh Mohammed Bin Rashid</p>
                    <p className="m-0">Boulevard Downtown Dubai,</p>
                    <p className="m-0">United Arab Emirates</p>
                    <p className="m-0">P.O box: 416654</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[90.2px] max-w-[calc(100%_-_395px)] text-base-2 mq850:gap-[23px] mq1225:gap-[45px] mq1225:max-w-full">
                <div className="flex flex-col items-start justify-start gap-[4.6px] mq850:hidden ml-[1px]">
                  <div className="w-[133px] h-[30px] relative text-xl-8 font-medium text-white inline-block z-[1] mq450:text-mid">
                    Audit Services
                  </div>
                  <div className="w-[132.8px] flex flex-row items-start justify-start pt-0 px-0 pb-[14px] box-border">
                    <div className="h-[2.3px] flex-1 relative rounded-[18.48px] bg-dodgerblue z-[1]" />
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[111px] relative font-medium inline-block z-[1]">
                      Ethereum Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[100px] relative font-medium inline-block z-[1]">
                      Polygon Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px]">
                    <div className="h-[23px] w-[73.9px] relative font-medium inline-block z-[1]">
                      BSC Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[91px] relative font-medium inline-block z-[1]">
                      Solana Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px]">
                    <div className="h-[23px] w-[86px] relative font-medium inline-block z-[1]">
                      NEAR Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[110px] relative font-medium inline-block z-[1]">
                      Algorand Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[82px] relative font-medium inline-block z-[1]">
                      Tezos Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px]">
                    <div className="h-[23px] w-[182px] relative font-medium inline-block z-[1]">
                      Hyperledger Fabric Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[59px] relative font-medium inline-block z-[1]">
                      L1 Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px]">
                    <div className="h-[23px] w-[105px] relative font-medium inline-block z-[1]">
                      Polkadot Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[87px] relative font-medium inline-block z-[1]">
                      Wallet Audit
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                    <div className="h-[23px] w-[94px] relative font-medium inline-block z-[1]">
                      ZkSync Audit
                    </div>
                  </div>
                  <div className="w-[101px] h-[23px] relative font-medium inline-block z-[1]">
                    Starknet Audit
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[18.5px] max-w-[calc(100%_-_272px)] text-xl-8 text-white mq850:max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[86.8px] max-w-[calc(100%_-_226px)] mq450:gap-[22px] mq850:gap-[43px] mq850:max-w-full">
                    <div className="w-[629.1px] flex flex-row items-start justify-start py-0 pr-[67px] pl-[67px] box-border max-w-full mq850:pl-[33px] mq850:pr-[33px] mq850:box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[18.5px] max-w-full ml-[-40px]">
                        <div className="w-[437.8px] flex flex-col items-start justify-start gap-[4.6px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[70px] mq450:flex-wrap">
                            <div className="h-[30px] w-[145px] relative font-medium inline-block z-[1] whitespace-nowrap mq450:text-mid">
                              Quill Ecosystem
                            <div className="h-[2.3px] w-[136.3px] relative rounded-[18.48px] mt-[10px] bg-dodgerblue z-[1]" />
                            </div>

                            <div className="h-[30px] w-[136px] relative font-medium inline-block z-[1] whitespace-nowrap mq450:text-mid">
                              Other Services
                              <div className="h-[2.3px] w-[145.5px] mt-[10px] relative rounded-[18.48px] bg-dodgerblue z-[1]" />
                           
                          </div>
                      
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base-2 text-whitesmoke-200 mq850:flex-wrap">
                          <div className="flex flex-col items-start mt-[19px] justify-start gap-[13.87px]">
                            <div className="w-[51px] h-[23px] relative font-medium inline-block z-[1]">
                              QuillAI
                            </div>
                            <div className="w-[79px] h-[23px] relative font-medium inline-block z-[1]">
                              QuillCheck
                            </div>
                            <div className="w-20 h-[23px] relative font-medium inline-block z-[1]">
                              QuillShield
                            </div>
                            <div className="w-[101px] h-[23px] relative font-medium inline-block z-[1]">
                              QuillAcademy
                            </div>
                            <div className="w-[90px] h-[23px] relative font-medium inline-block z-[1]">
                              QuillMonitor
                            </div>
                            <div className="w-[101px] h-[23px] relative font-medium inline-block z-[1]">
                              Web3Suggest
                            </div>
                            <div className="w-[119px] h-[23px] relative font-medium inline-block z-[1]">
                              Explore All Tools
                            </div>
                          </div>
                          
                        
                          <div className="flex flex-col items-start justify-start mt-[19px] gap-[13.87px] ml-[75px]">
                            <div className="w-[92px] h-[23px] relative font-medium inline-block z-[1]">
                              Red Teaming
                            </div>
                            <div className="w-[119px] h-[23px] relative font-medium inline-block z-[1]">
                              dApp Pentesting
                            </div>
                            <div className="w-[106px] h-[23px] relative font-medium inline-block z-[1]">
                              DeFi Diligence
                            </div>
                            <div className="w-[135px] h-[23px] relative font-medium inline-block z-[1]">
                              NFT Due Diligence
                            </div>
                            <div className="w-[165px] h-[23px] relative font-medium inline-block z-[1]">
                              Rug Pull Due Diligence
                            </div>
                            <div className="w-[151px] h-[23px] relative font-medium inline-block z-[1]">
                              Security Consultation
                            </div>
                            <div className="w-[148px] h-[23px] relative font-medium inline-block z-[1]">
                              Blockchain Forensics
                            </div>
                            <div className="w-[195px] h-[23px] relative font-medium inline-block whitespace-nowrap z-[1]">
                              KYC (Know Your Customer)
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                      <div className="w-[157.1px] flex flex-col items-start justify-start gap-[4.7px]">
                        <div className="w-[157px] h-[30px] relative font-medium inline-block z-[1] mq450:text-mid">
                          Our Programmes
                        </div>
                        <div className="self-stretch h-[2.3px] relative rounded-[18.48px] bg-dodgerblue z-[1]" />
                      </div>
                      <div className="self-stretch flex flex-row justify-start gap-[18.55px] width-[1000px] mq850:flex-wrap">
                        <button className="cursor-pointer [border:none] pt-[9.2px] px-[17.4px] pb-[9.4px] bg-[transparent] flex-[0.8253] rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] z-[1] mq450:flex-1">
                          <div className="h-[23px] relative mr-[10px] text-base-2 whitespace-nowrap font-small font-jost text-white text-center inline-block">
                            Refer-Earn-Secure
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] pt-[9.2px] px-[25.4px] pb-[9.4px] bg-[transparent] flex-[0.8253] rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] z-[1] mq450:flex-1">
                          <div className="h-[23px] relative mr-[15px] text-base-2 whitespace-nowrap font-small font-jost text-white text-center inline-block">
                          WAGSI Grants
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] pt-[9.2px] px-[6.4px] pb-[9.4px] bg-[transparent] flex-[0.8253] rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] z-[1] mq450:flex-1">
                          <div className="h-[23px] relative mr-[10px] text-base-2 whitespace-nowrap font-small font-jost text-white text-center inline-block">
                          Ambassador Program
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] pt-[9.2px] px-[10.4] pb-[9.4px] bg-[transparent] flex-[0.8253] rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] z-[1] mq450:flex-1">
                          <div className="h-[23px] relative mr-[10px] text-base-2 whitespace-nowrap font-small font-jost text-white text-center inline-block">
                          Partnership Program
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[207.9px] flex flex-col items-start justify-start gap-[142.4px] text-base-2 text-whitesmoke-200 mq850:hidden">
                    <div className="flex flex-row items-start justify-start py-0 pr-10 pl-[135px]">
                      <div className="flex flex-col items-start justify-start gap-[4.6px]">
                        <div className="w-[107px] h-[30px] relative text-xl-8 font-medium text-white inline-block z-[1] mq450:text-mid">
                          Quick Links
                        </div>
                        <div className="w-[107.4px] flex flex-row items-start justify-start pt-0 px-0 pb-[14px] box-border">
                          <div className="h-[2.3px] flex-1 relative rounded-[18.48px] bg-dodgerblue z-[1]" />
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                          <div className="h-[23px] w-[50px] relative font-medium inline-block z-[1]">
                            Pricing
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                          <div className="h-[23px] w-[97px] relative font-medium inline-block z-[1]">
                            Audit Process
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px]">
                          <div className="h-[23px] w-[78px] relative font-medium inline-block z-[1]">
                            Our Audits
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                          <div className="h-[23px] w-[86px] relative font-medium inline-block z-[1]">
                            Testimonials
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px]">
                          <div className="h-[23px] w-[125px] relative font-medium inline-block z-[1]">
                            Security Synopsis
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                          <div className="h-[23px] w-[33px] relative font-medium inline-block z-[1]">
                            Blog
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.3px]">
                          <div className="h-[23px] w-[49px] relative font-medium inline-block z-[1]">
                            Clients
                          </div>
                        </div>
                        <div className="w-[120.1px] flex flex-row items-start justify-start gap-[8.7px]">
                          <div className="h-[23px] w-14 relative font-medium inline-block z-[1]">
                            Careers
                          </div>
                          <div className="flex-1 rounded-[4.62px] bg-dodgerblue flex flex-row items-start justify-start pt-[1.099999999999909px] px-[8.100000000000023px] pb-0.5 z-[1] text-center text-sm-9 text-white">
                            <div className="h-[23.1px] w-[55.4px] relative rounded-[4.62px] bg-dodgerblue hidden" />
                            <div className="h-5 flex-1 relative font-medium inline-block z-[1]">
                              Hiring
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[39.9px] max-w-full text-sm-9 text-white mq850:gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.7px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1225:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[54.3px] max-w-full mq450:gap-[27px] mq850:flex-wrap">
                  <img
                    className="h-[60.1px] w-[212.5px] relative object-cover min-h-[60px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <img
                    className="h-[60.1px] w-[194px] relative object-cover min-h-[60px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>
                <div className="w-[414.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[13.899999999999636px] box-border max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                    <a href="https://twitter.com/quillaudits" className="h-[23.1px] w-[23.1px] relative min-h-[23px] z-[1]">
                      <img
                        className="w-[23.1px] h-[23.1px] relative z-[1]"
                        alt=""
                        src="/x.svg"
                      />
                    </a>

                    <a href="https://www.linkedin.com/company/quillaudits/" className="h-[23.1px] w-[23.1px] relative min-h-[23px] z-[1]">
                      <img
                        className="w-[23.1px] h-[23.1px] relative z-[1]"
                        alt=""
                        src="/vector-8.svg"
                      />
                    </a>

                    <a href="https://t.me/quillaudits" className="h-[23.1px] w-[28.9px] relative min-h-[23px] z-[1]">
                      <img
                        className="w-[28.9px] h-[23.1px] relative z-[1]"
                        alt=""
                        src="/vector-9.svg"
                      />
                    </a>

                    <a href="https://www.reddit.com/r/QuillAudits/" className="h-[23.1px] w-[25.4px] relative min-h-[23px] z-[1]">
                      <img
                        className="w-[25.4px] h-[23.1px] relative z-[1]"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </a>

                    <a href="https://quillaudits.medium.com/" className="h-[23.1px] w-[30px] relative min-h-[23px] z-[1]">
                      <img
                        className="w-[30px] h-[23.1px] relative z-[1]"
                        alt=""
                        src="/vector-111.svg"
                      />
                    </a>

                    <a href="https://www.youtube.com/channel/UC5Yt_8qEaAr-PiTMmGBuPCQ/videos" className="h-[23.1px] w-[30px] relative min-h-[23px] z-[1]">
                      <img
                        className="w-[30px] h-[23.1px] relative z-[1]"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13.9px] max-w-full">
              <div className="self-stretch h-[2.3px] relative bg-gray-700 overflow-hidden shrink-0 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq850:flex-wrap">
                <div className="h-5 w-[392.8px] relative inline-block shrink-0 max-w-full z-[1]">
                  All Rights Reserved. © Copyright 2024. QuillAudits - LLC
                </div>
                <div className="h-5 w-[93.5px] relative text-right inline-block shrink-0 z-[1]">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
