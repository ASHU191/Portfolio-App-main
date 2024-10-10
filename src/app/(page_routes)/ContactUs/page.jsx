import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full md:h-[90vh] my-[30px]">
      <div className="w-full h-full px-[20px] md:px-[50px] flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center">
        <div className="w-full md:w-[40%] title p-4 md:p-0 flex flex-col  gap-4 justify-center items-start overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-[--text-color]">
            Get in touch ✨
          </h1>
          
          <span className="w-full border-t border-[#999]"></span>

          <p className="text-xl text-[--text-color]">
            If you are looking for a Web Developer with skills and experience,
            please feel free to get in touch with me..
          </p>

          <div className="contact">
            <h2 className="text-[--primary-color] font-bold">
              WANT TO CALL ME?
            </h2>
            <span className="text-xl text-[--text-color] break-words">  
              <a href="tel:03128842954">+92-3010209887 🇵🇰</a>

            </span>
          </div>

          <div className="email">
            <h2 className="text-[--primary-color] font-bold">
              JUST WANT TO EMAIL ME?
            </h2>
            <span className="text-xl text-[--text-color] break-all">
              <a href = "mailto: arsalanaftab191@gmail.com" target="_blank">arsalanaftab191@gmail.com</a>
            </span>
          </div>
        </div>
        <div className="Contact-Card w-full md:w-[60%] shadow-md flex flex-col gap-4 rounded-[25px] bg-[--card-bg] p-6 md:p-8 relative overflow-hidden">
          <div className="contact-form w-full">
            <form action="#" className="w-full flex flex-col gap-5">
              <div className="name">
                <input
                  className="w-full outline-none bg-[#4d555b] text-[--text-color] p-3 rounded-lg"
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                />
              </div>

              <div className="email">
                <input
                  className="w-full outline-none bg-[#4d555b] text-[--text-color] p-3 rounded-lg"
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                />
              </div>

              <div className="message">
                <textarea
                  name="message"
                  className="w-full outline-none text-[--text-color] bg-[#4d555b] p-3 rounded-lg"
                  placeholder="Type your message"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="submit">
                <button
                  className="w-full p-4 rounded-lg bg-indigo-500 text-white"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
