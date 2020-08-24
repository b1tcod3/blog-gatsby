import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import chaos from "../images/caos.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
           <p>Hola, Soy creyente del caos, pequeños cambios pueden afectar significativamente el mundo. Espero mi aporte contribuya a un cambio necesario en la era digital</p>
           <p>I think we are living in times of digital revolution but of great inequality in the distribution of knowledge</p>
          </blockquote>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={chaos} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
