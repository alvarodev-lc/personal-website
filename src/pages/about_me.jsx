import { useEffect } from 'react';
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer';

import Aos from 'aos';
import 'aos/dist/aos.css'

import upmicon from '.././static/images/icons/upm_logo.png'
import degreeicon from '.././static/images/icons/degree_icon.png'
import mastersicon from '.././static/images/icons/masters_icon.png'
import magnifying_glassicon from '.././static/images/icons/magnifying_glass_icon.png'



const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="about">
      <Navbar />
      <div>
        {/*Education*/}
        <div className='container-fluid'>
          <div className='row' data-aos="fade-down" data-aos-duration="1500">
            <div className='text-center'>
              <span className='big-text'>
                Education
              </span>
              <img src={upmicon} alt="Upm Icon" width="325" height="150" />
            </div>
          </div>
          {/*Degree*/}
          <div className='pb-100'>
            <div className='row justify-content-around'>
              <div className='col pt-5 min-w-350' data-aos="fade-right" data-aos-duration="1500">
                <div className='row offset-md-2 pb-3'>
                  <div>
                    <img src={degreeicon} alt="Degree Icon" width="50" height="50" />
                    <a className='med-text ps-3' href='http://www.etsisi.upm.es/estudios/grados/61iw/ig' target="#blank">
                      Degree
                    </a>
                  </div>
                </div>
                <div className='row offset-md-2 pt-3'>
                  <span className='normal-text'>
                    I got started on my software developer career studing at Universidad Politécnica de Madrid, where I graduated as a software engineer after 4
                    years.<br /><br />
                    There, I had the oportunity to learn a lot of languages and techologies, although I think the most important thing I learned are good software
                    practices, agile methodologies and software architecture and infrastructure. I also had the chance to work with a lot of other developers,
                    which forced me to learn even more from them.<br /><br />

                    That made me be the developer I am today, and be able to write efficient, sustainable and writable code.
                  </span>
                </div>
              </div>
              {/*Masters*/}
              <div className='col pt-5 min-w-350' data-aos="fade-left" data-aos-duration="1500">
                <div className='row offset-md-1 pb-3'>
                  <div>
                    <img src={mastersicon} alt="Masters Icon" width="50" height="50" />
                    <a className='med-text ps-3' href='http://msde.etsisi.upm.es/' target="#blank">
                      Master's
                    </a>
                  </div>
                </div>
                <div className='row offset-md-1 pt-3'>
                  <span className='normal-text'>
                    After finishing my degree, I knew I wanted to expand my knowledge. I didn't really have any specific subject i wanted to specialize on, so I
                    decided to apply for the Distributed and Embedded Systems Software Master's, where I got accepted. There i got to learn a lot of different branches
                    of the software development world, which was exactly what I was looking for.<br /><br />

                    From the most advanced blockchain or machine learning technologies, to low level electronic and real time software development, I made projects
                    following the whole life cycle, as if it was a real world scenario.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Interests*/}
        <div className='container-fluid' data-aos="fade-up" data-aos-duration="1500">
          <div className='row'>
            <div className='col offset-md-2'>
            <div className='row'>
                  <div>
                    <img src={magnifying_glassicon} alt="Magnifying Glass Icon" width="50" height="50" className='height-auto pb-15'/>
                    <span className='big-text ps-3'>
                      Interests
                    </span>
                  </div>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col offset-md-2 pt-md-3 pb-100'>
              <span className='normal-text'>
                I have always been a very curious person. That translates to my profesional life and hobbies. When i see a project, game or interesting<br />
                system, I can't help but question myself how it was made and if I could make it myself.<br /><br />

                This exact same thing happens when a new techology, framework or language is developed. I love to take a look at the project, understand<br />
                the basics and think of possible use cases where that particular thing could be applied. That leads to tons of fun and interesting project<br />
                ideas to work on, and new opportunities to learn.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
