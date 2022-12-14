import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DialogActions, DialogContent } from '@mui/material';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';

export default function Form({ handleClose, setDialogBox }) {
    const [details, setDetails] = React.useState({ name: "", age: "", mobilenumber: "", batch: 67 });
    const [validation, setValidation] = React.useState({ name: true, age: true, mobilenumber: true, batch: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        checkValidation();
    };

    const checkValidation = () => {
        let name = details.name;
        let age = details.age;
        let mobilenumber = details.mobilenumber;
        let batch = details.batch;
        let nameValidation = /^[a-zA-Z ]{2,30}$/.test(name);
        let ageValidation = /^[0-9]{1,2}$/.test(age) && age >= 18 && age <= 65;
        let mobilenumberValidation = /^[0-9]{10}$/.test(mobilenumber);
        let batchValidation = true;
        if (nameValidation && ageValidation && mobilenumberValidation && batchValidation) {
            setDialogBox("payment");
        }
        else {
            setValidation({
                name: nameValidation,
                age: ageValidation,
                mobilenumber: mobilenumberValidation,
                batch: batchValidation
            });
        }
    };

    const checkNameValidation = () => {
        let name = details.name;
        let nameValidation = /^[a-zA-Z ]{2,30}$/.test(name);

        setValidation({
            ...validation, name: nameValidation,
        });
    };

    const checkAgeValidation = () => {
        let age = details.age;
        let ageValidation = /^[0-9]{1,2}$/.test(age) && age >= 18 && age <= 65;

        setValidation({
            ...validation, age: ageValidation,
        });
    }

    const checkMobileNumberValidation = () => {
        let mobilenumber = details.mobilenumber;
        let mobilenumberValidation = /^[0-9]{10}$/.test(mobilenumber);

        setValidation({
            ...validation, mobilenumber: mobilenumberValidation,
        });
    }

    const checkBatchValidation = () => {
        let batch = details.batch;
        let batchValidation = true;

        setValidation({
            ...validation, batch: batchValidation,
        });
    }

    return (
        <div>
            <DialogTitle>
                <Typography sx={{ m: 0, flex: 1 }} variant="h5" component="div">
                    Admission Form
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
                    <div>
                        {validation.name ?
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                value={details.name}
                                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                onBlur={() => { checkNameValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="Name *"
                                helperText="Enter a valid Name"
                                value={details.name}
                                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                onBlur={() => { checkNameValidation(); }}
                            />
                        }
                    </div>
                    <div>
                        {validation.age ?
                            <TextField
                                required
                                id="outlined-required"
                                label="Age"
                                value={details.age}
                                onChange={(e) => setDetails({ ...details, age: e.target.value })}
                                onBlur={() => { checkAgeValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="Age *"
                                helperText="Age must be between 18 and 25"
                                value={details.age}
                                onChange={(e) => setDetails({ ...details, age: e.target.value })}
                                onBlur={() => { checkAgeValidation(); }}
                            />
                        }
                    </div>
                    <div>
                        {validation.mobilenumber ?
                            <TextField
                                required
                                id="outlined-required"
                                label="Mobile Number"
                                value={details.mobilenumber}
                                onChange={(e) => setDetails({ ...details, mobilenumber: e.target.value })}
                                onBlur={() => { checkMobileNumberValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="Mobile Number *"
                                helperText="Enter a valid Mobile Number"
                                value={details.mobilenumber}
                                onChange={(e) => setDetails({ ...details, mobilenumber: e.target.value })}
                                onBlur={() => { checkMobileNumberValidation(); }}
                            />
                        }
                    </div>
                    <div>
                        {validation.batch ?
                            <FormControl required sx={{ ml: 1, width: '35ch' }}>
                                <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    label="Batch*"
                                    value={details.batch}
                                    onChange={(e) => setDetails({ ...details, batch: e.target.value })}
                                    onBlur={() => { checkBatchValidation(); }}
                                >
                                    <MenuItem value={67}>6AM - 7AM</MenuItem>
                                    <MenuItem value={78}>7AM - 8AM</MenuItem>
                                    <MenuItem value={89}>8AM - 9AM</MenuItem>
                                    <MenuItem value={56}>5PM - 6PM</MenuItem>
                                </Select>
                            </FormControl>
                            :
                            <></>
                        }
                    </div>
                    <div>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Fee"
                            defaultValue="INR 500"
                        />
                    </div>
                </Box>
            </DialogContent>
            <DialogActions>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: "10px 24px"
                }}>
                    <Button variant="contained" autoFocus onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" autoFocus onClick={handleSubmit}>
                        Submit & Pay
                    </Button>
                </div>
            </DialogActions>
        </div >
    );
}