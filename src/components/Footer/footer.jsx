import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'
import './footer.min.css'

const showContactModal = () => {
    document.getElementById("contact-button").click();
};

const Footer = () => {
    return(
        <div id='footer' className='footer'>
            <div className='mask-base tl'/>
            <div className='mask-top tl'/>
            <div className='container'>
                <div className='footer-content' data-aos="fade-in" data-aos-duration="1000">
                    <div className='w-layout-grid grid-col'>
                        <div className='footer-column'>
                            <div className='footer-content-item'>
                                <Link className='footer-text' to={ROUTES.HOME} onClick={() => window.scrollTo(0, 0)}>
                                    Home
                                </Link>
                            </div>
                            <div className='footer-content-item'>
                                <Link className='footer-text' to={ROUTES.ABOUT} onClick={() => window.scrollTo(0, 0)}>
                                    About me
                                </Link>
                            </div>
                            <div className='footer-content-item'>
                                <Link className='footer-text' to={ROUTES.PROJECTS} onClick={() => window.scrollTo(0, 0)}>
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
                                <a className='footer-text display-inline' href="https://www.linkedin.com/in/alvaro-lopez-b354321b8" target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </div>
                            <div className='footer-content-item'>
                                <a className='footer-text display-inline' href="https://github.com/alvarodev-lc" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className='footer-column'>
                            <div className='footer-content-item'>
                                <Link className='footer-text display-inline' to={ROUTES.PRIVACY} onClick={() => window.scrollTo(0, 0)}>
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
                                    © {new Date().getFullYear()} - Alvaro López. All rights reserved.
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