import React from "react";
import { ImAlarm } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const FormSection = () => {
  return (
    <div className="w-full overflow-hidden md:mt-0 pt-28" id="contactus">
      <div className="container mx-auto md:px-20 px-5">
        <div className="grid lg:grid-cols-[2fr_1fr] w-full md:gap-20 gap-10">
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold">
              Write Your Message
            </h2>

            <div className="flex md:flex-row flex-col gap-5 w-full z-40">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="py-4 px-6 bg-[#1e2739] placeholder:text-white w-full focus:border-secondary outline-secondary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="py-4 px-6 bg-[#1e2739] placeholder:text-white w-full focus:border-secondary outline-secondary"
                />
              </div>
            </div>

            <div className="w-full z-40">
              <input
                type="text"
                placeholder="Subject"
                className="py-4 px-6 bg-[#1e2739] placeholder:text-white w-full focus:border-secondary outline-secondary"
              />
            </div>

            <div className="w-full z-40">
              <textarea
                placeholder="Your Message"
                className="py-4 px-6 bg-[#1e2739] placeholder:text-white w-full focus:border-secondary outline-secondary"
                rows={6}
              />
            </div>

            <div className="w-full flex items-center justify-center z-40">
              <button
                type="button"
                className="bg-secondary p-3 px-12 font-semibold rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-rows-4 gap-6 mt-16 bg-[#1e2739] p-6 z-40 relative">
              {/* Address */}
              <div className="grid grid-cols-[1fr_5fr] border-b-[1px] border-gray-500 pb-4">
                <div className="flex items-center justify-center">
                  <IoLocationOutline fontSize={30} className="text-secondary" />
                </div>
                <div className="flex flex-col text-center items-center justify-center">
                  <h4 className="text-xl">Address</h4>
                  <p className="text-gray-400">Dubai,United arab emirates</p>
                </div>
              </div>
              {/* Phone */}
              <div className="grid grid-cols-[1fr_5fr] border-b-[1px] border-gray-500">
                <div className="flex items-center justify-center">
                  <MdOutlinePhoneIphone
                    fontSize={30}
                    className="text-secondary"
                  />
                </div>
                <div className="flex flex-col text-center items-center justify-center">
                  <h4 className="text-xl">Phone</h4>
                  <p className="text-gray-400">9715555000</p>
                </div>
              </div>
              {/* Email */}
              <div className="grid grid-cols-[1fr_5fr] border-b-[1px] border-gray-500">
                <div className="flex items-center justify-center">
                  <MdOutlineMailOutline
                    fontSize={30}
                    className="text-secondary"
                  />
                </div>
                <div className="flex flex-col text-center items-center justify-center">
                  <h4 className="text-xl">Email</h4>
                  <p className="text-gray-400">info@svscoin.org</p>
                </div>
              </div>
              {/* Working Hours */}
              <div className="grid grid-cols-[1fr_5fr] ">
                <div className="flex items-center justify-center">
                  <ImAlarm fontSize={30} className="text-secondary" />
                </div>
                <div className="flex flex-col text-center items-center justify-center">
                  <h4 className="text-xl">Working Hours</h4>
                  <p className="text-gray-400">Mon to Sat 9:00am to 6:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
