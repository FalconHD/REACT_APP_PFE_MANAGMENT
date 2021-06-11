import React from'react'
const StudentDash = () => {
    return (  
          <div class="app-main">

    <div class="task-manager">
     
      <div class="page-content">
        <div class="header">Today Tasks</div>
        <div class="content-categories">
          <div class="label-wrapper">
            <input class="nav-item" name="nav" type="radio" id="opt-1"/>
            <label class="category" for="opt-1">All</label>
          </div>
          <div class="label-wrapper">
            <input class="nav-item" name="nav" type="radio" id="opt-2" checked/>
            <label class="category" for="opt-2">Important</label>
          </div>
          <div class="label-wrapper">
            <input class="nav-item" name="nav" type="radio" id="opt-3"/>
            <label class="category" for="opt-3">Notes</label>
          </div>
          <div class="label-wrapper">
            <input class="nav-item" name="nav" type="radio" id="opt-4"/>
            <label class="category" for="opt-4">Links</label>
          </div>
        </div>
        <div class="tasks-wrapper">
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-1" checked/>
            <label for="item-1">
              <span class="label-text">Dashboard Design Implementation</span>
            </label>
            <span class="tag approved">Approved</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-2" checked/>
            <label for="item-2">
              <span class="label-text">Create a userflow</span>
            </label>
            <span class="tag progress">In Progress</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-3"/>
            <label for="item-3">
              <span class="label-text">Application Implementation</span>
            </label>
            <span class="tag review">In Review</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-4"/>
            <label for="item-4">
              <span class="label-text">Create a Dashboard Design</span>
            </label>
            <span class="tag progress">In Progress</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-5"/>
            <label for="item-5">
              <span class="label-text">Create a Web Application Design</span>
            </label>
            <span class="tag approved">Approved</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-6"/>
            <label for="item-6">
              <span class="label-text">Interactive Design</span>
            </label>
            <span class="tag review">In Review</span>
          </div>
          <div class="header upcoming">Upcoming Tasks</div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-7"/>
            <label for="item-7">
              <span class="label-text">Dashboard Design Implementation</span>
            </label>
            <span class="tag waiting">Waiting</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-8"/>
            <label for="item-8">
              <span class="label-text">Create a userflow</span>
            </label>
            <span class="tag waiting">Waiting</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-9"/>
            <label for="item-9">
              <span class="label-text">Application Implementation</span>
            </label>
            <span class="tag waiting">Waiting</span>
          </div>
          <div class="task">
            <input class="task-item" name="task" type="checkbox" id="item-10"/>
            <label for="item-10">
              <span class="label-text">Create a Dashboard Design</span>
            </label>
            <span class="tag waiting">Waiting</span>
          </div>
        </div>
      </div>
      <div class="right-bar">
        <div class="top-part">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-users">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          <div class="count">6</div>
        </div>
        <div class="header">Schedule</div>
        <div class="right-content">
          <div class="task-box yellow">
            <div class="description-task">
              <div class="time">08:00 - 09:00 AM</div>
              <div class="task-name">Product Review</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
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
          <div class="task-box blue">
            <div class="description-task">
              <div class="time">10:00 - 11:00 AM</div>
              <div class="task-name">Design Meeting</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
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
          <div class="task-box red">
            <div class="description-task">
              <div class="time">01:00 - 02:00 PM</div>
              <div class="task-name">Team Meeting</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
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
          <div class="task-box green">
            <div class="description-task">
              <div class="time">03:00 - 04:00 PM</div>
              <div class="task-name">Release Event</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
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
          <div class="task-box blue">
            <div class="description-task">
              <div class="time">08:00 - 09:00 PM</div>
              <div class="task-name">Release Event</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
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
          <div class="task-box yellow">
            <div class="description-task">
              <div class="time">11:00 - 12:00 PM</div>
              <div class="task-name">Practise</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
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
    </div>
  
  </div>);
}
 
export default StudentDash;