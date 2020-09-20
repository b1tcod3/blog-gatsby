import React from "react";

import LayoutPost from "../components/layout-post";
import Article from "../components/elements/article";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'

import kebabCase from "lodash/kebabCase"

export const query = graphql`
	    query($tag: String,$skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {              
            frontmatter {                
              title                
              date(formatString: "DD MMMM, YYYY", locale: "es")
              categories
              tags
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

const Tag = ({ pageContext, data }) => { 
  const { tag, currentPage, numPages} = pageContext 
  const { edges } = data.allMarkdownRemark
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  
  return (
    
    <LayoutPost>
      <SEO
        keywords={[tag]}
        title={`${tag} Posts`}
      />
      <h1 
                  className="text-3xl font-sans font-thin">
                  Posts de Tag {tag}
                  </h1>

      {edges.map(({ node }) => {
          return (
            <Article key={node.id} post={node} body={node.excerpt}/>
          )
        })}

        <div className="flex items-center py-8">
            {!isFirst && (
            <Link to={`/tag/${kebabCase(tag)}/${prevPage === 0 ? '' : prevPage}`} rel="prev"
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >←Prev</Link>
          )}
          
          {Array.from({ length: numPages }, (_, i) => (
            
              <Link
                to={`/tag/${kebabCase(tag)}/${i === 0 ? '' : i + 1}`}
                key={`pagination-number${i + 1}`}
                className={`h-10 w-10 font-semibold hover:text-gray-900 ${currentPage == (i+1)?'text-white hover:bg-blue-600 hover:text-white bg-blue-800':"text-gray-800 hover:text-white"} text-sm flex items-center justify-center ml-3`}
              >
                {i + 1}
              </Link>
          ))}
          {!isLast && (
            <Link to={`/tag/${kebabCase(tag)}/${nextPage === 0 ? '' : prevPage}`} rel="next"
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next→
            </Link>
          )}
        </div>
    </LayoutPost>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
    numPages: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tag