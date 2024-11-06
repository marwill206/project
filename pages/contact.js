import React, { useState } from "react";
import client from "@/lib/contentful";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "@/lib/contentful_renderer";
import Modal from "@/components/modal";

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "portfoliomarijnWillems",
  });

  const res2 = await client.getEntries({
    content_type: "portfoliomarijnWillemsProjects",
  });

  const items = res.items;
  const logoUrl = items[0]?.fields?.logo?.fields?.file?.url;
  const socials = items[0]?.fields?.socials;
  const projects = res2.items;
  const mail = items[0]?.fields?.mail;
  const number = items[0]?.fields?.nummer;
  const GetIn = items[0]?.fields?.getInTouch;

  return {
    props: {
      logoUrl,
      socials,
      projects,
      items,
      mail,
      number,
      GetIn,
    },
  };
}

const Home = ({ logoUrl, socials, items, mail, number, GetIn }) => {
  return (
    <Layout logoUrl={logoUrl} socials={socials}>
      <main className="  pr-10 pl-10 p-5 bg-main_color text-text animate-fadeIn">
        <section className="md:mt-32 mt-10">
          <div className=" md:ml-72 mb-5 md:mb-5 rounded-xl mt-16 md:w-80 p-3 md:p-5 bg-another_color2 flex flex-col gap-2 font-light text-2xl md:text-3xl">
            socials
            <div className="flex flex-row justify-center flex-wrap gap-2 ">
              {socials.map((socials, index) => (
                <a
                  key={socials.sys.id}
                  className="relative bg-grey shadow-xl bg-header p-1 rounded-xl"
                  href={socials.fields.description}
                >
                  <img
                    className=" hover:scale-105 transform transition-transform duration-300  hover:z-10 md:w-12 w-10"
                    src={socials.fields.file.url}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>

          <form className="flex md:mr-20 gap-5 flex-col md:gap-0 mb-4 md:justify-end md:flex-row">
            <div className="md:w-96 md:mr-40 md:mt-10 rounded-xl p-4 h-64 bg-footer">
              <div className="text-text font-light text-3xl ">Get in touch</div>
              <div className="p-1 overflow-auto h-48">
                {" "}
                {documentToReactComponents(GetIn, renderOptions)}
              </div>
            </div>
            <div className="bg-another_color2 flex flex-col justify-between p-5 rounded-tl-xl rounded-bl-xl">
              <div className="mt-5">
                <div className="text-text text-3xl mb-5 font-light">
                  Contact info
                </div>
                <a href={`mailto:${mail}`}>
                  <div className="mb-2 hover:text-white transition-ease-in-out underline duration-300">
                    {mail}
                  </div>
                </a>
                <a href={`tel:+31${number}`}>
                  <div className="mb-2 hover:text-white underline transition-ease-in-out duration-300">
                    +31 {number}
                  </div>
                </a>
                <div className="text-text mt-4 text-2xl mb-2 font-light">
                  {" "}
                  Gevestigd in
                </div>
                <div>• {items[0].fields.stad}</div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=5s">
                  <div className="hover:text-white mt-3 ml-2 transition-ease-in-out underline duration-300 font-light rounded-xl text-lg md:text-xl">
                    CV
                  </div>
                </a>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-footer p-2 rounded-md w-20 text-center shadow-md hover:shadow-xl active:shadow-md transition-shadow duration-200 ease-in-out"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>

            <div className="bg-another_color shadow-xl w-full gap-4  p-5 md:w-4/12 h-96 items-center  flex flex-col z-10">
              <label htmlFor="email" className="flex  gap-2 flex-col">
                Email
                <input
                  id="email"
                  className="bg-header rounded-md md:w-80 p-1"
                  type="email"
                />
              </label>
              <label htmlFor="name" className="flex gap-2 flex-col">
                Name
                <input
                  id="name"
                  className="bg-header rounded-md md:w-80 p-1 overflow-auto whitespace-nowrap"
                  type="text"
                />
              </label>
              <label htmlFor="message" className="flex gap-2 flex-col">
                Message
                <textarea
                  id="message"
                  className="bg-header rounded-lg md:w-80 h-40 p-1"
                  type="textarea"
                />
              </label>
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
