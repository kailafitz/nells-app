import React from 'react';

// styled-components imports
import styled from 'styled-components';

// Media imports
import StillOne from '../Images/StillOne-Ragin.jpg'
import StillTwo from '../Images/StillTwo-AlmostHome.jpg'
import StillThree from '../Images/StillThree-AlmostHome.jpg'
import StillFour from '../Images/StillFour-Script.jpg'
import StillFive from '../Images/StillFive-Ragin.jpg'
import Carousel from 'react-bootstrap/Carousel'

// styled-components
const StyledCarousel = styled(Carousel) `
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -3;
    outline: none;
    border: none;
    overflow: hidden;

    .f-CarouselItem {
        width: 100vw;
        // display: block;
        // outline: none;
        // border: none;
        overflow: hidden;

        .f-CarouselImg {
            // width: 100%;
            filter: grayscale(40px);
            outline: none;
            border: none;
            margin: auto;
        }
    }
`

export default function ControlledCarousel() {
    return (
            <StyledCarousel controls={false}>
                <Carousel.Item className="f-CarouselItem">
                    <img
                        className="d-block center f-CarouselImg"
                        src={ StillOne }
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="f-CarouselItem">
                    <img
                        className="d-block center f-CarouselImg"
                        src={ StillTwo }
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="f-CarouselItem">
                  
                    <img
                        className="d-block center f-CarouselImg"
                        src={ StillThree }
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="f-CarouselItem">
                    
                    <img
                        className="d-block center f-CarouselImg"
                        src={ StillFour }
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="f-CarouselItem">
                    
                    <img
                        className="d-block center f-CarouselImg"
                        src={ StillFive }
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </StyledCarousel>
    )
}