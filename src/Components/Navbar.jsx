import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import logo from '../assets/images/letter-v.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Array of navigation items
  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    { name: 'About', 
      path: '/about' 
    },
    { name: 'Education', 
      path: '/education' 
    },
    { name: 'Skills', 
      path: '/skills' 
    },
    { name: 'Projects', 
      path: '/projects' 
    },
    { name: 'Contact',
       path: '/contact' 
    }
  ];

  return (
    <div>
      <div
        className="header"
        style={{ padding: '2rem 9%', zIndex: 100, transition: '0.3s' }}
      >
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span className="animate" style={{ '--i': 1 }}></span>
        </Link>

        <i className="bx bx-menu" id="menu-icons"></i> {/* Ensure boxicons is installed */}

        <nav className="navbar position-relative">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-link custom-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <span className="active-nav"></span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
