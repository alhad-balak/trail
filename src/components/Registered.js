import * as React from 'react';
import Box from '@mui/material/Box';
import { DialogActions, DialogContent, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function Registered({ handleClose, setDialogBox }) {

    return (
        <div>
            <DialogTitle>
                <Typography sx={{ m: 0, flex: 1 }} variant="h5" component="div" style={{ color: "green", textAlign: "center" }}>
                    Payment Successful
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <center>
                        <CheckCircleOutlineOutlinedIcon style={{ textAlign: "center", color: "green", fontSize: "100px", textAlign: "center" }} />
                    </center>
                    <br></br>
                    <Box>
                        Your Admission process has been completed successfully. Class details has been sent by SMS to your registered mobile number.
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    margin: "10px 24px"
                }}>
                    <Button variant="contained" autoFocus onClick={() => {
                        handleClose();
                        setTimeout(() => {
                            setDialogBox("form");
                        }, 500);
                    }}>
                        Close
                    </Button>
                </div>
            </DialogActions>
        </div >
    )
}