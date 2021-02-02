import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div id="f-MobileFooter">
                <i className="fas fa-mobile-alt f-FooterIcon"></i>
                <i className="far fa-envelope f-FooterIcon"></i>
                <i className="fab fa-instagram f-FooterIcon"></i>
                <i className="fab fa-linkedin-in f-FooterIcon"></i>
            </div>
            <div id="f-BigColumnDiv">
                <div className="f-FooterColumn" id="f-LogoColumn">
                    <p className="f-p f-FooterLogo">nell hensey</p>
                </div>
                <div className="f-FooterColumn" id="f-ContactUsColumn">
                    <div className="f-FooterIconContainer">
                        <i className="fas fa-mobile-alt"></i>
                        <p className="f-p">00353-86-207-8533</p>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="far fa-envelope"></i>
                        <p className="f-p">nellhensey@hotmail.com</p>
                    </div>                    
                </div>
                <div className="f-FooterColumn" id="f-SocialMediaColumn">
                    <i className="fab fa-instagram f-FooterIcon"></i>
                    <i className="fab fa-linkedin-in f-FooterIcon"></i>
                </div>
            </div>
        </footer>
    )
}