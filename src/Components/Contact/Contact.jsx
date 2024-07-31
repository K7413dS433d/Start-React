import { Helmet } from "react-helmet";

function Contact() {
  return (
    <main className=" flex justify-center  items-center flex-col p-5 mt-[6.5rem]">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <h1 className="text-[#2c3e50] font-bold text-[28px] md:text-4xl mb-5">
        CONTACT SECTION
      </h1>
      <div className="flex justify-between items-center w-[250px] mb-12">
        <div className=" w-[38%] h-[4px] bg-[#2c3e50]"></div>
        <i className="fa-solid fa-star text-[#2c3e50]"></i>
        <div className=" w-[38%] h-[4px] bg-[#2c3e50]"></div>
      </div>
      <section className=" container  flex justify-center p-5 md:p-10">
        <form className="w-full md:w-7/12 mx-auto ">
          <div className=" relative z-0 w-full mb-12 group">
            <input
              type="text"
              name="User Name"
              id="User Name"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="User Name"
              className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Names
            </label>
          </div>
          <div className="relative z-0 w-full mb-12 group">
            <input
              type="number"
              name="User Age"
              id="User Age"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="User Age"
              className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Age
            </label>
          </div>
          <div className="relative z-0 w-full mb-12 group">
            <input
              type="email"
              name="User Email"
              id="User Email"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="User Email"
              className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-12 group">
            <input
              type="password"
              name="User Password"
              id="User Password"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="User Password"
              className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Password
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-[#1abc9c] hover:bg-[#227b69] focus:ring-4 focus:outline-none   transition-all duration-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
