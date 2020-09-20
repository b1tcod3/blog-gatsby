import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import postsFeed from "../components/posts-feed.module.css"
import kebabCase from "lodash/kebabCase"
import { FaCalendar} from 'react-icons/fa';
import '../components/elements/colors.css';
import Tags from '../components/tags';

const Search = props => {

  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter 
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <SEO
        keywords={[`search`]}
        title="Search"
      />
      <section>

      <div className="shadow flex">
        <input className="w-full rounded p-2" type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}/>
          <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
            <svg className="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
      </div>
      <hr/>
      {posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { tags, categories, title, date, description } = node.frontmatter
        return (
          
          <section className={`${postsFeed.post} m-2 shadow p-4 bg-white`} key={slug}>
                    <header className={postsFeed.postHeader}>
                        <h2 className={postsFeed.postTitle}>
                        <Link to={`desd/${slug}`}>{title}</Link>
                        </h2>

                        <p className={postsFeed.postMeta}>
                          <FaCalendar
                          style={{ margin: '0 5px' , display: 'inline'}}
                          /> Published on {date} {" "}
                          <br/>
                          <Tags tags={tags} />
                        </p>
                    </header>

                    <div className={postsFeed.postDescription}>
                        <p>
                          {description || excerpt}
                        </p>
                    </div>
                    <div className="mt-4">
                        {categories.map( (category) => {
                            return (
                            <Link to={`/c/${kebabCase(category)}/`} key={category}
                            className={`text-white rounded-full m-1 p-1 category-${category}`}
                            >
                            {category}
                            </Link>
                            )
                          })}
                    </div>
        </section>
        )
      })}
      </section>
    </Layout>
  );
}

export default Search

Search.propTypes = {
  data: PropTypes.node.isRequired,
  
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY", locale: "es")
            tags
            categories
          }

          fields {
            slug
          }
        }
      }
    }
  }
`