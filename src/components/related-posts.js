import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import CardPost from "./card-post"
import PropTypes from "prop-types";

function RelatedPosts({category , postId}) {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query rPosts {
     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },limit: 30){
       edges{
         node{
           fields{
             slug
           }
           frontmatter{
             title
             categories
             tags
             description
             featured {          
                  childImageSharp {            
                    fluid(maxWidth: 750) {              
                      ...GatsbyImageSharpFluid            
                    }          
                  }
                }
           }
           id
         }
       }
     }
   }
  `);

  const listPosts = allMarkdownRemark.edges;
  const Posts = listPosts
    .filter(edge => (edge.node.frontmatter.categories.includes(category) && postId != edge.node.id) ) // You can filter your posts based on some criteria
    .map(edge => <CardPost key={edge.node.id} post={edge.node} />);

  return (

      <div className="flex">
        {Posts.slice(0,2)}
      </div>

  );
}

RelatedPosts.propTypes = {
  category: PropTypes.node.isRequired,
  postId: PropTypes.node.isRequired,
};


export default RelatedPosts;


