import { useSiteMetadata } from "../hooks/use-site-metadata"
import React from "react";

function Header () {
  
  const { github } = useSiteMetadata();

  return(
    <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Template by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taylor Bryant
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Icons made by{` `}
            <a
              className="font-bold text-white no-underline"
              href="https://www.flaticon.com/authors/those-icons"
              target="_blank"
              rel="noopener noreferrer"
            > 
               Those Icons 
            </a>
            {` `}from  {` `}   
            <a
            className="font-bold text-white no-underline"
             href="https://www.flaticon.com"
             title="Flaticon"
             target="_blank"
             rel="noopener noreferrer"
              > 
               www.flaticon.com</a>
          </p>
        </nav>
      </footer>
    );
}

export default Header;
