import React from "react";

import LayoutPost from "../components/layout-post";
import Article from "../components/elements/article";
import SEO from "../components/seo";
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import '../css/markdown.css';
import '../css/social.css';
import ViewCounter from '../components/elements/view-counter';
import { DiscussionEmbed } from "disqus-react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Share from '../components/Share.jsx';

export const query = graphql`
	  query($slug: String!) {
	      markdownRemark(fields: { slug: { eq: $slug } }) {
	            frontmatter {        
	            	title        
	            	date(formatString: "DD MMMM, YYYY")
                    categories
                featured {          
                  childImageSharp {            
                    fluid(maxWidth: 750) {              
                      ...GatsbyImageSharpFluid            
                    }          
                  }
                }
                tags
	            }      
	            timeToRead      
	            html
                id
                fields {                
                    slug              
                }   
	        }  
	    }
	  `

const BlogPost = props => { 
  
  const title = props.data.markdownRemark.frontmatter.title
  const slug = props.data.markdownRemark.fields.slug
  const disqusConfig = {
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: slug, title },
}
 const { siteUrl, twitter } = useSiteMetadata();
    
  return (
    
    <LayoutPost>
      <SEO
        keywords={props.data.markdownRemark.frontmatter.tags}
        title={title}
      />
      {}
      <Article 
      key={props.data.markdownRemark.id} post={props.data.markdownRemark} 
      body={props.data.markdownRemark}
      footer = {<ViewCounter id={props.data.markdownRemark.fields.slug}/>}
       />

      <Share
        socialConfig={{
          twitter,
          config: {
            url: `${siteUrl}${props.location.pathname}`,
            title,
          },
        }}
        tags={props.data.markdownRemark.frontmatter.tags}
      /> 
       
      <div className="flex flex-col shadow my-4" style={{ width:'100%' }} >
        <DiscussionEmbed {...disqusConfig} /> 
      </div>
      
    </LayoutPost>
  )
}

BlogPost.propTypes = {
 data: PropTypes.required,
 location: PropTypes.required,
}

export default BlogPost