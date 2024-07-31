import avatar from "./../../assets/images/avataaars.svg";
import { Helmet } from "react-helmet";

function StartPage() {
  return (
    <section className=" bg-[#1abc9c] text-white flex justify-center  items-center flex-col py-20 mt-[6.5rem]">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <img src={avatar} alt="avatar image" className=" w-[250px] mb-6" />
      <h1 className=" font-bold text-2xl md:text-4xl mb-5">START FRAMEWORK</h1>
      <div className="flex justify-between items-center w-[250px] mb-5">
        <div className=" w-[38%] h-[4px] bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className=" w-[38%] h-[4px] bg-white"></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}

export default StartPage;
