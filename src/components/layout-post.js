import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import code from "../images/code.png";
import Sidebar from "./sidebar"

function LayoutPost({children,fullWidth}) {

  const { description, githubUsername } = useSiteMetadata(); 

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900" >
      <Header />

      <main className={`flex-1 w-full px-2 py-8 mx-auto md:px-3 md:py-16 ${fullWidth ? "" : "max-w-5xl"}`}>
        
              <div className="container mx-auto flex flex-wrap py-6">
              {//  Posts Section 
              }
              <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                  {children}
              </section>

              {//  Sidebar Section
              }

              <Sidebar 
              githubUsername={githubUsername} image={code}
              heading="Aquí estas:" description={description}
              />


          </div>
      </main>

      <Footer />
    </div>
  );
}

LayoutPost.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: false,
  name: PropTypes.node.isRequired,
  descriptionPage: PropTypes.node.isRequired,
};

export default LayoutPost;
