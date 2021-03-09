import React from 'react'

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

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
            }            
        }
    }
`

export default function Footer() {
    return (
        <Theme>
            <StyledFooter>
                <div id="f-MobileFooter">
                    <i className="fas fa-mobile-alt f-FooterIcon"></i>
                    <i className="far fa-envelope f-FooterIcon"></i>
                    <i className="fab fa-instagram f-FooterIcon"></i>
                    <i className="fab fa-linkedin-in f-FooterIcon"></i>
                </div>
                <div id="f-BigColumnDiv">
                    <div className="f-FooterColumn" id="f-LogoColumn">
                        <p className="f-FooterLogo">nell hensey</p>
                    </div>
                    <div className="f-FooterColumn" id="f-SocialMediaColumn">
                        <i className="far fa-envelope f-FooterIcon"></i>
                        <i className="fab fa-instagram f-FooterIcon"></i>
                        <i className="fab fa-linkedin-in f-FooterIcon"></i>
                        <i className="fab fa-vimeo-v f-FooterIcon"></i>
                    </div>
                </div>
            </StyledFooter>
        </Theme>
    )
}