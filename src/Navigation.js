import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="/"  href="/" >Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/**  
               * NavLink is class of react-router-dom, refer https://reactrouter.com/web/api/NavLink
               * whereas 
               * Nav.Link is component of react-bootstrap*/}
              {/*
              <Nav.Link as={Link} to="/about" href="/about" >About</Nav.Link>
              <Nav.Link as={Link} to="/contact" href="/contact">Contact</Nav.Link>
              */}

              <NavLink className="nav-link" as={Link} to="/about" activeClassName="active">About</NavLink>
              <NavLink className="nav-link" as={Link} to="/notices" activeClassName="active">Notices</NavLink>
              <NavLink className="nav-link" as={Link} to="/contact" activeClassName="active">Contact</NavLink>
              
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavLink className="dropdown-item" as={Link} to="/new-path" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Two</NavLink>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Facebook</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Twitter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        
    );
}


export default Navigation;