import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

// styled-components imports
import styled from 'styled-components';
import Auth0ProviderwithHistory from '../Components/Auth0ProviderwithHistory';

// Component imports
import Footer from '../Components/Footer';
import Work from '../Components/Work';

// styled-components
const StyledWorksDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export default function Works() {
    return (
        <>
            <StyledWorksDiv>
                <Work title="Falling Walls"/>
                <Work title="Something to Live For"/>
                <Work title="Checkmate"/>
                <Work />
            </StyledWorksDiv>
            <Footer />
        </>
    )
}