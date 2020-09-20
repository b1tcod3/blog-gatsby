import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import images from "../data/image-type.json"
import Sidebar from "./sidebar"

function LayoutPage({children,fullWidth,name , descriptionPage}) {

  const {githubUsername } = useSiteMetadata();
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900" >
      <Header />

      <main className={`flex-1 w-full px-4 py-8 mx-auto md:px-8 md:py-16 ${fullWidth ? "" : "max-w-5xl"}`}>
        
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


              <Sidebar 
              githubUsername={githubUsername} image={`/${images[name]}`}
              heading="¿Qué es esto?" description={descriptionPage}
              />

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
