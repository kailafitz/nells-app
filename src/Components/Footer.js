import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// MaterialUI
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Form } from './Form';

const StyledFooter = styled.footer `
    background-color: ${props => `${props.theme.colors.dark}`};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

    #f-MobileFooter {
        display: none;
    }

    #f-BigColumnDiv {
        display: flex;
        justify-content: center;
        align-content: center;

        .f-FooterColumn {
            display: flex;
            justify-content: center;
            align-content: center;
            color: ${props => `${props.theme.colors.light}`};
            min-width: 10%;
            max-width: 15%;

            .f-FooterLogo {
                // margin: .5em
                margin: auto;
                color: ${props => `${props.theme.colors.light}`};
                text-decoration: none;
                font-family: ${props => `${props.theme.fonts.raleway}`};
            }

            .f-FooterIconContainer {
                display: flex;
                align-items: center;
                width: 100%;
                margin: .5em;
                justify-content: center;

                i {
                    padding-right: .5em;
                }

                p {
                    margin: 0;
                }
            }

            .f-FooterIcon {
                color: ${props => `${props.theme.colors.light}`};
                padding: .5em;
                margin: .5em;
                transition: .2s ease color;

                &:hover {
                    color: ${props => `${props.theme.colors.grey}`};
                    cursor: pointer;
                }
            }            
        }
    }
`

// MaterialUI makeStyles
const drawerWidth = "100%";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 1,
      "& .MuiList-padding": {
        padding: "0",
      }
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    closeMenuButton: {
      marginRight: theme.spacing(2),
      color: "#171717",
      backgroundColor: "#FFFFFF",
      borderRadius: "50%",
      padding:  "5px",
      transition: ".2s ease-in background-color, .2s ease-in color",
      "&:hover": {
        backgroundColor: "#171717",
        color: "#FFFFFF",
      }
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      height: "100%",
      paddingTop: ".5em",
      backgroundColor: "#171717",
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    toolbar: {
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      alignContent: "center",
      display: "flex",
      padding: "0",
    },
  }));
  

export default function Footer() {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    return (
        <Theme>
            <>
            <StyledFooter>
                <div id="f-MobileFooter">
                    <i className="fas fa-mobile-alt f-FooterIcon"></i>
                    <i className="far fa-envelope f-FooterIcon"></i>
                    <i className="fab fa-instagram f-FooterIcon"></i>
                    <i className="fab fa-linkedin-in f-FooterIcon"></i>
                </div>
                <div id="f-BigColumnDiv">
                    <div className="f-FooterColumn" id="f-LogoColumn">
                        <NavLink className="f-FooterLogo" to="/">nell hensey</NavLink>
                    </div>
                    <div className="f-FooterColumn" id="f-SocialMediaColumn">
                        <i className="far fa-envelope f-FooterIcon" onClick={handleDrawerOpen}></i>
                        <i className="fab fa-instagram f-FooterIcon"></i>
                        <i className="fab fa-linkedin-in f-FooterIcon"></i>
                        <i className="fab fa-vimeo-v f-FooterIcon"></i>
                    </div>
                </div>
            </StyledFooter>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor='bottom'
                open={isOpen}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} className={classes.closeMenuButton}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Form />
            </Drawer>
            </>
        </Theme>
    )
}