    import React from 'react';
    import Button from '@material-ui/core/Button';
  

    import SaveIcon from '@material-ui/icons/Save';
    import TextField from '@material-ui/core/TextField';

   
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const names = [
    'MI',
  
    'EEA',

    
  ];
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  


const SettingEncad = () => {
    const classes = useStyles();
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };



    return (  
          
     
        
     
  <div className="sttngs">
    <h2>SETTINGS</h2>
<div className="tabordion">
  <section> 
    <input className="t" type="radio" name="sections" id="option1" checked/>
    <label for="option1" className="trr"> Account</label>
    <article>
  
    <div className="frm">     
        
<div id='profile-upload'>
<div className="hvr-profile-img">
  
  
  <input type="file" name="logo" id='getval'  className="upload"  id="imag"/>
    
  <div className="icon">
    <div className="camera4"><span></span></div>
  </div>
  </div>
 
  </div>
  
  
 
<div className="tr">


<form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First name" />
  
    </form>
      <div>No results.<br />Please try another search term.</div>

	
		
<form noValidate autoComplete="off">
    <TextField
    label="Last name"
    />
</form>

<div>No results.<br />Please try another search term.</div>
  	
      <div>
      
    
       <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Project name" />
  
    </form>
    
    </div>  
 <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Filier</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>No results.<br />Please try another search term.</div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label=" Number phone" />
  
    </form>
      <div>No results.<br />Please try another search term.</div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="CNE" />
  
    </form>
      <div>No results.<br />Please try another search term.</div>

	
	<label className="label" for="textarea">Description <p id="count"></p></label> 


  
   <textarea className="textarea e" rows="7" cols="25" id="bio" maxlength="500" ></textarea>
   
  </div>

  
 
      
  
  	
  

      
   
         <button>Update profile</button>
      
      </div>
       
      
    </article>
  </section>
  <section id="section2">
    
   
    
    <input className="t" type="radio" name="sections" id="option2"/>
    
   
    
    <label for="option2" className="trr"> Email</label>
    <article>
     
        <div className="tr wwq">
        <div>No results.<br /></div> 			
           
<form noValidate autoComplete="off">
    <TextField
    label="Current mail"
    />
</form>
 <div>No results.<br /></div> 			
           <div>No res.<br />Please try anarch term.</div><form noValidate autoComplete="off">
    <TextField
    label="New mail"
    />
</form>
           <div>No results.<br /></div> 			
           <div>No results.<br />Please try another search term.</div>
           <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      
      </div>
    </form>



      </div>
      <div>No results.<br />Please try another svvvvvvvvvvvvvvvvsssssssssssssss.</div>
      <div>No results.<br />Please try another svvvvvvvvvvvvvvvvsssssssssssssss.</div>
      <div>No results.<br />Please try another svvvvvvvvvvvvvvvvsssssssssssssss.</div>

       <button>Update Email</button>
    </article>
  </section>
  <section id="section3">
    <input className="t" type="radio" name="sections" id="option3"/>
    <label for="option3" className="trr">Password</label>
    <article>
   
      <div className="tr wwq">
      <div>No results.<br /></div> 			
           
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-password-input"
          label="Current password"
          type="password"
          autoComplete="current-password"
        />
      
      </div>
      
    </form>
    <div>No results.<br /></div> 			
           <div>No results.<br />Please try another search term.</div>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-password-input"
          label="New password"
          type="password"
          autoComplete="current-password"
        />
      
      </div>
    </form>
    <div>No results.<br /></div> 			
           <div>No results.<br />Please try another search term.</div>
        
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-password-input"
          label="confirm Password"
          type="password"
          autoComplete="current-password"
        />
      
      </div>
      <div>No results.<br /></div> 			
           <div>No results.<br />Please try another search term.</div>
    </form>


      </div> 
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save password
      </Button>
    </article>
  </section>
  <section id="section4">
    <input className="t" type="radio" name="sections" id="option4"/>
  
  </section>
</div>
  
  
  </div>
    

    );
}
 
export default SettingEncad;