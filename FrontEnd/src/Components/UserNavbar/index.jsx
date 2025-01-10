import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhoneAlt, FaHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import Favorites from '../../pages/User/Favorites';
import { favoriteContext } from '../../Context/FavoritesContext';

function UserNavbar() {
  const navigate = useNavigate(); 
  const { favorites} = useContext(favoriteContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <span>We believe we help people<br />for happier lives</span>
          </div>

          <div className="text-center d-flex align-items-center">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/logo.png" 
              alt="Logo"
              style={{ height: '40px', marginRight: '10px' }}
            />
          </div>

          <div className="d-flex align-items-center">
            <FaPhoneAlt style={{ color: 'white', backgroundColor: '#ff0057', borderRadius: '50%', padding: '5px', fontSize: '20px', marginRight: '10px' }} />
            <span>+880 123 12 658 439</span>
          </div>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-light border-top border-danger">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-danger">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#immigration">IMMIGRATION</Nav.Link>
            <Nav.Link href="#course">COURSE</Nav.Link>
            <Nav.Link href="#country">COUNTRY</Nav.Link>
            <NavDropdown title="BLOG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Nav.Link href="#elements">ELEMENTS</Nav.Link>
          </Nav>

          
          <div className="d-flex align-items-center">
            <FaHeart
              style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => navigate('/favorites')} 
            />
            <span>({favorites.length})</span>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default UserNavbar;
