import React from 'react'

import ProjectSection from '../encadrantDash/projectSection';
import MessageSection from '../encadrantDash/messageSection';
const MainContent = () => {
    return (
        <div className="app-content">
            <ProjectSection/>
            <MessageSection/>
        </div>
        
     );
}
 
export default MainContent;