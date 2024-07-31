import { useState } from "react";
import { Helmet } from "react-helmet";
import img1 from "./../../assets/images/poert1.png";
import img2 from "./../../assets/images/port2.png";
import img3 from "./../../assets/images/port3.png";

function Portfolio() {
  const [image, setImage] = useState(null);

  //this correct ?
  function openModal(event) {
    setImage(event.currentTarget.childNodes[0].src);
  }

  return (
    <main className=" flex justify-center  items-center flex-col p-5 mt-[6.5rem]">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <h1 className="text-[#2c3e50] font-bold text-[28px] md:text-4xl mb-5">
        PORTFOLIO COMPONENT
      </h1>
      <div className="flex justify-between items-center w-[250px] mb-5">
        <div className=" w-[38%] h-[4px] bg-[#2c3e50]"></div>
        <i className="fa-solid fa-star text-[#2c3e50]"></i>
        <div className=" w-[38%] h-[4px] bg-[#2c3e50]"></div>
      </div>
      {/* images container  */}
      <section className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  items-start">
        <div className=" relative cursor-pointer " onClick={openModal}>
          <img src={img1} alt="image one" className=" w-full rounded-md" />
          <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative cursor-pointer " onClick={openModal}>
          <img src={img2} alt="image one" className=" w-full rounded-md" />
          <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative cursor-pointer " onClick={openModal}>
          <img src={img3} alt="image one" className=" w-full rounded-md" />
          <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative cursor-pointer " onClick={openModal}>
          <img src={img1} alt="image one" className=" w-full rounded-md" />
          <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative cursor-pointer " onClick={openModal}>
          <img src={img2} alt="image one" className=" w-full rounded-md" />
          <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative cursor-pointer " onClick={openModal}>
          <img src={img3} alt="image one" className=" w-full rounded-md" />
          <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </section>

      {/* overlay */}
      <div
        className={`modal fixed top-0 left-0  bottom-0 right-0 bg-[#0d6df440] z-[999]  justify-center items-center ${
          image ? "flex" : "hidden"
        }`}
        onClick={(event) => {
          if (event.target == event.currentTarget) setImage(null);
        }}
      >
        <img src={image} alt="opened image" className="max-w-[500px]" />
      </div>
    </main>
  );
}

export default Portfolio;
