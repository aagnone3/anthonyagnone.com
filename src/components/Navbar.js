import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
        <FontAwesomeIcon
          icon={["fas", `home`]}
          className={`icons-small home`}
          title="Home"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/" title="Home">
            Home
          </Nav.Link>
          <Nav.Link className="mr-2 ml-2" as={Link} to="/skills" title="Skills">
            Skills
          </Nav.Link>
          <Link className="mt-2 mr-2 mb-2 ml-2" target="_blank" to="https://lifewithdata.org">
            Blog
            <FontAwesomeIcon
              icon={["fas", "external-link-alt"]}
              className="icons-navbar icon-external-link"
              title="External Link"
            />
          </Link>
          <Link className="mt-2 mr-2 mb-2 ml-2" target="_blank" to="https://lifewithdata.org/newsletter">
            Newsletter
            <FontAwesomeIcon
              icon={["fas", "external-link-alt"]}
              className="icons-navbar icon-external-link"
              title="External Link"
            />
          </Link>
          <Form className="my-auto ml-2">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

 