import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import privacy from "../images/privacy.svg";

function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`internet`, `coding`, `libertad`, `cypherpunk`,`sancocho`,`digital`,`política`,`privacidad`]}
        title="Política de privacidad"
      />

      <section >
        <img
          alt="Privacy"
          className="block w-1/3 mx-auto mb-8 text-center"
          src={privacy}
        />
        <h3 className="text-3xl my-3">Política de privacidad</h3>

        <p >Última actualización: <span className="italic text-gray-500">28 agosto de 2020</span> </p>
                
        <p className="text-justify">
            Nosotros operamos en <a className="underline text-blue-500" href="https://www.sancochodigital.site">https://www.sancochodigital.site</a>  . Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de la información personal que recibimos de los usuarios del sitio.
        </p>
        <p className="text-justify">
          Usamos su información personal solo para proporcionar y mejorar el sitio. Al utilizar el Sitio, acepta la recopilación y el uso de información de acuerdo con esta política.
        </p>

        <h3 className="text-xl my-3">Recopilación y uso de información</h3>

        <p className="text-justify">
        Mientras utiliza nuestro Sitio, es posible que le pidamos que nos proporcione cierta información de identificación personal que pueda usarse para contactarlo o identificarlo. La información de identificación personal puede incluir, pero no se limita a su nombre (&quotInformación personal&quot) .
        </p>

        <h3 className="text-xl my-3">Dato de registro</h3>

<p className="text-justify">Como muchos sitios, recopilamos información que su navegador envía cada vez que visita nuestro Sitio.</p>

<p className="text-justify"> Estos Datos de registro pueden incluir información como la dirección de Protocolo de Internet (&quotIP&quot) de su computadora, el tipo de navegador, la versión del navegador, las páginas de nuestro Sitio que visita, la hora y fecha de su visita, el tiempo que pasó en esas páginas y otros Estadísticas.
</p>
<p className="text-justify">
Además, podemos utilizar servicios de terceros como Google Analytics que recopilan, controlan y analizan esto.
</p>

<h3 className="text-xl my-3">Cookies</h3>

<p className="text-justify">
Las cookies son archivos con una pequeña cantidad de datos, que pueden incluir un identificador único anónimo. Las cookies se envían a su navegador desde un sitio web y se almacenan en el disco duro de su computadora.
</p>

<p className="text-justify">
Como muchos sitios, utilizamos &quotcookies&quot para recopilar información. Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se envía una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro sitio.
</p>


<h3 className="text-xl my-3">Seguridad</h3>
<p className="text-justify">
La seguridad de su información personal es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.
</p>
<h3 className="text-xl my-3">Cambios a esta política de privacidad</h3>
<p className="text-justify">
Esta Política de privacidad entra en vigencia a partir de (agregar fecha) y permanecerá vigente excepto con respecto a cualquier cambio en sus disposiciones en el futuro, que entrará en vigencia inmediatamente después de su publicación en esta página.
</p>
<p className="text-justify">
Nos reservamos el derecho de actualizar o cambiar nuestra Política de privacidad en cualquier momento y debe consultar esta Política de privacidad periódicamente. Su uso continuado del Servicio después de que publiquemos cualquier modificación a la Política de privacidad en esta página constituirá su reconocimiento de las modificaciones y su consentimiento para cumplir y estar sujeto a la Política de privacidad modificada.
</p>
<p className="text-justify">
Si realizamos cambios sustanciales en esta Política de privacidad, se lo notificaremos a través de la dirección de correo electrónico que nos proporcionó o colocando un aviso destacado en nuestro sitio web.
</p>
<h3 className="text-xl my-3">Contáctenos</h3>
<p className="text-justify">
Si tiene alguna pregunta sobre esta Política de privacidad, comuníquese con nosotros.
</p>
      </section>
    </Layout>
  );
}

export default PrivacyPolicyPage;
