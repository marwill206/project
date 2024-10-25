import React from "react";

const Footer = ({ socials }) => {
  return (
    <div className="text-text w-full bg-footer flex flex-row md:justify-between p-3 items-center">
      <div className="text-ms">©2024 || Marijn Willems</div>
      <div className="flex flex-row items-center gap-16">
        {" "}
        <a
          className="hover:text-white transition-ease-in-out underline duration-300 rounded-xl text-lg md:text-xl "
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=5s"
        >
          CV
        </a>
        <div className="text-center flex flex-col gap-2 text-lg ">
          Socials
          <div className="flex flex-row flex-wrap gap-2 ">
            {socials.map((socials, index) => (
              <a
                key={socials.sys.id}
                className="relative bg-grey shadow-xl p-1 rounded-xl"
                href={socials.fields.description}
              >
                <img
                  className=" hover:scale-105 transform transition-transform duration-300  hover:z-10 md:w-7 w-7"
                  src={socials.fields.file.url}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
