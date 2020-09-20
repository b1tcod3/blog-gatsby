const path = require("path")
const __ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/b/${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const categoryResult = await graphql(`
  {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
      fieldValue
      totalCount
      }
    }
  }
  `)

  const categories = categoryResult.data.allMarkdownRemark.group

  categories.forEach(category => {

    const totalCount = category.totalCount
    const postsPerPage = 2
    const numPages = Math.ceil(totalCount / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/c/${__.kebabCase(category.fieldValue)}/` : `/c/${__.kebabCase(category.fieldValue)}/${i+1}`,
        component: path.resolve(`./src/templates/blog-categories.js`),
        context: {
          category: category.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })  
  })
})

const typeResult = await graphql(`
  {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___type) {
      fieldValue
      totalCount
      }
    }
  }
  `)

  const types = typeResult.data.allMarkdownRemark.group

  types.forEach(type => {

    const totalCount = type.totalCount
    const postsPerPage = 2
    const numPages = Math.ceil(totalCount / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/t/${__.kebabCase(type.fieldValue)}/` : `/t/${__.kebabCase(type.fieldValue)}/${i+1}`,
        component: path.resolve(`./src/templates/blog-types.js`),
        context: {
          type: type.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })  
  })
})

const tagResult = await graphql(`
  {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
      fieldValue
      totalCount
      }
    }
  }
  `)

  const tags = tagResult.data.allMarkdownRemark.group

  tags.forEach(tag => {

    const totalCount = tag.totalCount
    const postsPerPage = 2
    const numPages = Math.ceil(totalCount / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tag/${__.kebabCase(tag.fieldValue)}/` : `/tag/${__.kebabCase(tag.fieldValue)}/${i+1}`,
        component: path.resolve(`./src/templates/blog-tags.js`),
        context: {
          tag: tag.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })  
  })
})

}