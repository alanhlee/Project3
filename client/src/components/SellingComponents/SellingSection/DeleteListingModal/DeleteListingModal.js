import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ItemAPI from '../../../../utils/ItemAPI'

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    marginTop: '10px',
    float: 'right',
  }
}));

const { deleteItem } = ItemAPI

export default function AlertDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () =>
  {
    deleteItem({postId : props.postId})
    .then((data)=> {
      props.setUpdate(!props.update)
      setOpen(false);
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <Button size="small" variant="contained" color="secondary" disableElevation className={classes.deleteButton} onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this listing?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting this listing will completely remove it. This action is non-reversable. Are you sure you want to delete this listing?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            No, Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Yes, Delete It
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}