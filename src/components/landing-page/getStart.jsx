import svg1 from'../../images/svg1.svg';
import svg2 from'../../images/svg2.svg';


const GetStart = () => {
    return (
        <div id="get-started" className="get-started">
        <ul>
          <li>
          <img src={svg1} alt="svg1" />
            <p><strong className=" community-members">1.2</strong><strong>K+</strong></p>
            <p>Community Members</p>
          </li>
          <li>
           <img src={svg2} alt="svg2" /> 
            <p><strong className=" number-of-pages">1.9</strong><strong>K+</strong></p>
            <p>Pages with content for you to learn</p>
          </li>
        </ul>
      </div>
      );
}
 
export default GetStart;