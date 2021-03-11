import React from 'react';

// Package imports
import {useAuth0} from '@auth0/auth0-react';

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button) `
    .MuiButton-contained {
        font-family: ${props => `${props.theme.fonts.raleway}`};
        text-transform: lowercase;
        background-color: ${props => `${props.theme.colors.dark}`};
        color: ${props => `${props.theme.colors.light}`};
        border: 0;
        outline: 0;
    }
`

// Material makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiButton-contained': {
            fontFamily: "'Raleway', sans-serif",
            backgroundColor: "#171717",
            textTransform: "lowercase",
            color: "#ffffff",
            borderRadius: "0",
            padding: ".5em",
        },
    },
}));

export const Login = () => {
    const classes = useStyles();
    const {loginWithRedirect} = useAuth0();
    console.log("Login", loginWithRedirect);

    return (
        <Theme>
            <div className={classes.root}>
                <StyledButton
                    variant="contained"
                    disableRipple
                    onClick={() => loginWithRedirect()}
                >
                    Login
                </StyledButton>
            </div>
        </Theme>
    )
}
 
export default Login;