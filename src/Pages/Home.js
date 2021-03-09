import React from 'react';

// styled-components imports
import styled from 'styled-components';

// Component imports
import ControlledCarousel from '../Components/ControlledCarousel';
import Footer from '../Components/Footer';

// styled-components
const StyledBody = styled.div `
    height: 100vh;
    margin-top: 8em;
    margin: 0;
`

export default function Home() {
    return (
        <>
            <ControlledCarousel />
            <Footer />
        </>
    )
}