import React from "react"
import PropTypes from "prop-types";
import Img from "gatsby-image"
import { Link } from "gatsby"

const CardPost = ({ post }) => (

<div className="max-w-xs rounded overflow-hidden shadow-lg my-2 flex-1 mx-2">
	<a href="#" className="hover:opacity-75">
	<Img fluid={post.frontmatter.featured.childImageSharp.fluid}
					alt={post.frontmatter.title} className="h-1/3" />
	</a>
	<div className="px-6 py-4">
		<Link to={`/b/${post.fields.slug}/`} className="text-xl font-bold hover:text-gray-700 pb-4">                  
					{post.frontmatter.title}               
					</Link>

			<p className="text-grey-darker text-base">{post.frontmatter.description}</p>
		</div>
		
</div>


)

CardPost.propTypes = {
  post: PropTypes.node.isRequired,
};

export default CardPost