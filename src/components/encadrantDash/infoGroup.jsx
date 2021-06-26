import React from 'react'
const InfoGroup = (props) => {
  console.log(props.group.leader);
    return ( 
        <div class="test">
  <div class="task-managerr">Gestion PFE</div>

    <div class="user-profile-areaa">

   
    
     <div class="side-wrapper">
      <div class="user-profile">
       <img src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg" alt="" class="user-photo"/>
       <div class="user-name">{props.group.leader.name}</div>
       <div class="user-mail">{props.group.leader.email}
</div>
      </div>
      <div class="user-notification">
       <div class="notify">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor">
         <path d="M13.533 5.6h-.961a.894.894 0 01-.834-.57.906.906 0 01.197-.985l.675-.675a.466.466 0 000-.66l-1.32-1.32a.466.466 0 00-.66 0l-.676.677a.9.9 0 01-.994.191.906.906 0 01-.56-.837V.467A.467.467 0 007.933 0H6.067A.467.467 0 005.6.467v.961c0 .35-.199.68-.57.834a.902.902 0 01-.983-.195L3.37 1.39a.466.466 0 00-.66 0L1.39 2.71a.466.466 0 000 .66l.675.675c.25.25.343.63.193.995a.902.902 0 01-.834.56H.467A.467.467 0 000 6.067v1.866c0 .258.21.467.467.467h.961c.35 0 .683.202.834.57a.904.904 0 01-.197.984l-.675.676a.466.466 0 000 .66l1.32 1.32a.466.466 0 00.66 0l.68-.68a.894.894 0 01.994-.187.897.897 0 01.556.829v.961c0 .258.21.467.467.467h1.866c.258 0 .467-.21.467-.467v-.961c0-.35.202-.683.57-.834a.904.904 0 01.984.197l.676.675a.466.466 0 00.66 0l1.32-1.32a.466.466 0 000-.66l-.68-.68a.894.894 0 01-.187-.994.897.897 0 01.829-.556h.961c.258 0 .467-.21.467-.467V6.067a.467.467 0 00-.467-.467zM7 9.333C5.713 9.333 4.667 8.287 4.667 7S5.713 4.667 7 4.667 9.333 5.713 9.333 7 8.287 9.333 7 9.333z" /></svg>
       </div>
       <div class="notify alert">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
         <path d="M10.688 95.156C80.958 154.667 204.26 259.365 240.5 292.01c4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.573-137.385 229.844-196.896 4.375-3.698 5.042-10.198 1.5-14.719C494.625 69.99 482.417 64 469.333 64H42.667c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718z" />
         <path d="M505.813 127.406a10.618 10.618 0 00-11.375 1.542C416.51 195.01 317.052 279.688 285.76 307.885c-17.563 15.854-41.938 15.854-59.542-.021-33.354-30.052-145.042-125-208.656-178.917a10.674 10.674 0 00-11.375-1.542A10.674 10.674 0 000 137.083v268.25C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333v-268.25a10.66 10.66 0 00-6.187-9.677z" /></svg>
       </div>
       <div class="notify alert">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
         <path d="M467.812 431.851l-36.629-61.056a181.363 181.363 0 01-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04V42.667C298.66 19.136 279.524 0 255.993 0s-42.667 19.136-42.667 42.667V80.96C151.716 99.371 106.66 156.48 106.66 224v53.483c0 32.853-8.939 65.109-25.835 93.291L44.196 431.83a10.653 10.653 0 00-.128 10.752c1.899 3.349 5.419 5.419 9.259 5.419H458.66c3.84 0 7.381-2.069 9.28-5.397 1.899-3.329 1.835-7.468-.128-10.753zM188.815 469.333C200.847 494.464 226.319 512 255.993 512s55.147-17.536 67.179-42.667H188.815z" /></svg>
       </div>
      </div>
      <div class="progress-status">12/34</div>
      <div class="progress">
       <div class="progress-bar"></div>
      </div>
      <div class="task-status">
       <div class="task-stat">
        <div class="task-number">12</div>
        <div class="task-condition">Complété
</div>
        <div class="task-tasks">Tâches</div>
       </div>
       <div class="task-stat">
        <div class="task-number">22</div>
        <div class="task-condition">Faire</div>
        <div class="task-tasks">Tâches</div>
       </div>
       <div class="task-stat">
        <div class="task-number">{props.group.tasks.length}</div>
        <div class="task-condition">Tout
</div>
        <div class="task-tasks">complété</div>
       </div>
      </div>
     </div>
  
     <div class="side-wrapper">
      <div class="project-title">LES membres</div>
      <div class="team-member">
       {
         props.group.member.map((m)=>(
          <img src={m.img} alt="" class="members"/>
          ))
       }
      </div>
     </div>
    </div>
</div>

     );
}
 
export default InfoGroup;