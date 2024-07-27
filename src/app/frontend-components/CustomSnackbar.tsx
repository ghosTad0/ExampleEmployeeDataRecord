import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

// type CustomSnackbarPropType = {
//     message: string,
//     setAlert: any,
//     severity: string
// }


export default function CustomSnackbar(props: any) {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    props.setAlert(null)
    console.log(props.message)
    setOpen(false);
  };



  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "right"}} >
      <Alert onClose={handleClose} severity={props.severity} variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
}