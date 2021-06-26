import React from 'react'
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
const Modalstudent =(props)=>{
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return(props.modale)?(
        <div className="modallll">
       <div className="titlepopup">
       <h2>Ajouter Un Reunion </h2> 
      </div>
       
        
      
        <form className={classes.root} className="redd" noValidate autoComplete="off">
      <TextField id="standard-basic" label="titre de la tache" />
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
  <button className="bbtn1 btnn2"  onClick={()=> props.setModale(false)} >sauvegarder  </button> 
  <button className="bbtn2 btnn1"  onClick={()=> props.setModale(false)} >Fermer</button>
 
 
</div>
        
        </div>

    ):"";

}

export default Modalstudent;