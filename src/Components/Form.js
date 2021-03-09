import React, { useState, useEffect } from 'react';

// Package imports
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

// styled-components
const Styledp = styled.p `
    font-family: ${props => `${props.theme.fonts.raleway}`};
    color: ${props => `${props.theme.colors.light}`};
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 2em;

    a {
        font-family: ${props => `${props.theme.fonts.roboto}`};
        text-decoration : none;

        &:hover {
            text-decoration: underline;
        }
    }
`
const StyledIconButton = styled(IconButton) `

    
`

const StyledBody = styled.div `
    margin: 0 auto;
    text-align: right;

    form {
        display: block;

        .f-ContactFormInput {
            margin-bottom: 1em;

            .f-FormField {
                background-color: ${props => `${props.theme.colors.light}`};
                margin-bottom: 1em;
                border-radius: 4px;
            }
        }
    }
}

    @media only screen and ${props => `${props.theme.device.xs}`} {
        width: 90%;

        form {
            .f-ContactFormInput {
                .f-FormField {                         

                    .MuiFilledInput-root {
                        font-size: 1.35em;
                    }

                    .MuiFormLabel-root {
                        font-size: 1.3em;
                    }                        
                }
            }
        }
    }

    @media only screen and ${props => `${props.theme.device.sm}`} {
        width: 60%;
        padding-top: 5em;
        margin: 0 auto;
        text-align: right;

        form {
            .f-ContactFormInput {
                .f-FormField {

                    .MuiFilledInput-root {
                        font-size: 1em;
                    }

                    .MuiFormLabel-root {
                        font-size: 0.8em;
                    }                            
                }
            }
        }
    }

    @media only screen and ${props => `${props.theme.device.lg}`} {
    }
`

// MaterialUI makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiFilledInput-root': {
            backgroundColor: "#ffffff",
        },
        '& .MuiFilledInput-underline:after': { 
            borderBottomColor: "#171717",
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: "#171717",
        },
        '& .MuiIconButton-label': {
            color: "#171717",
        },
        '& .MuiButtonBase-root': {
            backgroundColor: "#FFFFFF",
            transition: ".2s ease-in background-color, .2s ease-in color",
            "&:hover": {
                '& .MuiIconButton-label': {
                    color: "#FFFFFF",
                },
                backgroundColor: "#171717",
            }
        }
    },
    floatingLabelFocusStyle: {
        color: "#171717",
    }
}));

export const Form = () => {
    init("user_nbna29mf7GTYIJguCdCEE");
    const classes = useStyles();

    const [errorValue, setErrorValue] = useState(false);
    const [open, setOpen] = React.useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {        
        setOpen(false);
    };    

    useEffect(() => {
        
    }, [errorValue])

    function handleSubmit(e) {
        e.preventDefault();
        console.log("output", e);

        emailjs.sendForm('gmail', 'websiteform', e.target, 'user_nbna29mf7GTYIJguCdCEE')
        .then((result) => {
            setErrorValue(true);
            setOpen(true);
            console.log(result.text);
            
        }, (error) => {
            setErrorValue(false);
            setOpen(true);
            console.log(error.text);
        });

        console.log("open: ", open);
        e.target.reset();        
    }    

    return (
        <>
            <Snackbar
                anchorOrigin={{'vertical': 'top', 'horizontal': 'center' }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                key={{'vertical': 'top', 'horizontal': 'center' }}
            >
                { 
                    errorValue ?
                    
                    <Alert onClose={handleClose} severity="success">
                        Your message has been sent!
                    </Alert>

                    :

                    <Alert onClose={handleClose} severity="error">
                        An error has occurred. Please contact us through the email and number provided.
                    </Alert>
                }
                
            </Snackbar>
            <Theme>
            <StyledBody>
                <Styledp>Contact Nell Hensey</Styledp>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <div className="f-ContactFormInput">
                        <TextField
                            type="email"
                            name="email"
                            required={true}
                            id="filled-full-width"
                            label="Your Email"
                            variant="filled"
                            fullWidth
                            className="f-FormField"
                            InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                        />
                        <TextField
                            type="text"
                            name="name"
                            required={true}
                            id="filled-full-width"
                            label="Your Name"
                            variant="filled"
                            fullWidth
                            className="f-FormField"
                            InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                        />
                    </div>
                    <div className="f-ContactFormInput">
                        <TextField
                            name="message"
                            id="filled-multiline-flexible"
                            label="Your Message"
                            multiline
                            rows={8}
                            variant="filled"
                            fullWidth
                            className="f-FormField"
                            InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                        />
                    </div>
                    <StyledIconButton
                        type="submit"
                        variant="contained"
                        disableRipple
                    >
                        <SendIcon />
                    </StyledIconButton>
                </form>
            </StyledBody>
            </Theme>
        </>
    )
}