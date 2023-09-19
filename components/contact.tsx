import React from "react";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex items-center bg-gradient-to-r from-base-100 to-base-100 xl:h-screen ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-sm mx-auto ">
              <div className="p-6 mb-6 text-center border rounded-md shadow border-base-200 bg-base-200">
                <form action="">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">
                      For support and partnerships, reach out!{" "}
                    </h2>
                  </div>

                  <input
                    className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-base-300 border-base-300"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-base-300 border-base-300"
                    type="email"
                    placeholder="abc@gmail.com"
                    required
                  />
                  <textarea
                    rows={4}
                    placeholder="Write a message..."
                    required
                    className="block w-full px-4 mb-4 leading-tight border rounded py-7 bg-base-300 "
                  ></textarea>
                  <button className="w-full py-4 text-white text-sm font-bold leading-normal transition-all duration-300 rounded-md bg-primary hover:bg-primary-focus">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="max-w-2xl px-4 mb-16 lg:mb-0 lg:w-1/2 lg:mr-0 lg:ml-auto">
            <h2 className="mb-6 text-3xl font-bold">
              Get In <span className="text-secondary">Touch</span>
            </h2>

            <div className="flex mb-6">
              <FaTwitter className="text-primary w-7 h-7 " />
              <div className="max-w-xl ml-4 text-lg font-semibold tracking-wide">
                @turung
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-primary w-7 h-7 bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
              </svg>
              <div className="max-w-xl ml-4 text-lg font-semibold tracking-wide ">
                info@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
