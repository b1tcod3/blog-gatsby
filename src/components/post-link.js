import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import TimeAgo from 'react-timeago'

const PostLink = ({ post }) => (
  <li className="my-px">
    <Link to={`/b/${post.fields.slug}`} 
    >
   
	<span className="text-xs ml-3">{post.frontmatter.title}</span>
	<span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
<TimeAgo date={post.frontmatter.date} />
	</span>
    </Link>      
  </li>
)

PostLink.propTypes = {
  post: PropTypes.node.isRequired,
};

export default PostLink