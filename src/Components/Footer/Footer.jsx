function Footer() {
  return (
    <footer className=" bg-[#2c3e50] ">
      <div className="text-white p-24 flex justify-evenly align-center flex-col md:flex-row gap-24">
        <div className=" text-center md:w-1/3">
          <h3 className=" font-semibold  text-xl md:text-3xl mb-3">LOCATION</h3>
          <p className="mb-3">2215 John Daniel Drive</p>
          <p className="">Clark, MO 65243</p>
        </div>
        <div className="text-center md:w-1/3">
          <h3 className="font-semibold  text-xl md:text-3xl mb-3">
            AROUND THE WEB
          </h3>
          <div className="icons">
            <i className="fa-brands fa-facebook mx-1 icon border p-3 rounded-full"></i>
            <i className="fa-brands fa-twitter mx-1 icon border p-3 rounded-full"></i>
            <i className="fa-brands fa-linkedin-in mx-1 icon border p-3 rounded-full"></i>
            <i className="fa-solid fa-globe mx-1 icon border p-3 rounded-full"></i>
          </div>
        </div>

        <div className="text-center md:w-1/3">
          <h3 className="font-semibold  text-xl md:text-3xl mb-3">
            ABOUT FREELANCER
          </h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route.
          </p>
        </div>
      </div>
      <p className="bg-[#1a252f] text-center p-5 text-white">Copyright © Your Website 2021</p>
    </footer>
  );
}

export default Footer;
