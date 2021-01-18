import React from "react"
import { Container, Image } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <Container fluid className="py-1 footer text-center">
      <span className="m-auto">
        <Link 
          className="ml-1"
          to="https://lifewithdata.org"
          target="_blank"
        >
        <Image 
          src="../../images/life-with-data.png" 
          width={135}
        />
        </Link>
      </span>
    </Container>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
