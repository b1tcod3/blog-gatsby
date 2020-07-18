import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import MailchimpForm from "./MailchimpForm.jsx";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Github from "./elements/github";

function LayoutPage({children,fullWidth,name , descriptionPage}) {

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
                  Post about {name}
                  </h1>
                  
                  {children}
                  
                  {//  Pagination
                  } 

              </section>

              {//  Sidebar Section
              }
              <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <p className="text-xl font-semibold pb-5">Why {name}?</p>
                      <p className="pb-2">
                        {descriptionPage}
                      </p>
                      <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                          Get to know us
                      </a>
                  </div>

                  <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <p className="text-xl font-semibold pb-5">You are here:</p>
                      <p className="pb-2">
                        {description}
                      </p>
                      
                      <p className="pb-2"><MailchimpForm /></p>
                  </div>

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <Github github={githubUsername}/>
                  </div>

              </aside>

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
