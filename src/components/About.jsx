import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-b-gray-500 ">
            About
          </p>
        </div>
        <p
          className="text-lg
         mt-2 text-gray-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          expedita optio architecto, asperiores quos aliquam vel, suscipit
          deleniti, maiores dolore velit inventore rerum debitis. Aperiam unde
          accusamus culpa iste quidem consequuntur veritatis accusantium,
          dignissimos amet nesciunt vitae perspiciatis! Natus aspernatur
          voluptas nesciunt architecto sed quia voluptatem veniam autem officiis
          reiciendis.
        </p>

        <br />

        <p className="text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          officiis consequatur necessitatibus tempore itaque quam et facere
          quaerat, nihil asperiores, at perspiciatis debitis impedit laborum.
          Optio, minus excepturi. Est inventore quibusdam exercitationem. Ipsa
          animi repudiandae, ea dignissimos reprehenderit in sunt laboriosam,
          perspiciatis quas explicabo vitae nemo ex error natus corporis?
        </p>
      </div>
    </div>
  );
};

export default About;
