import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import { createMuiTheme, makeStyles, useTheme } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';






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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  "allo"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 220,
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





const ModalShow = (props) => {

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [members, setMembers] = useState([])
  const [group, setGroup] = useState({
    name: "",
    member: [],
    leader: "",
    subject: ""
  });
  const [res, setRes] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const getMembers = async () => {
    let response = await fetch('http://localhost:5000/auth/Users/', {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })
    let data = await response.json()
    setMembers(data.data)
  }

  useEffect(() => {
    getMembers()
  }, []);

  const getName = (value) => {
    let member = members.find(member => member._id == value)
    return member.name
  }

  const handleChange = (event) => {
    setPersonName(event.target.value);
    setGroup({ ...group, member: [...event.target.value] });
  };

  const getGroup = (event) => {
  };
  useEffect(() => {

    console.log(group);
  }, [group]);

  const CreateGroup = async () => {
    let response = await fetch('http://localhost:5000/group/Create', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('Token')}`
      },
      body: JSON.stringify(group)
    })

    let data = await response.json()
    console.log(data);
  }

  const addGroupWithSubject = async () => {
    let response = await fetch('http://localhost:5000/Subject/add', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('Token')}`
      },
      body: JSON.stringify({
        title: group.subject
      })
    })
    let data = await response.json()
    response = await fetch('http://localhost:5000/group/Create', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('Token')}`
      },
      body: JSON.stringify({ ...group, subject: data._id })
    })
    data = await response.json()
    setOpenPopup(false)
  }



  const handleChangeOne = (event) => {
    setGroup({ ...group, leader: event.target.value });
  };

  const handleCloseOne = () => {
    setOpen(false);
  };

  const handleOpenOne = () => {
    setOpen(true);
  };

  const { openPopup, setOpenPopup } = props;


  return (
    <div className="modal">

      <form className={classes.root} className="space" noValidate autoComplete="off">


        <TextField className="fields" id="standard-basic" label="Le Titre De Projet" onChange={(e) => { setGroup({ ...group, name: e.target.value, subject: e.target.value }) }} />


      </form>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Les Mombres De Groupe</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={getName(value)} className={classes.chip} />)
              )}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {members ? members.map((name) => (
            <MenuItem key={name.name} value={name._id} style={getStyles(name, personName, theme)} >
              {name.name}
            </MenuItem>
          )) : null}
        </Select>
      </FormControl>


      <form className={classes.root} className="space" noValidate autoComplete="off">

        <Button className={classes.button} onClick={handleOpenOne}>
          Responsable
        </Button><br />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Responsable</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleCloseOne}
            onOpen={handleOpenOne}
            value={group.leader}
            onChange={handleChangeOne}
          >
            {members ? members.map((name) => (
              <MenuItem key={name.name} value={name._id} style={getStyles(name, personName, theme)} >
                {name.name}
              </MenuItem>
            )) : null}
          </Select>
        </FormControl>
      </form>
      <div className="position">
        <Button
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          size="small"
          onClick={() => { setOpenPopup(false) }}
        >
          Cancle
        </Button>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          onClick={addGroupWithSubject}
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
        //  onClick={()=>{setOpenPopup(false)}}

        >
          Save
        </Button>
      </div>
    </div>
  );
}




export default ModalShow;