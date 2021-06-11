import contact from'../../images/contact.svg';
import insta from'../../images/insta.svg';
import twitter from'../../images/twitter.svg';





const Footer = () => {
    return (  
        <footer className="footer">
        <div className="footer-container">
          <nav className="footer-nav">
            <div>
              <h3 className="footer-title">RESSOURCES</h3>
              <ul>
                <li><a className="footer-link" href="#">Blog</a></li>
      
                <li><a className="footer-link" href="#">Communauté</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Mon PFE</h3>
              <ul>

                <li><a className="footer-link" href="#">À propos</a></li>
                <li><a className="footer-link" href="#">Notre mission</a></li>
                <li><a className="footer-link" href="#">Notre équipe</a></li>
                <li><a className="footer-link" href="#">Carrières</a></li>
                
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Nous contacter</h3>
              <ul>
              
                <li><a className="footer-link" href="#">Support</a></li>
              </ul>
            </div>
          </nav>
          <div className="footer-newsletter" id="subscribe">
            <a href="#"></a>
            <p>
            Restez au courant de toutes les mises à jour en vous inscrivant à notre newsletter.
            </p>
            <form action="https://www.freecodecamp.com/email-submit" method="GET" id="form" className="footer-form">
              <label for="email" className="visuallyhidden">Adresse e-mail</label>
              <input type="email" name="email" className="footer-email" placeholder="Email Address" id="email" spellcheck="false" aria-required="true" aria-invalid="false" />
              <input type="submit" id="submit" className="buttonn button-email" value="Subscribe" />
            </form>
          </div>
          <ul className="footer-social">
            <li>
              <a href="mailto:boughadoin@@gmail.com?Subject=Hi%20Alexandra" rel="noopener noreferrer">        <img src={contact} alt="contact" /> 
<span className="visuallyhidden">e-mail</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alexandra__caulea/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="insta" /> 
                <span className="visuallyhidden">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/alexandracaulea" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="insta" /> 
                 
                <span className="visuallyhidden">Twitter</span></a>
            </li>
          </ul>
          <p className="copyright">Projet réalisé par <a className="dotted-link" href="wewe.com" target="_blank" rel="noopener noreferrer">AbdessamadPas</a>.</p>
          
      
        </div>
      </footer>
    );
}
 
export default Footer;