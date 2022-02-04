import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function DialogProvider() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(``);
    const handleClickOpen = (title, isPrivecy) => {
        const privcy = `We automatically collect certain information to help us understand how our users use the Services (which we will refer to in this Privacy Policy collectively as "Usage Data").`
        const termOfService = `By being a member and using Budget limit, you agree to everything on this page. We have to do this to protect both you and us and make running this business possible. If you break these terms, you can’t use  Budget limit, anymore.`
        setOpen(true);
        setTitle(title);
        if (isPrivecy)
            setDescription(privcy)
        else
            setDescription(termOfService)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                By registering, I agree to &nbsp;
                <Link to onClick={() => handleClickOpen("Terms of Service", 0)} underline="always" sx={{ color: 'text.primary' }}>
                    Terms of Service
                </Link>
                &nbsp;and&nbsp;
                <Link to onClick={() => handleClickOpen("Privacy Policy", 1)} underline="always" sx={{ color: 'text.primary' }}>
                    Privacy Policy
                </Link>
                .
            </Typography>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
