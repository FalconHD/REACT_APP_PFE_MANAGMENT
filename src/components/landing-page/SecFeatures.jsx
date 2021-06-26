import communities from '../../images/communities.svg';
import onlineConference from '../../images/online-conference.svg';
import onlineLibrary from '../../images/online-library.svg';

const SecFeatures = () => {
    return ( 
        <section id="features" class="features">
          <h2 class="visuallyhidden">Features</h2>
          <ul class="features__list">
            <li>
            <img src={onlineConference} className="wewe" alt="onlineConference"/>

              <p><strong> conférence</strong>  sur un large éventail de sujets.</p>
            </li>
            <li>
            <img src={onlineLibrary} className="wewe" alt="onlineConference"/>

              <p><strong>bibliothèque </strong> de professionnels .</p>
            </li>
            <li>
            <img src={communities} className="wewe" alt="onlineConference"/>
              <p><strong>communauté   </strong> pour vous aider à améliorer votre niveau de compétences.</p>
            </li>
          </ul>
        </section>
     );
}
 
export default SecFeatures;