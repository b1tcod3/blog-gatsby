import React from 'react'
import PropTypes from 'prop-types'
import MailchimpForm from "./MailchimpForm.jsx";
import Github from "./elements/github";
import { FaList,FaTag, FaGlobe } from 'react-icons/fa';
import LatestPost from "./latest-post"
import CloudTags from "./cloud-tags"
import wikileaks from "../images/wikileaks.svg";
import bitcoin from "../images/bitcoin.svg";
import github from "../images/github.svg";

const Sidebar = ({githubUsername, image , heading , description }) => (

<aside className="w-full md:w-1/3 flex flex-col items-center px-3">
    
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <img className="mx-auto" alt="code" src={image} width="80px"/>
        <p className="text-xl font-semibold pb-5">{heading}</p>
        <p className="pb-2">
          {description}
        </p>
        
        <p className="pb-2"><MailchimpForm /></p>
    </div>

    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <Github github={githubUsername}/>
    </div>

    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <h3 className="text-xl font-semibold"><FaList
style={{ margin: '0 5px' , display: 'inline'}}
/>{` `} Latest Posts</h3>
        <LatestPost />
    </div>
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <h3 className="text-xl font-semibold"><FaTag
style={{ margin: '0 5px' , display: 'inline'}}
/>{` `} Tags</h3>
        <CloudTags />
    </div>
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <h5 className="text-sm font-semibold"><FaGlobe
style={{ margin: '0 5px' , display: 'inline'}}
/>{` `} Sitios Recomendados</h5>
        <div className="grid grid-rows-2 grid-flow-col bg-gray-200">
          <div className="row-span-2 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <a href="https://wikileaks.org">
                <img src={wikileaks} title="Wikileaks"/>
              </a>
          </div>

          <div className="row-span-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <a href="https://bitcoin.org/es/">
                <img src={bitcoin} title="Bitcoin.org"/>
              </a>
          </div>
          <div className="row-span-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <a href="https://github.com/">
                <img src={github} title="github"/>
              </a>
          </div>
        </div>
    </div>
</aside>

)

Sidebar.propTypes = {
 githubUsername: PropTypes.string,
 image: PropTypes.string,
 heading: PropTypes.string,
 description: PropTypes.string,
 type: PropTypes.string,
}

export default Sidebar