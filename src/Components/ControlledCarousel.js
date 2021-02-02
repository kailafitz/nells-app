import React from 'react';
import StillOne from '../Images/StillOne-Ragin.jpg'
import StillTwo from '../Images/StillTwo-AlmostHome.jpg'
import StillThree from '../Images/StillThree-AlmostHome.jpg'
import StillFour from '../Images/StillFour-Script.jpg'
import StillFive from '../Images/StillFive-Ragin.jpg'
import Carousel from 'react-bootstrap/Carousel'

export default function ControlledCarousel() {
    return (
            <Carousel className="f-Carousel" controls={false}>
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
            </Carousel>
    )
}