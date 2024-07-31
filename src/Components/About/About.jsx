import { Helmet } from "react-helmet";

function About() {
  return (
    <section className=" bg-[#1abc9c] text-white flex justify-center  items-center flex-col p-12 md:p-48 mt-[6.5rem]">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 className=" font-bold text-[29px] md:text-4xl mb-5">
        ABOUT COMPONENT
      </h1>
      <div className="flex justify-between items-center w-[250px] mb-5">
        <div className=" w-[38%] h-[4px] bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className=" w-[38%] h-[4px] bg-white"></div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </section>
  );
}

export default About;
