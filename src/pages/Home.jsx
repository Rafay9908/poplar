import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import tick from "../assets/hero-icon.svg";
import arrow from "../assets/btn-arrow.svg";
import heroImage from "../assets/hero-image.png";
import markIcon from "../assets/mark-icon.svg";

import payIcon from "../assets/pay-icon.svg";
import linkIcon from "../assets/link.svg";

import clip from "../assets/bg-clip.svg";

import poplarCard from "../assets/poplar-card.svg";

import dashboard from '../assets/dashboard.png'

import cardOne from '../assets/card-one-image.svg'
import circleArrow from '../assets/circle-arrow.svg'

import ctaSection from '../assets/ctaSection.svg'

import blob from '../assets/blob.svg'

import phone from '../assets/phone.png'

function Home() {
  const [selected, setSelected] = useState("1 month");
  const options = ["1 month", "12 months", "24 months", "36 months"];

  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div className="flex flex-row items-center">
            <div className="w-[50%]">
              <h3 className="text-[#123149] font-arbutus text-[clamp(40px,5vw,96px)]">
                Yield Every <br /> Minute™
              </h3>
              <p className="text-[#123149] text-[clamp(20px,1.25vw,24px)] leading-[150%] my-10">
                With Poplar’s Yield as a Service, businesses <br /> can invest
                their idle cash, turning their cash <br /> from a cost center to
                a profit center.
              </p>
              <ul className="flex flex-col gap-y-5">
                <li className="flex items-center">
                  <img className="pr-2.5" src={tick} alt="#" />
                  Up to 8% APY
                </li>
                <li className="flex items-center">
                  <img className="pr-2.5" src={tick} alt="#" />
                  Fully liquid, at-will access to money
                </li>
                <li className="flex items-center">
                  <img className="pr-2.5" src={tick} alt="#" />
                  No lockup periods or withdraw limits
                </li>
                <li className="flex items-center">
                  <img className="pr-2.5" src={tick} alt="#" />
                  Military Grade Security
                </li>
              </ul>
              <div className="mt-10 flex flex-col lg:flex-row ">
                <input
                  className="lg:py-[15px] lg:px-[20px] 2xl:py-[25px] 2xl:px-[30px] text-lg rounded-2xl text-[#123149] border border-solid border-[#D0D6DB] outline-0 "
                  type="text"
                  placeholder="Enter your email"
                />

                <a className="bg-[#11CC7A] inline-block text-lg rounded-2xl text-white font-bold ml-2.5 cursor-pointer md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px] 2xl:py-[25px] 2xl:px-[30px] drop-shadow-[0_14px_40px_rgba(17,204,122,0.3)]">
                  Join the waitlist
                  <img className="inline pl-2.5" src={arrow} alt="" />
                </a>
              </div>
            </div>

            <img className="w-[50%]" src={heroImage} alt="" />
          </div>
        </div>
      </div>

      <div className="my-[200px]">
        <div className="container">
          <div className="flex items-center">
            <div className="w-[35%]">
              <img src={markIcon} alt="" />
              <h3 className="font-arbutus text-7xl my-[50px]">
                What is <br />
                <span className="text-[#11CC7A] leading-[110%]">
                  {" "}
                  idle cash?
                </span>
              </h3>
              <p className="text-2xl text-[#123149] leading-[150%]">
                At Poplar, we define “idle money” as cash that is sitting in an
                account for a day, a weekend, a week, or even a year that is not
                invested or creating real-time value to the business.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img alt="" />
              <div className="flex gap-20">
                <div className="w-[510px] border-[#D0D6DB] border-solid border rounded-[20px] p-[40px] flex">
                  <img src={payIcon} alt="" />
                  <div className="pl-[40px]">
                    <h4 className="text-[34px] text-[#123149]">payroll</h4>
                    <p className="text-lg text-[#123149] ">
                      Whether it’s weekly, bi-weekly, monthly or quarterly you
                      have money sitting idle for payroll that could be earning.
                    </p>
                  </div>
                </div>
                <img src={linkIcon} alt="" />
              </div>

              <div className="flex gap-20 pl-[250px] my-[20px]">
                <img src={linkIcon} className="rotate-180" alt="" />
                <div className="w-[510px] border-[#D0D6DB] border-solid border rounded-[20px] p-[40px] flex">
                  <img src={payIcon} alt="" />
                  <div className="pl-[40px]">
                    <h4 className="text-[34px] text-[#123149]">payroll</h4>
                    <p className="text-lg text-[#123149] ">
                      Whether it’s weekly, bi-weekly, monthly or quarterly you
                      have money sitting idle for payroll that could be earning.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[510px] border-[#D0D6DB] border-solid border rounded-[20px] p-[40px] flex">
                  <img src={payIcon} alt="" />
                  <div className="pl-[40px]">
                    <h4 className="text-[34px] text-[#123149]">payroll</h4>
                    <p className="text-lg text-[#123149] ">
                      Whether it’s weekly, bi-weekly, monthly or quarterly you
                      have money sitting idle for payroll that could be earning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="flex flex-col items-center">
            <h3 className="text-[#123149] font-arbutus text-[72px]">
              <span className="text-[#11CC7A]">Earn More</span> With Poplar
            </h3>
            <p className="text-lg text-[#123149] leading-[150%] my-[50px]">
              See how Poplar can activate your idle money.
            </p>
            <p className="mb-[50px] text-[#123149] leading-[150%]">
              Select the amount of idle cash you want to deposit, and your
              earning period:
            </p>

            <div className="flex items-center">
              <input
                type="text"
                className="text-[#123149] text-[32px] border border-solid border-[#D0D6DB] outline-none rounded-[5px] px-[70px] py-[10px] w-[340px] font-bold mr-[20px]"
              />

              <div className="rounded-[85px] border border-solid border-[#D0D6DB] flex gap-[40px] py-[10px] px-[10px]">
                {options.map((option, index) => (
                  <button
                    className={`${
                      option === selected
                        ? "bg-green-500 py-[27.5px] px-[30px] text-white"
                        : "text-[#D0D6DB]"
                    } transiton rounded-[85px] cursor-pointer last:ml-2 py-[27.5px] px-[30px] text-lg font-bold`}
                    onClick={() => setSelected(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="container">
          <div className="flex flex-row  justify-between relative">
            <div className="bg-[#11CC7A] w-[49%] max-w-[705px] py-10 px-[38px] rounded-[50px]">
              <div className="flex items-center">
                <img src={poplarCard} alt="#" />
                <p className="pl-5 text-5xl text-[#FFFFFF] font-arbutus">
                  Poplar account
                </p>
              </div>

              <p className="text-2xl leading-[150%] text-white py-[30px]">
                Accounts that earn based on your businesses needs.
              </p>
              <div className="bg-[#58DBA2] h-[1px] mb-[30px]"></div>

              <div>
                <div className="text-lg leading-[80%] text-white flex justify-between w-[65%]"></div>

                <div className="text-white flex justify-between w-[65%] font-arbutus text-6xl"></div>
              </div>

              <div>
                <div className="flex justify-between flex-row w-[66%]">
                  <div className="">
                    <p className="text-white text-lg leading-[80%]">In 36 months you will have</p>
                    <p className="text-6xl font-arbutus text-white mt-[10px]">$115,763</p>
                  </div>

                  <div>
                    <p className="text-white text-lg leading-[80%]">APY</p>
                    <p className="text-6xl font-arbutus text-white mt-[10px]">5%</p>
                  </div>
                </div>

                <div className="flex justify-between flex-row w-[66%] mt-[30px]">
                  <div className="">
                    <p className="text-white text-lg leading-[80%]">Automated</p>
                    <p className="text-[30px] font-arbutus text-white mt-[10px]">YES</p>
                  </div>

                  <div>
                    <p className="text-white text-lg leading-[80%]">Withdrawl Limits</p>
                    <p className="text-[30px] font-arbutus text-white mt-[10px]">NONE</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-[#F3F5F6] w-[49%] max-w-[705px] py-10 px-[38px] rounded-[50px]">
              <div>
                <p className="pl-5 text-5xl text-[#123149] font-arbutus">
                  Checking account
                </p>
              </div>

              <p className="text-2xl leading-[150%] text-[#83939F] py-[30px]">
                Accounts that earn based on your businesses needs.
              </p>
              <div className="bg-[#AFBAC2] h-[1px] mb-[30px]"></div>

              <div>
                <div className="text-lg leading-[80%] text-white flex justify-between w-[65%]"></div>

                <div className="text-white flex justify-between w-[65%] font-arbutus text-6xl"></div>
              </div>

              <div>
                <div className="flex justify-between flex-row w-[80%]">
                  <div className="">
                    <p className="text-[#83939F] text-lg leading-[80%]">In 36 months you will have</p>
                    <p className="text-6xl font-arbutus text-[#123149] mt-[10px]">$100,009</p>
                  </div>

                  <div>
                    <p className="text-[#83939F] text-lg leading-[80%]">APY</p>
                    <p className="text-6xl font-arbutus text-[#123149] mt-[10px]">.03%</p>
                  </div>
                </div>

                <div className="flex justify-between flex-row w-[66%] mt-[30px]">
                  <div className="">
                    <p className="text-[#83939F] text-lg leading-[80%]">Automated</p>
                    <p className="text-[30px] font-arbutus text-[#123149] mt-[10px]">No</p>
                  </div>

                  <div>
                    <p className="text-[#83939F] text-lg leading-[80%]">Withdrawl Limits</p>
                    <p className="text-[30px] font-arbutus text-[#123149] mt-[10px]">NONE</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="container">
          <div>
            <div className="flex items-center justify-between mb-[30px]">
              <h3 className="font-arbutus text-[72px] text-[#123149]">How It Works</h3>
              <p className="text-[#8898A4] text-lg leading-[150%] font-normal text-right">Automatically Invest All Unused Cash Anywhere, <br /> Anytime In Traditional and Novel Markets.</p>
            </div>

            <img src={dashboard} alt="" />

            <div className="mt-[60px]">
              <div className="flex flex-wrap justify-between gap-y-[20px] relative">
                <img className="absolute top-[22.5%] left-[47%]" src={circleArrow} alt="#" />
                <img className="absolute top-[72%] left-[47%] rotate-180" src={circleArrow} alt="#" />
                <div className="  flex max-w-[705px] w-[49%] flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>

                <div className="max-w-[705px] w-[49%] flex flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>


                <div className="max-w-[705px] w-[49%] flex flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>


                <div className="max-w-[705px] w-[49%] flex flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[240px]">
        <div className="container relative">
        <img className="absolute top-[-200px] left-[-100px] z-[-1]" src={blob} alt="" />
          <div className="z-1 h-[453px] bg-[#11CC7A] rounded-[80px]">
               
                <img className="absolute top-[-40%] right-20" src={phone} alt="" />
                <div className="w-[64%] pt-[100px] pl-[100px] pb-[100px]">
                <p className="text-white text-2xl">-Steve Tellis, CTO @ Fortunian</p>
                <h3 className="font-arbutus text-5xl text-white mt-[40px]">“We started doing this ourselves and then realized other people would want to do it”</h3>
                </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
        <div className="flex items-center justify-between mb-[30px]">
              <h3 className="font-arbutus leading-[100%] text-[72px] text-[#123149]">Safe & <br /> <span className="text-[#11CC7A]"> Accessible</span></h3>
              <p className="text-[#8898A4] text-lg leading-[150%] font-normal text-right">We vouch for the trustworthiness of our best-in-class partners and we take <br /> pride in our own commitment: to protect your assets by lending them to <br /> institutions on an over-collateralized basis only.</p>
            </div>

            <div className="mt-[60px] mb-[100px]">
              <div className="flex flex-wrap justify-between gap-y-[20px] relative">

                <div className="  flex max-w-[705px] w-[49%] flex-col items-center bg-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px] rounded-t-[20px] rounded-l-[20px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>

                <div className="max-w-[705px] w-[49%] flex flex-col items-center  border border-solid border-[#CCD3D9] p-[60px] rounded-t-[20px] rounded-r-[20px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>


                <div className="max-w-[705px] w-[49%] flex flex-col items-center  border border-solid border-[#CCD3D9] p-[60px] rounded-l-[20px] rounded-b-[20px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>


                <div className="max-w-[705px] w-[49%] flex flex-col items-center  border border-solid border-[#CCD3D9] p-[60px] bg-[#FAFBFD] rounded-r-[20px] rounded-b-[20px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">Set up an account online with zero costs</h3>
                  <p className="text-[24px] text-[#8898A4] text-center">Connect it to bank account & get instant recommendations on investment amounts and durations</p>
                </div>
              </div>
            </div>
        </div>

      </div>

      <div className="pt-[30px] pb-[100px]">
        <div className="container text-center flex flex-col items-center gap-[40px]">
          <h3 className="font-arbutus text-7xl text-[#0a283f]">ready to <span className="text-[#11cc7a]">learn more?</span></h3>
          <p className="text-[#84939F] text-2xl leading-[150%]">With Poplar’s Yield as a Service, businesses can invest their idle cash, <br /> turning their cash from a cost center to a profit center.</p>

          <div className="flex flex-col lg:flex-row ">
                <input
                  className="lg:py-[15px] lg:px-[20px] 2xl:py-[25px] 2xl:px-[30px] text-lg rounded-2xl text-[#123149] border border-solid border-[#D0D6DB] outline-0 "
                  type="text"
                  placeholder="Enter your email"
                />

                <a className="bg-[#11CC7A] inline-block text-lg rounded-2xl text-white font-bold ml-2.5 cursor-pointer md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px] 2xl:py-[25px] 2xl:px-[30px] drop-shadow-[0_14px_40px_rgba(17,204,122,0.3)]">
                  Join the waitlist
                  <img className="inline pl-2.5" src={arrow} alt="" />
                </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
