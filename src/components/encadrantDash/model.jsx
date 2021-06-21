import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))
const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }} >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                 
                </div>
            </DialogTitle>
         
                {children}
          
        </Dialog>
  )
  
    }
 
export default Popup;