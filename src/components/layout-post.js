import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useSiteMetadata } from "../hooks/use-site-metadata"


function LayoutPost({children,fullWidth}) {

  const { description } = useSiteMetadata(); 

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900" >
      <Header />

      <main className={`flex-1 w-full px-4 py-8 mx-auto md:px-8 md:py-16 ${fullWidth ? "" : "max-w-4xl"}`}>
        
              <div className="container mx-auto flex flex-wrap py-6">
              {//  Posts Section 
              }
              <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                  {children}
                  
                  {//  Pagination
                  } 

              </section>

              {//  Sidebar Section
              }
              <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <p className="text-xl font-semibold pb-5">You are here:</p>
                      <p className="pb-2">
                        {description}
                      </p>
                      <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                          Get to know us
                      </a>
                  </div>

                  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                      <p className="text-xl font-semibold pb-5">Instagram</p>
                      <div className="grid grid-cols-3 gap-3">
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
                          <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
                      </div>
                      <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                          <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                      </a>
                  </div>

              </aside>

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
