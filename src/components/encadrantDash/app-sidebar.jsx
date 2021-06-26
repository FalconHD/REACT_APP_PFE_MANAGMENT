import { Link, useHistory ,useLocation } from 'react-router-dom'







const Appsidebare = () => {
  let history = useHistory();
  let location = useLocation();

  function Logout() {
    localStorage.removeItem('Token')
    history.push('/')
    // history.push("/home");

  }


  return (
    <div className="wewe1">
      <div className="app-sidebar">
        <Link to="/encaddash"><a href="" className="app-sidebar-link active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" /></svg>
        </a></Link>
        <Link to="/encaddash/studentList"> <a href="" className="app-sidebar-link">
          <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-pie-chart" viewBox="0 0 24 24">
            <defs />
            <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
          </svg>
        </a></Link>
        <a href="" className="app-sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" /></svg>
        </a>

        <Link to="/encaddash/library"> <a href="" className="app-sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 44"><defs><style>.cls-1{ }.cls-2{ }</style></defs><title>Folder</title><g id="Layer_2" data-name="Layer 2"><g id="Folder"><path className="cls-1" d="M41.78 9H30v-.78A8.22 8.22 0 0 0 21.78 0H8.22A8.22 8.22 0 0 0 0 8.22v27.56A8.22 8.22 0 0 0 8.22 44h33.56A8.22 8.22 0 0 0 50 35.78V17.22A8.22 8.22 0 0 0 41.78 9zM45 35.78A3.22 3.22 0 0 1 41.78 39H8.22A3.22 3.22 0 0 1 5 35.78V8.22A3.22 3.22 0 0 1 8.22 5h13.56A3.22 3.22 0 0 1 25 8.22V9h-8.5a2.5 2.5 0 0 0 0 5h25.28A3.22 3.22 0 0 1 45 17.22z" /><rect className="cls-2" x="14" y="19" width="26" height="5" rx="2.5" ry="2.5" /></g></g></svg>
        </a></Link>

        <Link to="/encaddash/video"> <a href="" className="app-sidebar-link">
       <svg height="24px" viewBox="0 -87 472 472" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m467.101562 26.527344c-3.039062-1.800782-6.796874-1.871094-9.898437-.179688l-108.296875 59.132813v-35.480469c-.03125-27.601562-22.398438-49.96875-50-50h-248.90625c-27.601562.03125-49.96875 22.398438-50 50v197.421875c.03125 27.601563 22.398438 49.96875 50 50h248.90625c27.601562-.03125 49.96875-22.398437 50-50v-34.835937l108.300781 59.132812c3.097657 1.691406 6.859375 1.625 9.894531-.175781 3.039063-1.804688 4.898438-5.074219 4.898438-8.601563v-227.816406c0-3.53125-1.863281-6.796875-4.898438-8.597656zm-138.203124 220.898437c-.015626 16.5625-13.4375 29.980469-30 30h-248.898438c-16.5625-.019531-29.980469-13.4375-30-30v-197.425781c.019531-16.558594 13.4375-29.980469 30-30h248.90625c16.558594.019531 29.980469 13.441406 30 30zm123.101562-1.335937-103.09375-56.289063v-81.535156l103.09375-56.285156zm0 0"/></svg>
        </a></Link>


        <Link to="/encaddash/settingEncad"> <a href="" className="app-sidebar-link">
          <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-settings" viewBox="0 0 24 24">
            <defs />
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </a></Link>


      </div>
      <div className="wewe2">
        <a onClick={Logout} href="/" className="app-sidebar-link  logout" >
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 471.2 471.2"  >
            <g>
              <g>
                <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
       s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
       S235.019,444.2,227.619,444.2z"/>
                <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
       s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
       C455.319,239.9,455.319,231.3,450.019,226.1z"/>
              </g>

            </g>
          </svg>
        </a>
      </div>

    </div>

  );
}

export default Appsidebare;