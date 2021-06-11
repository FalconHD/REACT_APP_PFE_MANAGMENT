import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {

  









  return (
    <div class="app-sidebar">
    <Link to="/dashdirecteur"><a href="" class="app-sidebar-link active">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" /></svg>
    </a></Link>
  <Link to="/dashdirecteur/users"> <a href="" class="app-sidebar-link">
      <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-pie-chart" viewBox="0 0 24 24">
        <defs />
        <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
      </svg>
    </a></Link> 
    <a href="" class="app-sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" /></svg>
    </a>
  
     <Link to="/dashdirecteur/products"> <a href="" class="app-sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 44"><defs><style>.cls-1{}.cls-2{}</style></defs><title>Folder</title><g id="Layer_2" data-name="Layer 2"><g id="Folder"><path class="cls-1" d="M41.78 9H30v-.78A8.22 8.22 0 0 0 21.78 0H8.22A8.22 8.22 0 0 0 0 8.22v27.56A8.22 8.22 0 0 0 8.22 44h33.56A8.22 8.22 0 0 0 50 35.78V17.22A8.22 8.22 0 0 0 41.78 9zM45 35.78A3.22 3.22 0 0 1 41.78 39H8.22A3.22 3.22 0 0 1 5 35.78V8.22A3.22 3.22 0 0 1 8.22 5h13.56A3.22 3.22 0 0 1 25 8.22V9h-8.5a2.5 2.5 0 0 0 0 5h25.28A3.22 3.22 0 0 1 45 17.22z"/><rect class="cls-2" x="14" y="19" width="26" height="5" rx="2.5" ry="2.5"/></g></g></svg>
    </a></Link>
  
  
  
   <Link to="/encaddash/settingEncad"> <a href="" class="app-sidebar-link">
      <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-settings" viewBox="0 0 24 24">
        <defs />
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    </a></Link>
  </div>
  
  );
}
