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

              <p><strong>conference </strong> on a wide range on topics.</p>
            </li>
            <li>
            <img src={onlineLibrary} className="wewe" alt="onlineConference"/>

              <p><strong>library</strong> from professionals .</p>
            </li>
            <li>
            <img src={communities} className="wewe" alt="onlineConference"/>
              <p><strong>community  </strong> to help you improve your skills level.</p>
            </li>
          </ul>
        </section>
     );
}
 
export default SecFeatures;