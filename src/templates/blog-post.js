import React from "react";

import LayoutPost from "../components/layout-post";
import Article from "../components/elements/article";
import SEO from "../components/seo";
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import '../css/markdown.css';

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
    
  return (
    
    <LayoutPost>
      <SEO
        keywords={props.data.markdownRemark.frontmatter.tags}
        title="Coding Post"
      />
      {}
      <Article key={props.data.markdownRemark.id} post={props.data.markdownRemark} body={props.data.markdownRemark}/>   
    </LayoutPost>
  )
}

BlogPost.propTypes = {
 data: PropTypes.required,
}

export default BlogPost