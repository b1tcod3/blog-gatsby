import React from "react";
import PropTypes from "prop-types";

import LayoutPage from "../components/layout-page";
import Article from "../components/elements/article"
import SEO from "../components/seo";
import { graphql , Link } from "gatsby"
import { FaArrowRight } from 'react-icons/fa';

const CodingPost = ({
  data
}) => {

  const descriptionPage=`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Maecenas mattis est eu odio sagittis tristique. 
    Vestibulum ut finibus leo. In hac habitasse platea dictumst.
  `;
    
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Article key={edge.node.id} post={edge.node} body={edge.node.excerpt}
      footer={
        <Link to={`/b/${edge.node.fields.slug}/`} className="md:w-1/2 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">                  
          Continue Reading
          <FaArrowRight
          style={{ margin: '0 5px' , display: 'inline'}}
          />               
        </Link>
      }
      />)
  return (
    <LayoutPage name="Coding" descriptionPage={descriptionPage}>
      <SEO
        keywords={[`coding`, `blog`, `react`, `tailwindcss`]}
        title="Coding Post"
      />
      {Posts}   
    </LayoutPage>
  );
}

CodingPost.propTypes = {
  data: PropTypes.node.isRequired
};

export default CodingPost

export const pageQuery = graphql`
    query{        
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC },
      filter: { frontmatter: { type: { eq: "coding" } } }
      ) {          
        edges {            
          node {              
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
            }              
            timeToRead              
            excerpt              
            id  
            fields {                
              slug              
            }          
          }          
        }        
      }      
    }
`
