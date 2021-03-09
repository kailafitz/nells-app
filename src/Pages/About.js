import React from 'react';

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// Component imports
import Award from '../Components/Award';
import Footer from '../Components/Footer';
import {Form} from '../Components/Form';

// Media imports
import Headshot from '../Images/Headshot.png';

// styled-components
const Styledp = styled.p `
    font-size: 1em;
    font-family: ${props => `${props.theme.fonts.roboto}`};
    margin: 0;
`

const StyledBody = styled.div `
    flex: 1 0 auto;
    width: 100%;
    padding-bottom: 5em;

    #f-AwardContainer {
        padding: 3em 0;
    }

    #f-AboutContainer {
        width: 70%;
        max-width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-content: flex-start;

        #f-HeadshotDiv {
            width: 45%;
            margin: 1em;

            #f-Headshot {
                width: 100%;
                -webkit-box-shadow: 1px 3px 10px 0px ${props => `${props.theme.colors.dark}`}; 
                box-shadow: 1px 3px 10px 0px ${props => `${props.theme.colors.dark}`};
            }
        }

        #f-ParaDiv {
            width: 40%;
            margin: 1em;
        }
    }
`

export default function About() {
    return (
        <>
            <Theme>
                <StyledBody>
                    <div id="f-AwardContainer">
                        <Award award="Oscar for Best Film 2019"/>
                        <Award award="Grammy for Best Script 2016"/>
                        <Award award="Dingle Film Festival Overall Winner 2018"/>
                        <Award award="FreshFilm Finalist 2015"/>
                        <Award award="International Award Winning Movie Maker"/>
                        <Award award="Cast Film Festival Overall Winner"/>
                    </div>
                    <div id="f-AboutContainer">
                        <div id="f-HeadshotDiv" >
                            <img src={Headshot} id="f-Headshot" alt="Nell's Profile"/>
                        </div>
                    <div id="f-ParaDiv">
                            <Styledp>
                                Nell Hensey is an upcoming young Irish woman making waves in today's film industry. She has showcased her work not only in Ireland, but on the international stage from a very young age.
                                <br/>
                                <br/>
                                Through academic achievement and professional experience, she has been shaped by awards small and large in many areas of the arts through the years. Her abilities in film-making are something to be admired from her increasing success. However, proof of her success and determination is from an even greater skill that goes beyond the camera lens and the script. A visionary with the abilities of a project manager- Nell knows what it takes to make a film in all departments and how to get it done right.
                                <br/>
                                <br/>
                                A perfectionist but a realist, Nell Hensey is front and centre and on top of her game.
                            </Styledp>
                        </div>
                    </div>
                    
                </StyledBody>
                <Form />
                <Footer />
            </Theme>
        </>
    )
}