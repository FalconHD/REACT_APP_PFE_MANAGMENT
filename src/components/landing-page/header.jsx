








import logo from '../../images/wewe.png';

import {Link} from 'react-router-dom'
const Header = () => {
    
    return ( 
        <header id="header" class="header">
           <div class="app-header-left">
              <span class="app-icon"></span>
              <p class="app-name">Mon Projet</p>
            
            </div>
        
        <nav id="nav-bar" class="nav">
          <ul class="nav-list">
            <li class="nav-items">
              <a class="nav-links" href="#features">Caractéristiques</a>
            </li>
            <li class="nav-items">
              <a class="nav-links" href="#how-it-works">Comment ça fonctionne</a>
            </li>
        
            <li class="nav-items">
            <Link to="/singin"><a class="nav-links nav-link-cta" href="">Login</a></Link>
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