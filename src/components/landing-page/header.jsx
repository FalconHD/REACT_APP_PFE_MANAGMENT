








import logo from '../../images/wewe.png';

import {Link} from 'react-router-dom'
const Header = () => {
    
    return ( 
        <header id="header" class="header">
        <img src={logo }  class="logo" alt="projects " id="header-img" />
        <nav id="nav-bar" class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#how-it-works">How It Works</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#get-started">Get Started</a>
            </li>
            <li class="nav-item">
            <Link to="/singin"><a class="nav-link nav-link-cta" href="">Login</a></Link>
            </li>
          </ul>
        </nav>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="visuallyhidden">Menu</span>
          <span class="hamburger"></span>
        </button>
      </header>
     );
}
 
export default Header;