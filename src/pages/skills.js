import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, SkillsLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl } from "react-bootstrap"

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[skills].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allPosts.filter(post => {
      // query will run on the following fields
      const { description, title, tags, author } = post.node.frontmatter
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        post.node.excerpt.toLowerCase().includes(stdQuery) ||
        (description && description.toLowerCase().includes(stdQuery)) ||
        title.toLowerCase().includes(stdQuery) ||
        author.toLowerCase().includes(stdQuery) ||
        (tags && tags.join("").toLowerCase().includes(stdQuery))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const filteredPosts = query !== "" ? filteredData : allPosts

  return (
    <PageLayout>
      <SEO title="Skills" />
      <PageTitle title="Certifications & Skills" />
      <Container className="px-5 mb-5 text-center">
        <Form className="skills-filter">
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form>
      </Container>
      <Container
        fluid
        className="p-3 text-left d-flex flex-wrap justify-content-center all-skills-container"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            <SkillsLink
              to={node.fields.slug}
              featuredImage={featuredImageMap[node.fields.slug]}
              title={node.frontmatter.title}
              organization={node.frontmatter.organization}
              subtitle={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/skills/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            organization
            description
            tags
            author
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/skills/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
