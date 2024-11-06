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

  return {
    props: {
      logoUrl,
      socials,
      projects,
    },
  };
}
const Home = ({ logoUrl, socials, projects }) => {
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
      <main className=" bg-main_color pr-10 pl-10 text-text animate-fadeIn">
        <section className="flex mt-20 pt-10 pb-10 bg-another_color h-full p-5 flex-row flex-wrap gap-5 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.sys.id}
              className="flex gap-5 rounded-xl md:flex-row flex-col md:w-5/12 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full   bg-goodGreen"
            >
              <button
                onClick={() => modalOpen(project)}
                className="md:w-1/2 p-4 flex items-center "
              >
                <img
                  className="shadow-xl w-96 transform transition-transform duration-500 hover:scale-105  rounded-lg "
                  src={project.fields.foto[0].fields.file.url}
                  alt=""
                />
              </button>
              <div className="flex flex-col md:w-1/2 bg-header p-4 md:rounded-tr-xl rounded-br-xl ">
                <h2 className=" max-w-xs overflow-hidden text-ellipsis whitespace-nowrap md:h-1/4  p-2 md:text-4xl text-2xl font-light mb-2 text-center">
                  {project.fields.naam}
                </h2>
                <div className="h-1/2 flex flex-col gap-5 ">
                  <h4 className="text-lg ">What I've used</h4>
                  <div className="flex flex-row h-1/2 flex-wrap gap-3">
                    {project.fields.gebruikt2.map((img, index) => (
                      <a
                        key={img.sys.id}
                        className="hover:scale-105 transform transition-transform duration-300  hover:z-10"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={img.fields.description}
                      >
                        <img
                          className=" w-12 md:w-14"
                          src={img.fields.file.url}
                          alt=""
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
