import React from 'react'
import Award from '../Components/Award'
import Footer from '../Components/Footer'
import Headshot from '../Images/Headshot.png'

export default function About() {
    return (
        <>
        <div id="f-AboutBody">
            <div className="f-AwardContainer">
                <Award award="Oscar for Best Film 2019"/>
                <Award award="Grammy for Best Script 2016"/>
                <Award award="Dingle Film Festival Overall Winner 2018"/>
                <Award award="FreshFilm Finalist 2015"/>
                <Award award="International Award Winning Movie Maker"/>
                <Award award="Cast Film Festival Overall Winner"/>
            </div>
            <div id="f-AboutContainer">
                <div id="f-HeadshotDiv" >
                    <img src={Headshot} id="f-Headshot"/>
                </div>
                <div id="f-ParaDiv">
                    <p className="f-p">
                        Nell Hensey is an upcoming young Irish woman making waves in today's film industry. She has showcased her work not only in Ireland, but on the international stage from a very young age.
                        <br/>
                        <br/>
                        Through academic achievement and professional experience, she has been shaped by awards small and large in many areas of the arts through the years. Her abilities in film-making are something to be admired from her increasing success. However, proof of her success and determination is from an even greater skill that goes beyond the camera lens and the script. A visionary with the abilities of a project manager- Nell knows what it takes to make a film in all departments and how to get it done right.
                        <br/>
                        <br/>
                        A perfectionist but a realist, Nell Hensey is front and centre and on top of her game.
                    </p>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}