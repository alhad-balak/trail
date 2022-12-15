import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Form from "./Form";
import Payment from "./Payment";
import Registered from "./Registered";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Homepage() {
    const [open, setOpen] = React.useState(false);
    const [dialogBox, setDialogBox] = React.useState("form");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (dialogBox === "registered")
            setDialogBox("form");
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                style={{
                    position: "absolute",
                    alignSelf: "center",
                    height: "8%",
                    top: "34%",
                    fontSize: "larger",
                    fontWeight: "bold",
                }}
                sx={{
                    width: {
                        xs: "64%",
                        sm: "30%",
                        md: "24%",
                    },
                    fontSize: {
                        xs: "12.5rem",
                        sm: "2.5rem",
                        md: "larger",
                    },
                    left: {
                        xs: "18%",
                        sm: "35%",
                        md: "38%",
                    },
                }}>
                Register Now!
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                maxWidth="sm"
                fullWidth
            >

                {dialogBox === "form" ?
                    <Form handleClose={handleClose} setDialogBox={setDialogBox} /> : <></>}

                {dialogBox === "payment" ?
                    <Payment handleClose={handleClose} setDialogBox={setDialogBox} /> : <></>}

                {dialogBox === "registered" ?
                    <Registered handleClose={handleClose} setDialogBox={setDialogBox} /> : <></>}
            </Dialog>
        </div >
    );
}