import React, { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "@/lib/contentful_renderer";
const Modal = ({ isOpen, onClose, selectedProject }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed animate-fadeIn2 bg-black bg-opacity-50 inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0  opacity-50" onClick={onClose}></div>
      <div className="bg-header animate-fadeIn p-8 rounded-2xl shadow-2xl z-10 relative w-10/12 mx-4 transform">
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {selectedProject && (
          <div>
            <h2 className="md:text-5xl text-xl border-b-2 text-text font-light mb-2 md:mb-4">
              {selectedProject.fields.naam}
            </h2>
            <div className="flex md:flex-row flex-col gap-10">
              <img
                className="md:w-4/12"
                src={selectedProject.fields.foto[0].fields.file.url}
                alt=""
              />
              <div className="flex items-center md:flex-col md:gap-12 gap-5 md:w-1/6">
                <div className="w-12 flex flex-col gap-4 md:ml-10 md:mt-10 text-text text-lg items-center">
                  Github
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.fields.linkWebsite}
                    className="w-9 md:w-12 "
                  >
                    <img
                      className="hover:scale-105 transform transition-transform duration-300  hover:z-10"
                      src={selectedProject.fields.foto[1].fields.file.url}
                    />
                  </a>
                </div>
                <div className="flex-col items-center flex gap-5">
                  <div className="text-text text-xl  ml-10">What I've used</div>
                  <div className="flex md:ml-none ml-10  flex-wrap gap-2">
                    {selectedProject.fields.gebruikt2.map((img, index) => (
                      <a
                        key={img.sys.id}
                        className="hover:scale-105 transform transition-transform duration-300  hover:z-10"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={img.fields.description}
                      >
                        <img
                          className=" w-10 md:w-16"
                          src={img.fields.file.url}
                          alt=""
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 md:h-full h-20 overflow-auto ">
                {documentToReactComponents(
                  selectedProject.fields.projectDisc,
                  renderOptions
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
