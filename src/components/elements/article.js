import React from 'react'
import PropTypes from "prop-types";
import './colors.css';
import CategoriesList from "./categories-list";
import Tags from "../tags";
import { FaCalendar, FaClock } from 'react-icons/fa';
import { Link } from "gatsby"
import Img from "gatsby-image"


function Article ({post, body,footer }) {

  return (

  <article className="flex flex-col shadow my-4" >
				<a href="#" className="hover:opacity-75">
					<Img
					fluid={post.frontmatter.featured.childImageSharp.fluid}
					alt={post.frontmatter.title}/>
				</a>
				<div className="flex-row">
					<CategoriesList categories={post.frontmatter.categories}/>
				</div>
				<div className="bg-white flex flex-col justify-start p-6">
					
					<Link to={`/b/${post.fields.slug}/`} className="text-3xl font-bold hover:text-gray-700 pb-4">                  
					{post.frontmatter.title}               
					</Link>

					<p href="#" className="text-sm pb-3">
						<FaCalendar
						style={{ margin: '0 5px' , display: 'inline'}}
						/> Publicado el {post.frontmatter.date} {" "}
						<FaClock
					style={{ margin: '0 5px' , display: 'inline'}}
					/>	
						{post.timeToRead} min de lectura
					</p>
					<div className="markdown"
						dangerouslySetInnerHTML={{ __html: body.html?body.html:body }}>
					</div>
					<Tags tags={post.frontmatter.tags} />
					{footer}
				</div>
				</article>
)
}
export default Article

Article.propTypes = {
  post: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};