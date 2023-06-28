import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import planet from '../assets/planet.png';

const NavBar = () => {
  const links = [
    {
      path: '/',
      name: 'Rockets',
    },
    {
      path: 'missions',
      name: 'Missions',
    },
    {
      path: 'my-profile',
      name: 'My Profile',
    },
  ];

  return (
    <Nav>
      <div className="container-logo">
        <img
          alt="planet logo"
          src={planet}
          style={{ width: '3em', height: '3em' }}
        />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <div className="navigations">
        {links.map((link) => (
          <React.Fragment key={link.path}>
            <li key={link.path}>
              <NavLink to={link.path}>{link.name}</NavLink>
              {link.name === 'Missions' && <span style={{ marginLeft: '.5em' }}>|</span>}
            </li>
          </React.Fragment>
        ))}
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 4em;

  .container-logo {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .navigations {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  a {
    text-decoration: none;
    color: #0080ff;
  }

  .active {
    text-decoration: underline;
  }

  li {
    list-style: none;
  }
`;
