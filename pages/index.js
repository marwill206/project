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
  const aboutText = items[0]?.fields?.aboutMeDisc;
  const imges = items[0]?.fields?.fotos;
  const projects = res2.items;
  const codeImg = items[0]?.fields?.promrameerTalen;
  const framework = items[0]?.fields?.frameworks;
  const database = items[0]?.fields?.database;
  const opleidingText = items[0]?.fields?.opleiding;
  const socials = items[0]?.fields?.socials;
  return {
    props: {
      items,
      logoUrl,
      aboutText,
      imges,
      projects,
      codeImg,
      framework,
      database,
      opleidingText,
      socials,
    },
  };
}

const Home = ({
  items,
  logoUrl,
  aboutText,
  imges,
  projects,
  codeImg,
  framework,
  database,
  opleidingText,
  socials,
}) => {
  if (!Array.isArray(items)) {
    return <div>No items found</div>;
  }
  //console.log(framework);
  console.log(imges);

  const [isModelOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const modalOpen = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout logoUrl={logoUrl} socials={socials}>
      <main className=" bg-main_color p-10 text-text animate-fadeIn">
        <section className="mt-20">
          <div
            id="frontBox"
            className=" md:gap-0 gap-5 flex flex-col md:flex-row w-full md:shadow-2xl rounded-xl "
          >
            <div className=" shadow-xl md:shadow-none w-full md:w-1/2 bg-header p-5 md:rounded-tl-xl md:rounded-bl-xl rounded-bl-xl rounded-tl-xl ">
              <h2 className="text-left  text-4xl font-light mb-2">About me</h2>
              <div className="flex gap-10 flex-col md:flex-row">
                <img
                  className="md:w-1/2"
                  src={imges[0].fields.file.url}
                  alt=""
                />
                <div className="shadow-xl p-2">
                  {documentToReactComponents(aboutText, renderOptions)}
                </div>
              </div>
            </div>
            <div className="shadow-xl md:shadow-none md:mt-0 mt-5 p-5 bg-goodGreen md:w-1/2 md:rounded-br-xl md:rounded-tr-xl rounded-tr-xl rounded-br-xl">
              <h2 className=" md:text-left text-right text-4xl font-light mb-2">
                Project's
              </h2>
              <div className="flex flex-row  w-full  flex-wrap">
                {projects.slice(0, 4).map((project, index) => (
                  <div
                    className="  w-1/2 flex flex-col gap-1 items-center"
                    key={project.sys.id}
                  >
                    <button
                      onClick={() => modalOpen(project)}
                      className="transition-opacity ease-in-out duration-300 md:hover:opacity-100 md:opacity-75 w-11/12 p-5 md:w-9/12 shadow-xl"
                      href=""
                    >
                      <img
                        className=" md:hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl"
                        src={project.fields.foto[0].fields.file.url}
                        alt=""
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex md:flex-row flex-col justify-between md:mr-20 md:ml-20">
            <div
              id=" coding"
              className=" bg-another_color flex-wrap p-2 md:min-w-96 flex flex-col gap-2 rounded-xl mt-10 md:mt-16 "
            >
              <div className=" text-center font-bold">
                Languages I've mastered
              </div>
              <div className="flex flex-row flex-wrap gap-2 justify-center">
                {codeImg.map((codeImg, index) => (
                  <a
                    className="hover:scale-105 transform transition-transform duration-300  hover:z-10"
                    key={codeImg.sys.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={codeImg.fields.description}
                  >
                    <img
                      className="md:w-20 w-16"
                      src={codeImg.fields.file.url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>

            <div
              id=" framework"
              className=" bg-another_color flex-wrap p-2 md:min-w-96 flex flex-col gap-2 rounded-xl mt-10 md:mt-16 "
            >
              <div className=" text-center font-bold">
                Frameworks I've mastered
              </div>
              <div className="flex flex-row gap-2 justify-center">
                {framework.map((framework, index) => (
                  <a
                    className="hover:scale-105 transform transition-transform duration-300  hover:z-10"
                    key={framework.sys.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={framework.fields.description}
                  >
                    <img
                      className="md:w-20 w-16"
                      src={framework.fields.file.url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>

            <div
              id=" database"
              className=" bg-another_color flex-wrap p-2 md:w-96 flex flex-col gap-2 rounded-xl mt-10 md:mt-16 "
            >
              <div className=" text-center font-bold">
                Database I've mastered
              </div>
              <div className="flex flex-row gap-2 justify-center">
                {database.map((database, index) => (
                  <a
                    className="hover:scale-105 transform transition-transform duration-300  hover:z-10"
                    key={database.sys.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={database.fields.description}
                  >
                    <img
                      className="md:w-20 w-16"
                      src={database.fields.file.url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="bg-another_color2 mt-20 shadow-xl  p-7
          md:rounded-xl rounded-bl-xl rounded-tl-xl
          "
          >
            <h2 className="text-left text-4xl font-light mb-3">Education</h2>
            <div className="flex md:flex-row flex-col gap-4 justify-center">
              <div className=" md:text-center md:w-1/2 md:h-full h-44 overflow-auto">
                {documentToReactComponents(opleidingText, renderOptions)}
              </div>
              <img className="md:w-1/2" src={imges[1].fields.file.url} alt="" />
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={isModelOpen}
        onClose={closeModel}
        selectedProject={selectedProject}
      ></Modal>
    </Layout>
  );
};

export default Home;
