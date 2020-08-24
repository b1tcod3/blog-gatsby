import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Quote from "../components/elements/quote";


import logo from "../images/logo.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`internet`, `coding`, `libertad`, `cypherpunk`,`sancocho`,`digital`]}
        title="Bienvenido"
      />

      <section className="text-center">
        <img
          alt="Keyboard"
          className="block w-1/3 mx-auto mb-8"
          src={logo}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-gray-400">
          Saludos! Bienvenido a mi sitio sobre coding e internet. Algo de conciencia social y activismo virtual
        </h2>

        <p className="leading-loose">
          <Quote
            author="Edward Snowden"
            quote="I can't in good conscience allow the U.S. government to destroy privacy, internet freedom and basic liberties for people around the world with this massive surveillance machine they're secretly building."
          />
        </p>

      </section>
    </Layout>
  );
}

export default IndexPage;
