import React from "react";
import client from "@/lib/contentful";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "@/lib/contentful_renderer";

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "portfoliomarijnWillems",
  });

  const res2 = await client.getEntries({
    content_type: "portfoliomarijnWillemsProjects",
  });

  const items = res.items;
  const logoUrl = items[0]?.fields?.logo?.fields?.file?.url || "";
  const aboutText = items[0]?.fields?.aboutMeDisc || "";
  const imges = items[0]?.fields?.fotos[0]?.fields?.file?.url || "";
  const projects = res2.items;
  const codeImg = items[0]?.fields?.promrameerTalen;
  const framework = items[0]?.fields?.frameworks;
  const database = items[0]?.fields?.database;
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
}) => {
  if (!Array.isArray(items)) {
    return <div>No items found</div>;
  }
  //console.log(framework);
  console.log(items);
  return (
    <Layout logoUrl={logoUrl}>
      <main className="mt-20 p-10 text-text">
        <section>
          <div
            id="frontBox"
            className=" md:gap-0 gap-5 flex flex-col md:flex-row w-full md:shadow-2xl rounded-xl "
          >
            <div className=" shadow-xl md:shadow-none w-full md:w-1/2 bg-header p-5 md:rounded-tl-xl md:rounded-bl-xl rounded-bl-xl rounded-tl-xl ">
              <h2 className="text-left  text-4xl font-light mb-2">About me</h2>
              <div className="flex gap-10 flex-col md:flex-row">
                <img className="md:w-1/2" src={imges} alt="" />
                <div className="shadow-xl p-2">
                  {documentToReactComponents(aboutText, renderOptions)}
                </div>
              </div>
            </div>
            <div className="shadow-xl md:shadow-none p-5 bg-goodGreen md:w-1/2 md:rounded-br-xl md:rounded-tr-xl rounded-tr-xl rounded-br-xl">
              <h2 className=" md:text-left text-right text-4xl font-light mb-2">
                Project's
              </h2>
              <div className="flex flex-row  w-full  flex-wrap">
                {projects.slice(0, 4).map((project, index) => (
                  <div
                    className="  w-1/2 flex flex-col gap-1 items-center"
                    key={project.sys.id}
                  >
                    <a
                      className="   transition-opacity ease-in-out duration-300 md:hover:opacity-100 md:opacity-75 w-11/12 p-5 md:w-9/12 shadow-xl"
                      href=""
                    >
                      <img
                        className=" md:hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl"
                        src={project.fields.foto[0].fields.file.url}
                        alt=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mr-20 ml-20">
            <div
              id=" coding"
              className=" bg-another_color flex-wrap p-2 w-96 flex flex-col gap-2 rounded-xl mt-20 "
            >
              <div className=" text-center font-bold">
                Programeer talen die ik beheers
              </div>
              <div className="flex flex-row gap-2 justify-center">
                {codeImg.map((codeImg, index) => (
                  <a
                    key={codeImg.sys.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={codeImg.fields.description}
                  >
                    <img
                      className="w-20"
                      src={codeImg.fields.file.url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>

            <div
              id=" framework"
              className=" bg-another_color flex-wrap p-2 w-96 flex flex-col gap-2 rounded-xl mt-20 "
            >
              <div className=" text-center font-bold">
                Programeer talen die ik beheers
              </div>
              <div className="flex flex-row gap-2 justify-center">
                {framework.map((framework, index) => (
                  <a
                    key={framework.sys.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={framework.fields.description}
                  >
                    <img
                      className="w-20"
                      src={framework.fields.file.url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>

            <div
              id=" database"
              className=" bg-another_color flex-wrap p-2 w-96 flex flex-col gap-2 rounded-xl mt-20 "
            >
              <div className=" text-center font-bold">
                Programeer talen die ik beheers
              </div>
              <div className="flex flex-row gap-2 justify-center">
                {database.map((database, index) => (
                  <a
                    key={database.sys.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={database.fields.description}
                  >
                    <img
                      className="w-20"
                      src={database.fields.file.url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
