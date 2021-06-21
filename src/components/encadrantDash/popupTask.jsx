import React from 'react'
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
function PopupTask(props){

    const classes = useStyles();

    return(props.wewe)?(
        <div className="modall">
       <div className="titlepopup">
       <h2>Ajouter Votre Tache</h2> 
      </div>
       
        
      
        <form className={classes.root} className="redd" noValidate autoComplete="off">
      <TextField id="standard-basic" label="titre de la tache" />
    </form>
    <div class="">
  <button className="bbtn1 btnn2" onClick={()=> props.setWewe(false)}>save </button> 
  <button className="bbtn2 btnn1" onClick={()=> props.setWewe(false)}>close</button>
 
 
</div>
        
        </div>
    ):"";
}   
export default PopupTask;