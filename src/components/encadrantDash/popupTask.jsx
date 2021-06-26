import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function PopupTask(props) {
  const [tastTitle, setTaskTitle] = useState("")
  const classes = useStyles();

  // useEffect(()=>{
  //   console.log(tastTitle);
  // },[tastTitle])

  console.log(props.group);
  const addTaskEtudiant = async () => {
    let task = {
      task: tastTitle,
      member: localStorage.getItem('User')
    }

    let response = await fetch('http://localhost:5000/tasks/Create', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('Token')}`
      },
      body: JSON.stringify(task)
    })

    let result = await response.json()
    let taskId = result._id
    task = {
      new: taskId
    }
    
    response = await fetch(`http://localhost:5000/group/UpdateTasks/${props.group._id}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('Token')}`
      },
      body: JSON.stringify(task)
    })
    result = await response.json()
    console.log(result);
  }
  return (props.wewe) ? (
    <div className="modall">
      <div className="titlepopup">
        <h2>Ajouter Votre Tache</h2>
      </div>
      <form className={classes.root} className="redd" noValidate autoComplete="off">
        <TextField id="standard-basic" label="titre de la tache" onChange={(e) => { setTaskTitle(e.target.value) }} />
      </form>
      <div class="">
        <button className="bbtn1 btnn2" onClick={addTaskEtudiant}>sauvegarder  </button>
        <button className="bbtn2 btnn1" onClick={() => {props.startnewFetch();props.setWewe(false)}}>Fermer</button>
      </div>

    </div>
  ) : "";
}
export default PopupTask;