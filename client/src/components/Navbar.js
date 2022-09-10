import logo from '../spacex-logo.png';
import { Navbar, Container } from 'react-bootstrap';

const ReactNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
            <Container className="justify-content-center">
                <Navbar.Brand href="/">
                    <img 
                        src={logo}
                        height="30"
                        
                        className="d-inline-block align-top"
                        alt='spacex-logo'
                    />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default ReactNavbar;