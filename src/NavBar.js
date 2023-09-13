import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [categorias, setCategoria] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`)
      .then((resposta) => {
        setCategoria(resposta.data);
      });
  }, []);

  return (
    <Navbar expand="lg" className="bg-body" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Coisas Ótimas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: '100px',
              color: 'white',
              marginBottom: '100px'
            }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              {categorias.map((categoria)=>{
                return <NavDropdown.Item href="#action3">{categoria}</NavDropdown.Item>
              })}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Pesquisa"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'  }}
            />
            <Button variant="light"><AiOutlineSearch size={25}></AiOutlineSearch></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};