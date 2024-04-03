import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
    
    <header>
    <div className="job-tier">
        JobGenie
      </div>
      <nav>
        <ul>
          <li><a href="#">Search Job</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Job Alerts</a></li>
          <li><a href="#">Employers</a></li>
          <li className="dropdown">
            <a href="#">Career Advice</a>
            <ul className="dropdown-menu">
              <li><a href="#">Career Advice 1</a></li>
              <li><a href="#">Career Advice 2</a></li>
              <li><a href="#">Career Advice 3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;