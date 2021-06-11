import {useState} from'react';
import { Link } from 'react-router-dom';

const BoxWrapper = () => {
    
  const [tasks,setTasks]=useState([
    {title:'wewe1',type:'web app1',id:1},
    {title:'wewe2',type:'web app2',id:2},
    {title:'wewe3',type:'web app2',id:3},
  ]);
  

 return ( 
  


   
  <div className="project-boxes jsGridView">
        
           {tasks.map((task)=>( 
             <div class="project-box-wrapper" key={task.id}>
             <div className="project-box" style={{backgroundColor: '#e9e7fd'}}>
          <div className="project-box-header">
            <span>December 10, 2020</span>
            <div className="more-wrapper">
              <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>




                  
              </button>
            </div>
          </div>
          <div className="project-box-content-header">
          <Link to="/encaddash/connection"><a> <p className="box-content-header">{task.title}</p></a>   </Link>
            <p className="box-content-subheader">{task.type}</p>
          </div>
          <div className="box-progress-wrapper">
            <p className="box-progress-header">Progress</p>
            <div className="box-progress-bar">
              <span className="box-progress" style={{width: '50%', backgroundColor: '#4f3ff0'}}></span>
            </div>
            <p className="box-progress-percentage">50%</p>
          </div>
          <div className="project-box-footer">
            <div className="participants">
              <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant"/>
              <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant"/>
              <button className="add-participant" style={{color: '#4f3ff0'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div className="days-left" style={{color: '#4f3ff0'}}>
              2 Days Left
            </div>
          </div>
        </div></div>
       )
         
         ) } </div>
         
       

    );
}
 
export default BoxWrapper;