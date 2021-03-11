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
    font-family: ${props => `${props.theme.fonts.raleway}`};
    color: ${props => `${props.theme.colors.dark}`};
    border: 0;
    outline: 0;
`

// Material makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

export const Logout = () => {
    const classes = useStyles();
    const {logout} = useAuth0();

    return (
        <Theme>
            <div className={classes.root}>
                <StyledButton
                    variant="contained"
                    disableRipple
                    onClick={() =>
                        logout({
                          returnTo: window.location.origin,
                        })
                    }
                >
                    Logout
                </StyledButton>
            </div>
        </Theme>
    )
}
 
export default Logout;