import React from "react";
import HeroImage from "../assets/HERO.JPG";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white font-bold">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Currently, I love to work on web application using technologies like
            React,Tailwind, Node JS and Mongodb.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 my-3 w-fit flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer max-sm:ml-28 "
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-80">
          <img className="rounded-lg " src={HeroImage} alt="my-picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
