import React from 'react'
import '../../assets/css/style.scss';
import Logo from '../../assets/photos/Logo.png';



export const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="ftop d-flex">
            <div className="fl">
                <h3>Contact Us</h3>
                <div className="fline">
                    <div className="fline-name"><h5>Email</h5></div>
                    <div className="fline-info"><p>needhelp@Organia.com</p></div>
                </div>
                <div className="fline">
                    <div className="fline-name"><h5>Phone</h5></div>
                    <div className="fline-info"><p>666 888 888</p></div>
                </div>
                <div className="fline">
                    <div className="fline-name"><h5>Email</h5></div>
                    <div className="fline-info"><p>needhelp@Organia.com</p></div>
                </div>
            </div>
            <div className="fm d-flex flex-column align-items-center">
                <div className="fm-top">
                    <img src={Logo} alt="" />
                    <h2>Organick</h2>
                </div>
                <div className="fm-mid">
                    <p className="text-center">Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing </p>
                </div>
                <div className="fm-bot">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="fr">
                <h3>Utility Pages</h3>
                <h6>Style Guide</h6>
                <h6>404 Not Found</h6>
                <h6>Password Protected</h6>
                <h6>Licences</h6>
                <h6>Changelog</h6>
            </div>
        </div>
        <div className="fbottom text-center">
            <p>Copyright © <b>Organick</b> | Designed by VictorFlow Templates - Powered by <b>Webflow</b></p>
        </div>
    </div>
    </>
  )
}
