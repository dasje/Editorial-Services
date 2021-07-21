import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        fontFamily: [
            'Times New Roman',
        ].join('.'),
    },
    buttonRoot: {
        fontFamily: [
            'Times New Roman',
        ].join('.'),
        background: 'white',
        color: '#6495ED',
        boxShadow: '1px 2px 2px 2px rgba(255, 255, 255, .9',
    }
})

export default function GetInTouch() {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onDialogClose = () => {
        setFirst('');
        setLast('');
        setEmail('');
        setMessage('');
    };
    const onSnackbarClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
        setSnackbarMessage('');
    };
    const onCreate = () => {
        setSnackbarOpen(true);
        setSnackbarMessage(`Thank you for getting in touch, ${first}.\nI'll be in touch as soon as possible.`);
        onDialogClose();
        };

    const classes = useStyles();

    return (
        <Fragment>
                    <TextField
                        className={classes.root}
                        autoFocus
                        margin="normal"
                        label="First Name"
                        InputProps={{ name: 'first' }}
                        onChange={e => setFirst(e.target.value)}
                        value={first}
                        fullWidth
                    />
                    <TextField
                        className={classes.root}
                        margin="normal"
                        label="Last Name"
                        InputProps={{ name: 'last' }}
                        onChange={e => setLast(e.target.value)}
                        value={last}
                        fullWidth
                    />
                    <TextField
                        className={classes.root}
                        margin="normal"
                        label="Email Address"
                        type="email"
                        InputProps={{ name: 'email' }}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                    />
                    <TextField
                        className={classes.root}
                        margin="normal"
                        label="Message"
                        type="message"
                        multiline={true}
                        maxRows={6}
                        InputProps={{ name: 'message' }}
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        fullWidth
                    />
                        <Box>
                            <Button 
                                className={classes.buttonRoot}
                                onClick={onDialogClose} 
                                color="primary"
                            >
                                Cancel
                            </Button>
                            <Button
                                className={classes.buttonRoot}
                                variant="contained"
                                onClick={onCreate}
                                color="primary"
                            >
                                Send
                            </Button>
                        </Box>
                <Snackbar
                    className='root'
                    open={snackbarOpen}
                    message={snackbarMessage}
                    onClose={onSnackbarClose}
                    autoHideDuration={4000}
                />
            </Fragment>
        );
    }
