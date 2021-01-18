import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { firstName, lastName, occupation } = data.site.siteMetadata
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="400"
          fluid
          style={{"border-radius": "10px"}}
          src={`../../images/headshot.jpg`}
          alt={"Picture of Anthony Agnone"}
        />
        <Container className="py-0 mt-3">
          <h1
            style={{
              fontSize: "3rem",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <h3>{occupation}</h3>
          <h5>Email: my first and last name at gmail</h5>
        </Container>
        <hr className="my-3 w-50" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://twitter.com/anthonyagnone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>
          <a
            href="https://anthonyagnone.medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "medium"]}
              className="icons medium"
              title="Medium"
            />
          </a>
          <a
            href="https://linkedin.com/in/anthonyagnone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.github.com/aagnone3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.reddit.com/user/aagnone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "reddit"]}
              className="icons reddit"
              title="Reddit"
            />
          </a>
          <a
            href="https://www.facebook.com/aLifeWithData"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="icons facebook"
              title="Facebook"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        lastName
        occupation
      }
    }
  }
`
