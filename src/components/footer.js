import { useSiteMetadata } from "../hooks/use-site-metadata"
import React from "react";

function Header () {
  
  const { author } = useSiteMetadata();

  return(
    <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Creado por {author}. Template de{` `}
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
            Iconos hechos por{` `}
            <a
              className="font-bold text-white no-underline"
              href="https://www.flaticon.com/authors/those-icons"
              target="_blank"
              rel="noopener noreferrer"
            > 
               Flaticon
            </a>
            {` `} and {` `}
            <a
              className="font-bold text-white no-underline"
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
            > 
               Icons8
            </a>
          </p>
        </nav>
      </footer>
    );
}

export default Header;
