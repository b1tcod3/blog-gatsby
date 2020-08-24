import { useSiteMetadata } from "../hooks/use-site-metadata"

import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { title} = useSiteMetadata()

  return (
    <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">

          <h1 className="flex items-center text-white no-underline">
            <img src={logo} className="h-10 mr-2"/>
            <span className="text-xl font-bold tracking-tight">
              {title}
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
        <Link
              className="block mt-4 text-white hover:h-lg no-underline md:inline-block md:mt-0 md:ml-6"
              to={`/search`}
              activeStyle={{fontWeight: 'bolder'}}
            >
              <svg className="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
    </svg>
            </Link>
          {[
            {
              route: `/t/internet`,
              title: `Internet`,
            },
            {
              route: `/t/coding`,
              title: `Coding`,
            },
            {
              route: `/contact`,
              title: `Contacto`,
            },
            {
              route: `/about`,
              title: `Sobre mi`,
            },
            
            
          ].map((link) => (
            <Link
              className="block mt-4 text-white hover:font-bold no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
              activeStyle={{fontWeight: 'bolder'}}
            >
              {link.title}
            </Link>
          ))}
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
