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

import poplarCard from '../assets/poplar-card.svg'

function Home() {
    const [selected, setSelected] = useState('1 month');
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

                <a className="bg-[#11CC7A] inline-block text-lg rounded-2xl text-white font-bold ml-2.5 cursor-pointer md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px] 2xl:py-[25px] 2xl:px-[30px]">
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
              <span className="text-[#11CC7A] leading-[110%]"> idle cash?</span>
            </h3>
            <p className="text-2xl text-[#123149] leading-[150%]">
              At Poplar, we define “idle money” as cash that is sitting in an
              account for a day, a weekend, a week, or even a year that is not
              invested or creating real-time value to the business.
            </p>
          </div>

          <div
            
            className="flex flex-col items-center"
          >
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
            <h3 className="text-[#123149] font-arbutus text-[72px]"><span className="text-[#11CC7A]">Earn More</span> With Poplar</h3>
            <p className="text-lg text-[#123149] leading-[150%] my-[50px]">See how Poplar can activate your idle money.</p>
            <p className="mb-[50px] text-[#123149] leading-[150%]">Select the amount of idle cash you want to deposit, and your earning period:</p>

            <div className="flex items-center">
                <input type="text" className="text-[#123149] text-[32px] border border-solid border-[#D0D6DB] outline-none rounded-[5px] px-[70px] py-[10px] w-[340px] font-bold mr-[20px]"/>

                <div className="rounded-[85px] border border-solid border-[#D0D6DB] flex gap-[40px] py-[10px] px-[10px]">
                {options.map((option, index) => (
                    <button 
                    className={`${option === selected ? "bg-green-500 py-[27.5px] px-[30px] text-white" : "text-[#D0D6DB]"} transiton rounded-[85px] cursor-pointer last:ml-2 py-[27.5px] px-[30px] text-lg font-bold`}
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
            <div className="flex">
                <div className="bg-[#11CC7A] w-[49%] py-10 px-[38px] rounded-[50px]">
                    <div className="flex items-center">
                        <img src={poplarCard} alt="#" />
                        <p className="pl-5 text-5xl text-[#FFFFFF] font-arbutus">Poplar account</p>
                    </div>

                    <p className="text-2xl leading-[150%] text-white py-[30px]">Accounts that earn based on your businesses needs.</p>
                    <div className="bg-[#58DBA2] h-[1px] mb-[30px]"></div>

                    <div>
                        <div className="text-lg leading-[80%] text-white flex justify-between w-[65%]">
                            <p>In 36 months you will have</p>
                            <p>APY</p>
                        </div>

                        <div className="text-white flex justify-between w-[65%] font-arbutus text-6xl">
                            <p>$115,763</p>
                            <p>5%</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Automated</p>
                            <p>Withdrawl Limits</p>
                        </div>

                        <div>
                            <p>Yes</p>
                            <p>None</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;