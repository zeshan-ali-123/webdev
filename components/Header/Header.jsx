import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

const nav_links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 50px' }}>
            <div className="logo">
              <img src={logo} alt='logo' />
            </div>
            <div className="navigation">
              <ul className="menu" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active_link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="nav_btns" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Button className="btn secondary_btn">
                  <Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>Login</Link>
                </Button>
                <Button className="btn primary_btn">
                  <Link to='/register' style={{ textDecoration: 'none', color: '#fff' }}>Register</Link>
                </Button>
              </div>
              <span className='mobile_menu'>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
