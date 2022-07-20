import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import Aos from 'aos';
import 'aos/dist/aos.css'

import './footer.min.css'

const showContactModal = function () {
    // Click modal button
    let modalButton = document.getElementById("contact-button");
    modalButton.click();
  };

const Footer = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return(
        <div id='footer' className='footer'>
            <div className='mask-base tl'/>
            <div className='mask-top tl'/>
            <div className='container'>
                <div className='footer-content' data-aos="fade-in" data-aos-duration="1000">
                    <div className='w-layout-grid grid-col'>
                        <div className='footer-column'>
                            <div className='footer-content-item'>
                                <Link className='footer-text' to="/home" onClick={() => window.scrollTo(0, 0)}>
                                    Home
                                </Link>
                            </div>
                            <div className='footer-content-item'>
                                <Link className='footer-text' to="/about" onClick={() => window.scrollTo(0, 0)}>
                                    About me
                                </Link>
                            </div>
                            <div className='footer-content-item'>    
                                <Link className='footer-text' to="/projects" onClick={() => window.scrollTo(0, 0)}>
                                    Projects
                                </Link>
                            </div>
                            <div className='footer-content-item'>
                                <span className='footer-text' onClick={() => showContactModal()}>
                                    Contact me!
                                </span>
                            </div>
                        </div>
                        <div className='footer-column'>
                            <div className='footer-content-item'>
                                <a className='footer-text display-inline' href="https://www.linkedin.com/in/alvaro-lopez-b354321b8" target="#blank">
                                    LinkedIn
                                </a>
                            </div>
                            <div className='footer-content-item'>
                                <a className='footer-text display-inline' href="https://github.com/alvarodev-lc" target="#blank">
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className='footer-column'>
                            <div className='footer-content-item'>
                                <Link className='footer-text display-inline' to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                                    Privacy policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_secondary pb-5'>
                        <div className='divider dm'></div>
                        <div className='w-layout-grid footer_secondary-grid'>
                            <div className='left-container'>
                                <div className='copyright'>
                                    <div className='p12'>
                                    © 2023 - Alvaro López. All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='divider dm'></div>
                    </div>
            </div>
        </div>
    )
}

export default Footer