import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import MailchimpForm from "./MailchimpForm.jsx";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Github from "./elements/github"
import images from "../data/image-type.json"



function LayoutPage({children,fullWidth,name , descriptionPage}) {

  const {githubUsername } = useSiteMetadata();
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900" >
      <Header />

      <main className={`flex-1 w-full px-4 py-8 mx-auto md:px-8 md:py-16 ${fullWidth ? "" : "max-w-4xl"}`}>
        
              <div className="container mx-auto flex flex-wrap py-6">
              {//  Posts Section 
              }
              <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                  <h1 
                  className="text-3xl font-sans font-thin">
                  Posts Sobre {name}
                  </h1>
                  
                  {children}
                  
                  {//  Pagination
                  } 

              </section>

              {//  Sidebar Section
              }


                  <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <img className="mx-auto" alt="image type" src={`/${images[name]}`} width="80px"/>
                      <p className="text-xl font-semibold pb-5">¿Qué es esto?</p>
                      <p className="pb-2">
                        {descriptionPage}
                      </p>
                      
                      <p className="pb-2"><MailchimpForm /></p>
                  </div>

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <Github github={githubUsername}/>
                  </div>

              </aside>

          </div>
      </main>

      <Footer />
    </div>
  );
}

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: false,
  name: PropTypes.node.isRequired,
  descriptionPage: PropTypes.node.isRequired,
};

export default LayoutPage;
