import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import PostLink from "./post-link"

function LatestPost() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Posts {
     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
       edges{
         node{
           fields{
             slug
           }
           frontmatter{
             title
             date(formatString: "MMM DD, YYYY")
           }
         }
       }
     }
   }
  `);

  const listPosts = allMarkdownRemark.edges;
  const Posts = listPosts
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (

      <ul className="flex flex-col">
        {Posts}
      </ul>

  );
}

export default LatestPost;


