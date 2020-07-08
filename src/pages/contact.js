import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FormContact from "../components/elements/form-contact";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`contact`]}
        title="Contact"
      />
      <section>
        <FormContact/>
      </section>
    </Layout>
  );
}

export default ContactPage;
