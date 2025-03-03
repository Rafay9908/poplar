import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import tick from "../assets/hero-icon.svg";
import arrow from "../assets/btn-arrow.svg";
import heroImage from "../assets/hero-image.png";
import heroBgMobile from "../assets/hero-bg-mobile.svg";
import markIcon from "../assets/mark-icon.svg";

import payIcon from "../assets/pay-icon.svg";
import inventoryIcon from "../assets/inventory.svg";
import taxesIcon from "../assets/taxes.svg";
import linkIcon from "../assets/link.svg";

import clip from "../assets/bg-clip.svg";

import poplarCard from "../assets/poplar-card.svg";

import dashboard from "../assets/dashboard.png";

import cardOne from "../assets/card-one-image.svg";
import circleArrow from "../assets/circle-arrow.svg";

import ctaSection from "../assets/ctaSection.svg";

import blob from "../assets/blob.svg";

import phone from "../assets/phone.png";

import mbPhone from '../assets/mobile-phone.png'

function Home() {
  const [selected, setSelected] = useState("1 month");
  const options = ["1 month", "12 months", "24 months", "36 months"];

  return (
    <>
      <Header />

      <div className="mb-[30px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-[100%] lg:w-[50%] text-center lg:text-left">
              <h3 className="text-[#123149] font-arbutus text-[clamp(63px,5vw,96px)] header-heading">
                Yield Every Minute™
              </h3>
              <p className="text-[#123149] text-[clamp(20px,1.25vw,24px)] leading-[150%] my-10">
                With Poplar’s Yield as a Service, businesses can invest their
                idle cash, turning their cash from a cost center to a profit
                center.
              </p>
              <ul className="flex items-center lg:items-start flex-col gap-y-5 text-[#123149]">
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
                  className="py-[25px] px-[30px] text-lg rounded-2xl text-[#123149] border border-solid border-[#D0D6DB] outline-0 mb-[20px] lg:mb-[0px]"
                  type="text"
                  placeholder="Enter your email"
                />

                <a className="bg-[#11CC7A] inline-block text-lg rounded-2xl text-white font-bold lg:ml-2.5 cursor-pointer py-[25px] px-[30px] drop-shadow-[0_14px_40px_rgba(17,204,122,0.3)]">
                  Join the waitlist
                  <img className="inline pl-2.5" src={arrow} alt="" />
                </a>
              </div>
            </div>

            <img
              className="hidden lg:block lg:w-[55%]"
              src={heroImage}
              alt=""
            />
          </div>
        </div>
        <div className="mt-[86px] relative ">
          <img
            className="absolute max-w-[100%] w-[552px] md:w-[680px] right-0 lg:hidden"
            src={heroBgMobile}
            alt=""
          />
        </div>
      </div>

      <div className="sm:mt-[900px] md:mt-[1050px] lg:mt-[0px] xl:mt-[200px] xl:mb-[100px] mb-[56px]  relative image-margin">
        <div className="container">
          <div className="flex flex-col xl:flex-row items-center">
            <div className="mb-[40px] xl:mb-[0px] flex flex-col items-center xl:items-start w-[100%] xl:w-[35%]">
              <img className="w-[100px]" src={markIcon} alt="" />
              <h3 className="text-center lg:text-left font-arbutus text-[clamp(48px,5.25vw,72px)] my-[50px]">
                What Is <br />
                <span className="text-[#11CC7A] leading-[110%]">
                  Idle Cash?
                </span>
              </h3>
              <p className="text-center xl:text-left text-2xl text-[#8898A4] leading-[150%]">
                At Poplar, we define “idle money” as cash that is sitting in an
                account for a day, a weekend, a week, or even a year that is not
                invested or creating real-time value to the business.
              </p>
            </div>

            <div className="flex flex-col items-center ">
              <div className="flex gap-20">
                <div className="w-[100%] xl:w-[510px] border-[#D0D6DB] border-solid border rounded-[20px] p-[40px] flex flex-col lg:flex-row items-center">
                  <img src={payIcon} alt="" />
                  <div className="lg:pl-[40px] text-center lg:text-left">
                    <h4 className="text-[34px] text-[#123149] font-arbutus mt-[20px] mb-[40px]">
                      Payroll
                    </h4>
                    <p className="text-lg text-[#123149] ">
                      Whether it’s weekly, bi-weekly, monthly or quarterly you
                      have money sitting idle for payroll that could be earning.
                    </p>
                  </div>
                </div>
                <img className="hidden xl:block" src={linkIcon} alt="" />
              </div>

              <div className="flex gap-20 xl:pl-[200px] my-[40px] lg:my-[20px]">
                <img
                  src={linkIcon}
                  className="rotate-180 hidden xl:block"
                  alt=""
                />
                <div className="w-[100%] xl:w-[510px] border-[#D0D6DB] border-solid border rounded-[20px] p-[40px] flex flex-col lg:flex-row items-center">
                  <img className="w-[100px]" src={inventoryIcon} alt="" />
                  <div className="text-center lg:text-left lg:pl-[40px]">
                    <h4 className="text-[34px] text-[#123149] font-arbutus mt-[20px] mb-[40px]">
                      Inventory
                    </h4>
                    <p className="text-lg text-[#123149] ">
                      Whether it’s weekly, bi-weekly, monthly or quarterly you
                      have money sitting idle for payroll that could be earning.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[100%] xl:w-[510px] border-[#D0D6DB] border-solid border rounded-[20px] p-[40px] flex flex-col lg:flex-row items-center">
                  <img className="w-[100px]" src={taxesIcon} alt="" />
                  <div className="text-center lg:text-left lg:pl-[40px]">
                    <h4 className="text-[34px] text-[#123149] font-arbutus mt-[20px] mb-[40px]">
                      Taxes
                    </h4>
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
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[#123149] font-arbutus text-[clamp(48px,5.25vw,72px)]">
              <span className="text-[#11CC7A]">Earn More</span> With Poplar
            </h3>
            <p className="text-2xl text-[#8898A4] leading-[150%] my-[50px]">
              See how Poplar can activate your idle money.
            </p>
            <p className="mb-[40px] text-2xl text-[#123149] leading-[150%]">
              Select the amount of idle cash you want to deposit, and your
              earning period:
            </p>

            <div className="flex flex-col xl:flex-row items-center">
              <input
                type="number"
                className="text-[#123149] text-[32px] border border-solid border-[#D0D6DB] outline-none rounded-[5px] px-[70px] py-[10px] w-[340px] font-bold mr-[20px] xl:mb-[0px] mb-[20px]"
              />

              <div className="rounded-0 xl:rounded-[85px] border border-solid border-[#D0D6DB] flex gap-[40px] py-[10px] px-[10px] flex-wrap justify-center xl:flex-nowrap xl:justify-baseline">
                {options.map((option, index) => (
                  <button
                    className={`${
                      option === selected
                        ? "bg-green-500 py-[23.5px] xl:py-[27.5px] px-[40px] xl:px-[30px] text-white shadow-[0px_10px_14px_rgba(17,204,122,0.3)]"
                        : "text-[#D0D6DB]"
                    } transiton rounded-[15px] xl:rounded-[85px] cursor-pointer last:ml-2 py-[27.5px] px-[40px] xl:px-[30px] text-lg font-bold`}
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
          <div className="flex flex-col xl:flex-row justify-between relative">
            <div className="bg-[#11CC7A] w-[100%] xl:w-[49%] xl:max-w-[705px] py-10 px-[38px] rounded-[50px] mb-[40px] xl:mb-[0px]">
              <div className="flex items-center">
                <img src={poplarCard} alt="#" />
                <p className="pl-5 text-[36px] xl:text-[48px] text-[#FFFFFF] font-arbutus">
                  Poplar account
                </p>
              </div>

              <p className="text-[20px] xl:text-2xl leading-[150%] text-white py-[30px]">
                Accounts that earn based on your businesses needs.
              </p>
              <div className="bg-[#58DBA2] h-[1px] mb-[30px]"></div>

              <div>
                <div className="flex justify-between flex-col xl:flex-row  xl:w-[80%]">
                  <div className="flex items-center justify-between w-[100%] xl:w-auto xl:items-start xl:block xl:justify-between">
                    <p className="text-white text-lg leading-[120%] xl:leading-[80%]">
                      In 36 months you will have
                    </p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-white mt-[10px] ml-[20px] xl:ml-[0px]">
                      $115,763
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-[100%] xl:w-auto xl:items-start xl:block xl:pl-[40px]">
                    <p className="text-white text-lg leading-[120%] xl:leading-[80%]">APY</p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-white mt-[10px]">
                      5%
                    </p>
                  </div>
                </div>

                <div className="flex justify-between flex-col xl:flex-row xl:w-[66%] xl:mt-[30px]">
                  <div className="flex flex-row xl:flex-col items-center xl:items-start justify-between w-[100%] xl:w-auto">
                    <p className="text-white text-lg leading-[120%] xl:leading-[80%]">
                      Automated
                    </p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-white xl:mt-[10px]">
                      YES
                    </p>
                  </div>

                  <div className="flex flex-row xl:flex-col items-center xl:items-start justify-between w-[100%] xl:w-auto">
                    <p className="text-white text-lg leading-[120%] xl:leading-[80%]">
                      Withdrawl Limits
                    </p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-white mt-[10px]">
                      NONE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F5F6] w-[100%] xl:w-[49%] xl:max-w-[705px] py-10 px-[38px] rounded-[50px] mb-[40px] xl:mb-[0px]">
              <div className="flex items-center">
                <p className="text-[36px] xl:text-[48px] text-[#123149] font-arbutus">
                  Checking account
                </p>
              </div>

              <p className="text-[20px] xl:text-2xl leading-[150%] text-[#83939F] py-[30px]">
                Accounts that earn based on your businesses needs.
              </p>
              <div className="bg-[#AFBAC2] h-[1px] mb-[30px]"></div>

              <div>
                <div className="flex justify-between flex-col xl:flex-row  xl:w-[80%]">
                  <div className="flex items-center justify-between w-[100%] xl:w-auto xl:items-start xl:block xl:justify-between">
                    <p className="text-[#83939F] text-lg leading-[120%]">
                      In 36 months you will have
                    </p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-[#123149] mt-[10px] ml-[20px] xl:ml-[0px]">
                      $115,763
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-[100%] xl:w-auto xl:items-start xl:block xl:pl-[40px]">
                    <p className="text-[#83939F] text-lg leading-[120%]">APY</p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-[#123149] mt-[10px]">
                      5%
                    </p>
                  </div>
                </div>

                <div className="flex justify-between flex-col xl:flex-row xl:w-[66%] xl:mt-[30px]">
                  <div className="flex flex-row xl:flex-col items-center xl:items-start justify-between w-[100%] xl:w-auto">
                    <p className="text-[#83939F] text-lg leading-[100%]">
                      Automated
                    </p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-[#123149] xl:mt-[10px]">
                      YES
                    </p>
                  </div>

                  <div className="flex flex-row xl:flex-col items-center xl:items-start justify-between w-[100%] xl:w-auto">
                    <p className="text-[#83939F] text-lg leading-[120%] xl:leading-[80%]">
                      Withdrawl Limits
                    </p>
                    <p className="text-[36px] xl:text-6xl font-arbutus text-[#123149] mt-[10px]">
                      NONE
                    </p>
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
            <div className="flex flex-col xl:flex-row items-center justify-between mb-[30px]">
              <h3 className="font-arbutus text-[72px] text-[#123149] text-center xl:text-left">
                How It Works
              </h3>
              <p className="text-[#8898A4] text-lg leading-[150%] font-normal xl:text-right text-center mt-[50px] mb-[20px] xl:mt-[0px] xl:mb-[0px]">
                Automatically Invest All Unused Cash Anywhere, Anytime In
                Traditional and Novel Markets.
              </p>
            </div>

            <img src={dashboard} alt="" />

            <div className="mt-[60px]">
              <div className="flex flex-col xl:flex-row flex-wrap justify-between gap-y-[20px] relative">
                <img
                  className="hidden xl:inline-block absolute top-[22.5%] left-[47%]"
                  src={circleArrow}
                  alt="#"
                />
                <img
                  className="hidden xl:inline-block absolute top-[72%] left-[47%] rotate-180"
                  src={circleArrow}
                  alt="#"
                />
                <div className="flex w-[100%] xl:max-w-[705px] xl:w-[49%] flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                    Set up an account online with zero costs
                  </h3>
                  <p className="text-[24px] text-[#8898A4] text-center">
                    Connect it to bank account & get instant recommendations on
                    investment amounts and durations
                  </p>
                </div>

                <div className="w-[100%] xl:max-w-[705px] xl:w-[49%] flex flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                    “Set & forget” business rules
                  </h3>
                  <p className="text-[24px] text-[#8898A4] text-center">
                    Connect it to bank account & get instant recommendations on
                    investment amounts and durations
                  </p>
                </div>

                <div className="w-[100%] xl:max-w-[705px] xl:w-[49%] flex flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                    Withdrawal Track and yield in real-time at anytime
                  </h3>
                  <p className="text-[24px] text-[#8898A4] text-center">
                    Connect it to bank account & get instant recommendations on
                    investment amounts and durations
                  </p>
                </div>

                <div className="w-[100%] xl:max-w-[705px] xl:w-[49%] flex flex-col items-center text-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px]">
                  <img className="w-[99px]" src={cardOne} alt="" />
                  <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                    Withdrawal Track and yield in real-time at anytime
                  </h3>
                  <p className="text-[24px] text-[#8898A4] text-center">
                    Connect it to bank account & get instant recommendations on
                    investment amounts and durations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[240px]">
        <div className="container">
          <div className="bg-[#11CC7A] rounded-[65px] py-[60px] px-[30px] text-center">
            <h3 className="text-white font-arbutus text-4xl leading-[120%]">“We started doing this ourselves and then realized other people would want to do it”</h3>
            <p className="text-2xl leading-[150%] text-white mt-[50px]">Lior Weinstein, CEO @ Fortunian</p>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="flex flex-col xl:flex-row items-center justify-between mb-[40px] xl:mb-[30px]">
            <h3 className="font-arbutus leading-[100%] text-[36px] xl:text-[72px] text-[#123149] text-center xl:text-left mb-[40px] xl:mb-[0px]">
              Safe & <br /> <span className="text-[#11CC7A]"> Accessible</span>
            </h3>
            <p className="text-[#123149] text-lg leading-[150%] font-normal text-center xl:text-right xl:w-[51%]">
              We vouch for the trustworthiness of our best-in-class partners and
              we take pride in our own commitment: to protect your assets by
              lending them to institutions on an over-collateralized basis only.
            </p>
          </div>

          <div className="mt-[60px] mb-[100px]">
            <div className="flex flex-col xl:flex-row flex-wrap justify-between gap-y-[20px] relative">
              <div className="flex xl:max-w-[705px] w-[100%] xl:w-[49%] flex-col items-center bg-[#FAFBFD] border border-solid border-[#CCD3D9] p-[60px] rounded-t-[20px] rounded-l-[20px]">
                <img className="w-[72px] xl:w-[99px]" src={cardOne} alt="" />
                <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                  Set up an account online with zero costs
                </h3>
                <p className="text-[24px] text-[#8898A4] text-center">
                  Connect it to bank account & get instant recommendations on
                  investment amounts and durations
                </p>
              </div>

              <div className="xl:max-w-[705px] w-[100%] xl:w-[49%] flex flex-col items-center  border border-solid border-[#CCD3D9] p-[60px] rounded-t-[20px] rounded-r-[20px]">
                <img className="w-[72px] xl:w-[99px]" src={cardOne} alt="" />
                <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                  Set up an account online with zero costs
                </h3>
                <p className="text-[24px] text-[#8898A4] text-center">
                  Connect it to bank account & get instant recommendations on
                  investment amounts and durations
                </p>
              </div>

              <div className="xl:max-w-[705px] w-[100%] xl:w-[49%] flex flex-col items-center  border border-solid border-[#CCD3D9] p-[60px] rounded-l-[20px] rounded-b-[20px]">
                <img className="w-[72px] xl:w-[99px]" src={cardOne} alt="" />
                <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                  Set up an account online with zero costs
                </h3>
                <p className="text-[24px] text-[#8898A4] text-center">
                  Connect it to bank account & get instant recommendations on
                  investment amounts and durations
                </p>
              </div>

              <div className="xl:max-w-[705px] w-[100%] xl:w-[49%] flex flex-col items-center  border border-solid border-[#CCD3D9] p-[60px] bg-[#FAFBFD] rounded-r-[20px] rounded-b-[20px]">
                <img className="w-[72px] xl:w-[99px]" src={cardOne} alt="" />
                <h3 className="text-center text-2xl xl:text-[36px] text-[#123149] leading-[130%] font0-arbutus my-[20px]">
                  Set up an account online with zero costs
                </h3>
                <p className="text-[24px] text-[#8898A4] text-center">
                  Connect it to bank account & get instant recommendations on
                  investment amounts and durations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[30px] pb-[100px]">
        <div className="container text-center flex flex-col items-center gap-[40px]">
          <h3 className="font-arbutus text-2xl xl:text-7xl text-[#0a283f]">
            ready to <span className="text-[#11cc7a]">learn more?</span>
          </h3>
          <p className="text-[#84939F] text-lg xl:text-2xl leading-[150%] mt-[]">
            With Poplar’s Yield as a Service, businesses can invest their idle
            cash, turning their cash from a cost center to a profit
            center.
          </p>

          <div className="flex gap-2.5 xl:gap-0 flex-col lg:flex-row w-full lg:w-auto">
            <input
              className="lg:py-[15px] lg:px-[20px] 2xl:py-[25px] 2xl:px-[30px] text-lg rounded-2xl text-[#123149] border border-solid border-[#D0D6DB] outline-0 pl-[30px] py-[25px] md:hidden"
              type="text"
              placeholder="Enter your name"
            />

             <input
              className="lg:py-[15px] lg:px-[20px] 2xl:py-[25px] 2xl:px-[30px] text-lg rounded-2xl text-[#123149] border border-solid border-[#D0D6DB] outline-0 pl-[30px] py-[25px] md:hidden"
              type="number"
              placeholder="Enter your phone #"
            />

             <input
              className="lg:py-[15px] lg:px-[20px] 2xl:py-[25px] 2xl:px-[30px] text-lg rounded-2xl text-[#123149] border border-solid border-[#D0D6DB] outline-0 pl-[30px] py-[25px]"
              type="email"
              placeholder="Enter your email"
            />

            <a className="bg-[#11CC7A] inline-block text-lg rounded-2xl text-white font-bold xl:ml-2.5 cursor-pointer md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px] 2xl:py-[25px] 2xl:px-[30px] drop-shadow-[0_14px_40px_rgba(17,204,122,0.3)] pl-[30px] py-[25px] w-[100%]">
              Join the waitlist
              <img className="inline pl-2.5" src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container">
      <img className="w-full xl:hidden" src={mbPhone} alt="#" />
      </div>
    

      <Footer />
    </>
  );
}

export default Home;
