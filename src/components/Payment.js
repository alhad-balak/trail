import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogActions, DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';

export default function Payment({ handleClose, setDialogBox }) {
    const date = new Date();

    const [paymentDetails, setPaymentDetails] = React.useState({ name: "", cardnumber: "", expirydate: "", cvv: "" });
    const [paymentValidation, setPaymentValidation] = React.useState({ name: true, cardnumber: true, expirydate: true, cvv: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        checkPaymentValidation();
    }

    const completePayment = () => {
        console.log("Mock Payment Completed!");
        console.log(paymentDetails);
    }

    const checkPaymentValidation = () => {
        let name = paymentDetails.name;
        let cardnumber = paymentDetails.cardnumber;
        let expirydate = paymentDetails.expirydate;
        let cvv = paymentDetails.cvv;
        let nameValidation = /^[a-zA-Z ]{2,30}$/.test(name);
        let cardnumberValidation = cardnumber.length === 16 && /^[0-9]{16}$/.test(cardnumber);
        let expirydateValidation = expirydate !== "" ? true : false;
        let cvvValidation = /^[0-9]{3}$/.test(cvv);
        if (nameValidation && cardnumberValidation && expirydateValidation && cvvValidation) {
            completePayment();
            setTimeout(() => {
                setDialogBox("registered");
            }, 500);
        }
        else {
            setPaymentValidation(({
                name: nameValidation,
                cardnumber: cardnumberValidation,
                expirydate: expirydateValidation,
                cvv: cvvValidation
            }));
        }

    };

    const checkNameValidation = () => {
        let name = paymentDetails.name;

        let nameValidation = /^[a-zA-Z ]{2,30}$/.test(name);

        setPaymentValidation({
            ...paymentValidation, name: nameValidation
        });
    };
    const checkCardValidation = () => {
        let cardnumber = paymentDetails.cardnumber;
        let cardnumberValidation = (/^[0-9]{16}$/.test(cardnumber));
        setPaymentValidation({
            ...paymentValidation, cardnumber: cardnumberValidation
        });
    };
    const checkCVVValidation = () => {
        let cvv = paymentDetails.cvv;
        let cvvValidation = /^[0-9]{3}$/.test(cvv);

        setPaymentValidation({
            ...paymentValidation, cvv: cvvValidation
        });
    };
    const checkDateValidation = () => {
        let expirydate = paymentDetails.expirydate;
        let expirydateValidation = expirydate !== "" ? true : false;

        setPaymentValidation({
            ...paymentValidation, expirydate: expirydateValidation
        });
    };

    return (
        <div>
            <DialogTitle>
                <Typography sx={{ m: 0, flex: 1 }} variant="h5" component="div">
                    Make Payment
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '95%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        {paymentValidation.name ?
                            <TextField
                                required
                                id="outlined-required"
                                label="Account Holder's Name"
                                value={paymentDetails.name}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                                onBlur={() => { checkNameValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="Account Holder's Name"
                                helperText="Enter a valid Name"
                                value={paymentDetails.name}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                                onBlur={() => { checkNameValidation(); }}
                            />
                        }
                    </div>
                    <div>
                        {paymentValidation.cardnumber ?
                            <TextField
                                required
                                id="outlined-required"
                                label="Card number"
                                value={paymentDetails.cardnumber}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardnumber: e.target.value })}
                                onBlur={() => { checkCardValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="Card Number"
                                helperText="Enter a valid Card Number"
                                value={paymentDetails.cardnumber}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardnumber: e.target.value })}
                                onBlur={() => { checkCardValidation(); }}
                            />
                        }
                    </div>
                    <div>
                        {paymentValidation.expirydate ?
                            <TextField
                                required
                                id="outlined-required"
                                label="Expiry Date"
                                type="date"
                                defaultValue=""
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, expirydate: e.target.value })}
                                onBlur={() => { checkDateValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="Expiry Date"
                                helperText="Enter a valid Expiry Date"
                                type="date"
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, expirydate: e.target.value })}
                                onBlur={() => { checkDateValidation(); }}
                            />
                        }
                    </div>
                    <div>
                        {paymentValidation.cvv ?
                            <TextField
                                required
                                id="outlined-required"
                                label="CVV"
                                value={paymentDetails.cvv}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                                onBlur={() => { checkCVVValidation(); }}
                            />
                            :
                            <TextField
                                error
                                id="outlined-error"
                                label="CVV"
                                helperText="Enter a valid CVV"
                                value={paymentDetails.cvv}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                                onBlur={() => { checkCVVValidation(); }}
                            />
                        }
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
                    <Button
                        variant="contained"
                        autoFocus
                        sx={{
                            width: '25%',
                        }}
                        onClick={() => { setDialogBox("form") }}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        autoFocus
                        onClick={handleSubmit}
                        sx={{
                            width: '60%',
                        }}>
                        Click to Proceed
                    </Button>
                </div>
            </DialogActions>
        </div >
    )
}