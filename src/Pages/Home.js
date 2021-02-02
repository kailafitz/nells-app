import React from 'react';
import ControlledCarousel from '../Components/ControlledCarousel';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <>
            <div id="f-HomeBody">
                <ControlledCarousel />
            </div>
            <Footer />
        </>
    )
}