import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,

  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Popuptask = (props) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [TaskTitle, setTaskTitle] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  useEffect(() => {
    let data = {
      day: new Intl.DateTimeFormat("en-UK").format(new Date(selectedDate)),
    };
    data.day = data.day.split("/").reverse().join("-");
    setSelectedDate(data.day);
  }, [selectedDate]);


  const addTaskAdmin = async () => {
    let task = {
      task: TaskTitle,
      delivery_datetime: selectedDate,
      member: localStorage.getItem('User')
    };

    let response = await fetch('http://localhost:5000/tasks/Create',{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('Token')}`
      },
      body:JSON.stringify(task)
    })

    let result = await response.json()
    response = await fetch(`http://localhost:5000/group/UpdateTasks/${props.group._id}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('Token')}`
      },
      body: JSON.stringify({
        new : result._id
      })
    })
    result = await response.json()
    console.log(result);

  }

  return (props.popup) ? (
    <div className="modalll">
      <div className="titlepopup">
        <h2>Ajouter Une  Tache</h2>
      </div>

      <form className={classes.root} className="redd" noValidate autoComplete="off">
        <TextField id="standard-basic" label="titre de la tache" onChange={(e) => setTaskTitle(e.target.value)} />
      </form>
      {/* time */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Choisir Une Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />


        </Grid>
      </MuiPickersUtilsProvider>


      <div class="">
        <button className="bbtn1 btnn2" onClick={() => addTaskAdmin()} >save </button>
        <button className="bbtn2 btnn1" onClick={() => props.setPopup(false)} >close</button>


      </div>

    </div>

  ) : "";

}
export default Popuptask;