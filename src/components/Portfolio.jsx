import React from "react";
import array from "../assets/array.png";
import node from "../assets/nodejs.jpg";
import react from "../assets/reactjs.png";
import reactsmooth from "../assets/reactsmooth.png";
import whether from "../assets/whether.jpg";
import responsive from "../assets/Responsive.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: array,
      href: "https://stackoverflow.com/questions/49413544/destructuring-array-of-objects-in-es6",
    },
    {
      id: 2,
      src: node,
      href: "https://medium.com/@dhwajgupta27/build-a-node-js-server-in-5-minutes-quick-and-easy-server-setup-6eb594e8b26",
    },
    {
      id: 3,
      src: react,
      href1:
        "https://github.com/gantlateja/Responsive-Travel-Tour-Website-Design.git",
    },
    {
      id: 4,
      src: reactsmooth,
    },
    {
      id: 5,
      src: whether,
    },
    {
      id: 6,
      src: responsive,
      href: "https://responsive-design-teja.netlify.app/",
      href1:
        "https://github.com/gantlateja/Responsive-Travel-Tour-Website-Design.git",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Portfolio
          </p>
          <p className="py-8">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href1 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button>
                  <a
                    href={href}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                </button>
                <button>
                  <a
                    href={href1}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
