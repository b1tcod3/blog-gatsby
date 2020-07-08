import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Quote from "../components/elements/quote";

import keyboard from "../images/keyboard.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`chypherpunk`, `privacity`, `freedom`, `coding`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Keyboard"
          className="block w-1/3 mx-auto mb-8"
          src={keyboard}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hi! Welcome to my Site about Internet and Coding. For a free internet
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
