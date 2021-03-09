import React from 'react'

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// styled-components

const Styledp = styled.p `
    font-size: 1em;
    font-family: ${props => `${props.theme.fonts.raleway}`};
    margin: 0;
`
const StyledProjectDiv = styled.div `
    display: flex;
    width: 40%;
    margin: 1em;
    padding: 1em;
    height: 30vh;
    background-color: ${props => `${props.theme.colors.dark}`};
    transition: ease-in .8s background-color;

    p {
        margin: auto;
        color: ${props => `${props.theme.colors.light}`};
        transition: ease-in .8s color;
    }

    &:hover {
        background-color: ${props => `${props.theme.colors.light}`};
        cursor: pointer;

        p {
            color: ${props => `${props.theme.colors.dark}`};
        }
    }
`

export default function Work({title}) {
    return (
        <Theme>
            <StyledProjectDiv>
                <Styledp>{title}</Styledp>
            </StyledProjectDiv>
        </Theme>
    )
}