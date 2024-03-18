import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar=()=> {
  return (
    <Navbar key={1} expand={'md'} className="bg-body-tertiary mb-3">
    <Container fluid>
      <Navbar.Brand href="#">Traxi</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-'md'-${'md'}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-'md'-${'md'}`}
        aria-labelledby={`offcanvasNavbarLabel-'md'-${'md'}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-'md'-${'md'}`}>
            Traxi
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>           
          </Nav>          
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>  
  );
}

export default NavBar;