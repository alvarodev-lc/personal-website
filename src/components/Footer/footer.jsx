import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import Aos from 'aos';
import 'aos/dist/aos.css'

import './footer.min.css'

const Footer = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return(
        <div className='footer'>
            <div className='mask-base tl'/>
            <div className='mask-top tl'/>
            <div className='container'>
                <div className='footer-content' data-aos="fade-in" data-aos-duration="1000">
                <Link className='footer-text' to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                    Privacy policy
                </Link>
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
        </div>
    )
}

export default Footer