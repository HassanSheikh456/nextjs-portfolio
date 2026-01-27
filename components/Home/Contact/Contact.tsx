import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg-w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content  */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with <br /> me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let&apos;s discuss how I can help you{" "}
            <br /> to achieve your goals.
          </p>
          {/* Info */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 ">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400 ">+92 3020631118</p>
            </div>
            <div className="flex items-center space-x-3 ">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400 ">
                Hassan.nadeem.4012@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 ">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400 ">
                Fasialabad, Pakistan
              </p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-3">
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center 
            cursor-pointer justify-center hover:bg-blue-900 transition-all duration-300"
            >
              <FaFacebook className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center 
            cursor-pointer justify-center hover:bg-red-600 transition-all duration-300"
            >
              <FaYoutube className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center 
            cursor-pointer justify-center hover:bg-[#0077B5] transition-all duration-300"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center 
            cursor-pointer justify-center hover:bg-sky-400 transition-all duration-300"
            >
              <FaTwitter className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md 
            w-full placeholder:text-white/70 "
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md 
            w-full placeholder:text-white/70 mt-6"
          />
          <input
            type="text"
            placeholder="Mobile Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md 
            w-full placeholder:text-white/70 mt-6"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md 
        w-full placeholder:text-white/70 mt-6 h-40"
          ></textarea>
          <button className="mt-8 px-12 bg-blue-950 hover:bg-blue-900 py-4 transition-all duration-300 cursor-pointer text-white rounded-full">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
