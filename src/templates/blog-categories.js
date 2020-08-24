import React from "react";

import LayoutPost from "../components/layout-post";
import Article from "../components/elements/article";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'

import kebabCase from "lodash/kebabCase"

export const query = graphql`
	    query($category: String,$skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {              
            frontmatter {                
              title                
              date(formatString: "DD MMMM, YYYY", locale: "es")
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

const Categories = ({ pageContext, data }) => { 
  const { category, currentPage, numPages} = pageContext 
  const { edges } = data.allMarkdownRemark
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  
  return (
    
    <LayoutPost>
      <SEO
        keywords={[category]}
        title={`${category} Posts`}
      />
      <h1 
                  className="text-3xl font-sans font-thin">
                  Posts de categoria {category}
                  </h1>

      {edges.map(({ node }) => {
          return (
            <Article key={node.id} post={node} body={node.excerpt}/>
          )
        })}

        <div className="flex items-center py-8">
            {!isFirst && (
            <Link to={`/c/${kebabCase(category)}/${prevPage === 0 ? '' : prevPage}`} rel="prev"
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >←Prev</Link>
          )}
          
          {Array.from({ length: numPages }, (_, i) => (
            
              <Link
                to={`/c/${kebabCase(category)}/${i === 0 ? '' : i + 1}`}
                key={`pagination-number${i + 1}`}
                className={`h-10 w-10 font-semibold hover:text-gray-900 ${currentPage == (i+1)?'text-white hover:bg-blue-600 hover:text-white bg-blue-800':"text-gray-800 hover:text-white"} text-sm flex items-center justify-center ml-3`}
              >
                {i + 1}
              </Link>
          ))}
          {!isLast && (
            <Link to={`/c/${kebabCase(category)}/${nextPage === 0 ? '' : prevPage}`} rel="next"
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next→
            </Link>
          )}
        </div>
    </LayoutPost>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
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

export default Categories