import { useState } from "react";
import Modalstudent from "./modalStudent";
const RightBar = () => {
  const [bb, setBb] = useState(false)
    return (  
        <div className="right-bar">
      <div className="top-part">
      <div className="addtask">
    <button onClick={()=>setBb(true)} > <svg version="1.1" id="Capa_1"  xmlns="http://www.w3.org/2000/svg"  width="24" height="24" x="0px" y="0px" viewBox="0 0 384 384"  xml="preserve"><g><g>
		<path d="M368,176c-8.832,0-16,7.168-16,16c0,88.224-71.776,160-160,160S32,280.224,32,192S103.776,32,192,32
			c42.952,0,83.272,16.784,113.544,47.264c6.216,6.272,16.352,6.312,22.624,0.08c6.272-6.224,6.304-16.352,0.08-22.624
			C291.928,20.144,243.536,0,192,0C86.128,0,0,86.128,0,192s86.128,192,192,192s192-86.128,192-192C384,183.168,376.832,176,368,176
			z"/></g></g><g><g>
		<path d="M256,176h-48v-48c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v48h-48c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16
			h48v48c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-48h48c8.832,0,16-7.168,16-16C272,183.168,264.832,176,256,176z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
       </button>
<Modalstudent modale={bb} setModale={setBb} ></Modalstudent>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="feather feather-users">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        <div className="count">6</div>

      </div></div>
     
      <div className="wewe">Réunion</div>
      <div className="right-content">
        <div className="task-box yellow">
          <div className="description-task">
            <div className="time">08:00 - 09:00 AM</div>
            <div className="task-name">Examen des rapports</div>
          </div>
          <div className="more-button"></div>
          <div className="members">
            <img
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              alt="member"/>
            <img
              src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
              alt="member-2"/>
            <img
              src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="member-3"/>
            <img
              src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
              alt="member-4"/>
          </div>
        </div>
        <div className="task-box blue">
          <div className="description-task">
            <div className="time">10:00 - 11:00 AM</div>
            <div className="task-name">Réunion de conception
</div>
          </div>
          <div className="more-button"></div>
          <div className="members">
            <img
              src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80"
              alt="member"/>
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="member-2"/>
            <img
              src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
              alt="member-3"/>
          </div>
        </div>
        <div className="task-box red">
          <div className="description-task">
            <div className="time">01:00 - 02:00 PM</div>
            <div className="task-name">Réunion d'équipe
</div>
          </div>
          <div className="more-button"></div>
          <div className="members">
            <img
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              alt="member"/>
            <img
              src="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
              alt="member-2"/>
            <img
              src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              alt="member-3"/>
            <img
              src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80"
              alt="member-4"/>
          </div>
        </div>
        <div className="task-box green">
          <div className="description-task">
            <div className="time">03:00 - 04:00 PM</div>
            <div className="task-name">Événement de sortie
</div>
          </div>
          <div className="more-button"></div>
          <div className="members">
            <img
              src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80"
              alt="member"/>
            <img
              src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80"
              alt="member-2"/>
            <img
              src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80"
              alt="member-3"/>
            <img
              src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80"
              alt="member-4"/>
            <img
              src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
              alt="member-5"/>
          </div>
        </div>
        <div className="task-box blue">
          <div className="description-task">
            <div className="time">08:00 - 09:00 PM</div>
            <div className="task-name">Événement de sortie
</div>
          </div>
          <div className="more-button"></div>
          <div className="members">
            <img
              src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80"
              alt="member"/>
            <img
              src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80"
              alt="member-2"/>
            <img
              src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80"
              alt="member-3"/>
            <img
              src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80"
              alt="member-4"/>
            <img
              src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
              alt="member-5"/>
          </div>
        </div>
        <div className="task-box yellow">
          <div className="description-task">
            <div className="time">11:00 - 12:00 PM</div>
            <div className="task-name">Entraine toi
</div>
          </div>
          <div className="more-button"></div>
          <div className="members">
            <img
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              alt="member"/>
            <img
              src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
              alt="member-2"/>
            <img
              src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="member-3"/>
            <img
              src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
              alt="member-4"/>
          </div>
        </div>
      </div>
    </div>
    );
}
 
export default RightBar;
