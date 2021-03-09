import React from 'react'

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// styled-components
const Styledp = styled.p `
    font-size: 1em;
    font-family: ${props => `${props.theme.fonts.raleway}`};
    margin: 0;
    font-weight: 600;
    font-style: italic;
`
const StyledAwardDiv = styled.div `
    width: 100%;
    margin: .5em 0;
    text-align: center;

    hr {
        width: 50%;
    }
`

export default function Award({ award }) {
    return (
        <StyledAwardDiv>
            <Theme>
                <Styledp>{award}</Styledp>
            </Theme>
            <hr/>
        </StyledAwardDiv>
    )
}