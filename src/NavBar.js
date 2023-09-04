import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch } from 'react-icons/ai';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body">
      <Container fluid>
        <Navbar.Brand href="#">Coisas Ótimas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Casa</Nav.Link>
            <Nav.Link href="#action2">SPC/SERASA</Nav.Link>
            <NavDropdown title="Processo" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Concultar processo</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pagar o que devo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Polícia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Pesquisa"
            />
            <Button variant="light"><AiOutlineSearch size={25}></AiOutlineSearch></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};