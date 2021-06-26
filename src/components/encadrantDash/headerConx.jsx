import { Link } from "react-router-dom";

const HeaderConx = () => {
    return ( 
         <div className="headerr">
    <div className="search-barr">
     <input type="text" placeholder="Search..."/>
    </div>
   <Link to="/encaddash/connection/calender"><a><div className="inbox-calendar">
    <input type="checkbox" className="inbox-calendar-checkbox"/>
     <div className="toggle-page">
      <span>Boite</span>
     </div>
     <div className="layer"></div>
    </div></a> </Link>
    <div className="color-menu">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.7 464.7"><path d="M446.6 18.1a62 62 0 00-87.6 0L342.3 35a23 23 0 10-32.5 32.5l5.4 5.4-180.6 180.6L71.9 316c-5 5-8 11.6-8.2 18.7l-.2 3.3-2.5 56.7a9.4 9.4 0 009.4 9.8h.4l30-1.3 18.4-.8 8.3-.4a37 37 0 0024.5-10.8l240.9-240.9 4.5 4.6a23 23 0 0032.5 0c9-9 9-23.6 0-32.6l16.7-16.7a62 62 0 000-87.6zm-174 209.2l-84.6 16 138-138 34.4 34.3-87.8 87.7zM64.5 423.9C28.9 423.9 0 433 0 444.3c0 11.3 28.9 20.4 64.5 20.4s64.5-9.1 64.5-20.4C129 433 100 424 64.5 424z"/></svg>
    </div>
   </div> );
}
 
export default HeaderConx;