import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IITGlobersModal } from "../Interfaces/IComponents";


const ITGlobersModal = ({ dialogTitle, dialogContent, isOpen, closeDialog }:IITGlobersModal) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = React.useCallback(() => {
    closeDialog();
    setOpen(false);
  },[closeDialog]);

  React.useEffect(() => 
  {
    if(isOpen){
        handleClickOpen()
    }
    if(open){
        setTimeout(()=>{
            handleClose()
        },5000)
  }
}, [open, isOpen, handleClose]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ cursor: "move" }}>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ITGlobersModal;

// este componente retorna un cuadro de dialogo que al abrir, siempre se cerrara pasados 5seg o bien el usuario de click en cerrar
// recibe como parametros el titulo, contenido un booleano y su callback para cerrar y abrir y cerrar el cuadro de dialogo 