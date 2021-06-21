import React from 'react'
import Popuptask from './popuptaskstudent'
import { useState, useEffect } from 'react'
const CalenderConx = (props) => {



  useEffect(() => {
    let divs = document.querySelectorAll('.calendar div.day')
    console.log(divs);

    let groups = props.group
    console.log(groups.tasks);
    groups.tasks.map((g) => {
      console.log(g);
    })
  }, [])
  const [openPop, setOpenPop] = useState(false)
  return (
    <div className="calendar-container calendar-show">
      <div className="calender-tab anim-y">
        <div className="week-month">
          <button className=" button active">Week</button>
          <button className=" button button-month">Month</button>
        </div>
        <div className="month-change">
          <div className="current-month">June</div>
          <div className="current-year">2021</div>
        </div>
        <div className="week-month">
          <button className=" button button-weekends">Weekends</button>
          <button className=" button button-task active" onClick={() => setOpenPop(true)}>Add task </button>
          <Popuptask popup={openPop} setPopup={setOpenPop}>

          </Popuptask>
        </div>
      </div>
      <div className="calendar-wrapper anim-y">
        <div className="calendar">
          <Popuptask popup={openPop} setPopup={setOpenPop}>

          </Popuptask>
          <div className="days">Monday</div>
          <div className="days">Tuesday</div>
          <div className="days">Wednesday</div>
          <div className="days">Thursday</div>
          <div className="days">Friday</div>
          <div className="days">Saturday</div>
          <div className="days">Sunday</div>
          <div className="day">28</div>
          <div className="day">29</div>
          <div className="day">30</div>
          <div className="day project-market">1
            <div className="hover-title">Marketing</div>
            <div className="project-detail">Sales report from last month</div>
            <div className="project-detail">Prepare offers for clients</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">2</div>
          <div className="day project-market">3
            <div className="project-detail design">Create 3 illustrations for blog post about design trends</div>
          </div>
          <div className="day">4</div>
          <div className="day">5</div>
          <div className="day">6</div>
          <div className="day project-market">7
            <div className="project-detail develop">Take part in course about future design trends and new technologies</div>
          </div>
          <div className="day">8</div>
          <div className="day">9</div>
          <div className="day">10</div>
          <div className="day">11</div>
          <div className="day">12</div>
          <div className="day">13</div>
          <div className="day">14</div>
          <div className="day project-market">15
            <div className="hover-title">Marketing</div>
            <div className="project-detail">Write an article about design trends</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">16</div>
          <div className="day project-market">17
            <div className="hover-title">Marketing</div>
            <div className="project-detail">Create AdWords campaign</div>
            <div className="project-detail">Send newsletter to clients</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">18</div>
          <div className="day">19</div>
          <div className="day">20</div>
          <div className="day">21</div>
          <div className="day">22</div>
          <div className="day project-finance">23
            <div className="hover-title">Management</div>
            <div className="project-detail finance">Redesign project ui interface for clients and get feedback</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">24</div>
          <div className="day">25</div>
          <div className="day">26</div>
          <div className="day">27</div>
          <div className="day">28</div>
          <div className="day">29</div>
          <div className="day">30</div>
          <div className="day">31</div>
          <div className="day not-work">1</div>

        </div>
      </div>
    </div>

  );
}

export default CalenderConx;