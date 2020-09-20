import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faReddit, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share';



function Share ({ socialConfig, tags }){
return (
    <div className="post-social inline-flex">
      <FacebookShareButton url={socialConfig.config.url} resetButtonStyle={false}
      className="facebook btn-social hover:bg-gray-400" >
        <span className="icon">
          <FontAwesomeIcon icon={faFacebook} />
        </span>
        {` `}
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton resetButtonStyle={false} url={socialConfig.config.url}
      className="twitter btn-social hover:bg-gray-400" 
      title={socialConfig.config.title} via={socialConfig.twitter.split('@').join('')} hashtags={tags} >
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        {` `}
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton url={socialConfig.config.url} className="linkedin btn-social hover:bg-gray-400" resetButtonStyle={false}
      title={socialConfig.config.title} >
        <span className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
        {` `}
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton url={socialConfig.config.url} className="reddit btn-social hover:bg-gray-400" resetButtonStyle={false}
      title={socialConfig.config.title} >
        <span className="icon">
          <FontAwesomeIcon icon={faReddit} />
        </span>
        {` `}
        <span className="text">Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton url={socialConfig.config.url} className="whatsapp btn-social hover:bg-gray-400" resetButtonStyle={false}
      title={socialConfig.config.title} >
        <span className="icon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
        {` `}
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </div>
);
}

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;

