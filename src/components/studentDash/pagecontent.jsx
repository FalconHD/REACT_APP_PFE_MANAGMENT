import { groups } from 'd3-array'
import React, { useState, useEffect } from 'react'


const PageContent = () => {

  const [Group, setGroups] = useState([])


  const getGroups = async () => {
    let response = await fetch('http://localhost:5000/group//', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })
    let { Groups } = await response.json()
    Groups.map((group) => {
      group.member.map((m) => {
        if (m._id == localStorage.getItem('User')) {
          console.log(m);
          setGroups([...Group,group])
          console.log(Group);
        }
      })
    })
    console.log(Group);
  }
  useEffect(() => {
    getGroups()


  }, []);

  return (
    <div className="page-content">
      <div className="headerrr">Today Tasks</div>
      <div className="content-categories">
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-1" />
          <label className="category" for="opt-1">Tout</label>
        </div>
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-2" checked />
          <label className="category" for="opt-2">Important</label>
        </div>
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-3" />
          <label className="category" for="opt-3">Remarques</label>
        </div>
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-4" />
          <label className="category" for="opt-4">Liens</label>
        </div>
      </div>
      <div className="tasks-wrapper">
        {
          Group.map((g)=>(
            g.tasks.map((task) => (
              <div className="task">
                <input className="task-item" name="task" type="checkbox" id={task._id} />
                <label for={task._id}>
                  <span className="label-text">{task.task}</span>
                </label>
                <span className="tag progresss">progress
                </span>
              </div>
            ))
            ))
            
        }
        <div className="headerrr upcoming">Tâches à venir</div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-7" />
          <label for="item-7">
            <span className="label-text">Mise en œuvre de la conception du tableau de bord</span>
          </label>
          <span className="tag waiting">Attendre
          </span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-8" />
          <label for="item-8">
            <span className="label-text">Créer un flux d'utilisateurs</span>
          </label>
          <span className="tag waiting">Attendre
          </span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-9" />
          <label for="item-9">
            <span className="label-text">Implémentation de l'application</span>
          </label>
          <span className="tag waiting">Attendre
          </span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-10" />
          <label for="item-10">
            <span className="label-text">Créer une conception de tableau de bord</span>
          </label>
          <span className="tag waiting">Attendre
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
