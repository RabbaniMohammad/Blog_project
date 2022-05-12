import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  CardGroup,
  Card,
} from "react-bootstrap";
import "../styles/article.css";
function ArticlesList() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="section_1">
        <div className="container_1">
          <h1>
            Browse our courses curated with the best artists in the industry
            only for you.
          </h1>
          <p>
            Gain access to a thriving community of artists when you take a
            course with us.
          </p>
        </div>
      </section>
      {/* https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png */}
      <CardGroup>
        <Card className="cards">
          <Card.Img
            variant="top"
            src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"
            className="cardImg"
          />
          <Card.Body>
            <Card.Title>Unboxing Content Creation</Card.Title>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img
            variant="top"
            src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"
            className="cardImg"
          />
          <Card.Body>
            <Card.Title>Unboxing Content Creation</Card.Title>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img
            variant="top"
            src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"
            className="cardImg"
          />
          <Card.Body>
            <Card.Title>Unboxing Content Creation</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default ArticlesList;
