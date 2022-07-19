import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer';

import Aos from 'aos';

import upmicon from '.././static/images/icons/upm.png'
import degreeicon from '.././static/images/icons/degree.png'
import mastersicon from '.././static/images/icons/masters.png'
import magnifying_glassicon from '.././static/images/icons/magnifying_glass.png'
import vueicon from '.././static/images/icons/vue.png'
import reacticon from '.././static/images/icons/react.png'
import angularicon from '.././static/images/icons/angular.png'
import workericon from '.././static/images/icons/worker.png'
import usizyicon from '.././static/images/icons/usizy.svg'
import mailicon from '.././static/images/icons/mail.png'



const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="about">
      <Navbar />
      <div>
        <div className='container-fluid'>
          {/*Education*/}
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
                  <div className=''>
                    <img src={mastersicon} alt="Masters Icon" width="50" height="50" />
                    <a className='med-text ps-3' href='http://msde.etsisi.upm.es/' target="#blank">
                      Master's
                    </a>
                  </div>
                </div>
                <div className='row offset-md-1 pt-3 max-w-90perc'>
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
        <div>
          <div className='container-fluid' data-aos="fade-down" data-aos-duration="1500">
            <div className='row'>
              <div className='col offset-md-2'>
                <div className='row'>
                  <div>
                    <img src={magnifying_glassicon} alt="Magnifying Glass Icon" width="50" height="50" className='height-auto pb-15' />
                    <span className='big-text ps-3'>
                      Interests
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col offset-md-2 pt-md-3 pb-100 max-w-70perc'>
                <span className='normal-text'>
                  I have always been a very curious person. That translates to my profesional life and hobbies. When i see a project, game or interesting
                  system, I can't help but question myself how it was made and if I could make it myself.<br /><br />

                  This exact same thing happens when a new techology, framework or language is developed. I love to take a look at the project, understand
                  the basics and think of possible use cases where that particular thing could be applied. That leads to tons of fun and interesting project
                  ideas to work on, and new opportunities to learn.
                </span>
              </div>
            </div>
          </div>
          {/*Javascript frameworks images*/}
          <div className='col offset-md-2 pt-md-3 pb-100 max-w-70perc'>
          <div id="js-frameworks" className='row pt-5 ps-130'>
                <div className='col-4 js-framework-image' data-aos="fade-right" data-aos-duration="1500">
                  <img src={vueicon} alt="Vue Icon" className='pb-2' width="300" height="250" />
                </div>
                <div className='col-4 js-framework-image' data-aos="fade-down" data-aos-duration="1500">
                  <img src={reacticon} alt="React Icon" className='pb-2' width="300" height="250" />
                </div>
                <div className='col-4 js-framework-image' data-aos="fade-left" data-aos-duration="1500">
                  <img src={angularicon} alt="Angular Icon" className='pb-2' width="300" height="250" />
                </div>
              </div>
              </div>
          {/*Why am I a good developer*/}
          <div className='row' data-aos="fade-down" data-aos-duration="3000">
            <div className='col offset-md-2 pt-md-3 pb-50 max-w-70perc'>
              <span className='normal-text'>
                And that's how this project was born! This website was developed using React. I also had the opportunity to check out Vue and Angular, which are
                very similar, but each and every one of them have their unique use cases which makes it very important to chose the correct one.<br /><br />

                A good developer should invest time in thinking, structuring and choosing the right tools before writing any line of code before starting a project.
                That makes the difference between a sustainable and robust product and a failure that will fall eventually.<br/><br/>

                Starting a project is easy, ending it is not.<br/><br/>
              </span>
            </div>
          </div>
          <div className='row pb-200' data-aos="zoom-in-right" data-aos-duration="1500">
          <div className='col offset-md-2 pt-md-3 max-w-70perc'>
              <span className='normal-text'>
                Want to know more about me? Check out my projects <Link to="/projects">here!</Link> 
              </span>
          </div>
          </div>
        </div>
        {/*Experience*/}
        <div className='row' data-aos="fade-down" data-aos-duration="1500">
            <div className='text-center'>
              <img src={workericon} alt="Worker Icon" className='pb-3' width="100" height="120" />
              <div className='display-inline ps-4'>
                <span className='big-text'>
                  Experience
                </span>
              </div>            
            </div>
          </div>
        </div>
        {/*Usizy*/}
        <div className='pb-100'>
            <div className='row justify-content-around'>
              <div className='col pt-5 min-w-350' data-aos="fade-right" data-aos-duration="1500">
                <div className='row offset-md-2 pb-3'>
                  <div>
                    <img src={usizyicon} alt="Usizy Icon" width="50" height="60" />
                    <a className='med-text ps-3' href='https://usizy.com/' target="#blank">
                      Usizy
                    </a>
                  </div>
                </div>
                <div className='row offset-md-2 pt-3'>
                  <span className='normal-text'>
                    Usizy is a startup that offers the most advanced and accurate size recommendation technology in the market. They provide a full range
                    of eCommerce solutions based on machine learning and under one single platform.<br/><br/>

                    This is where I currently work, and where I have learned the most in my life. From machine learning and complex dashboards for several 
                    eCommerces, to analysis and actions to reduce returns and get the best CVR possible.<br/><br/>
                    
                    We work with the latest technology to automatically give service to every product our clients uploads to their eCommerce and to get
                    all data available and store it to make our system stronger and get the best service and KPI's possible. Usizy boosts businesses 
                    regardless of their scope, from apparel to bycicles, footwear and bras, we have a solution for almost everything.<br/><br/>

                    With only 2 lines of code, we can integrate any client from around the world, and give service to most if not all of their brands out of 
                    the box.
                  </span>
                </div>
              </div>
              {/*NexusIT*/}
              <div className='col pt-5 min-w-350' data-aos="fade-left" data-aos-duration="1500">
                <div className='row offset-md-1 pb-3'>
                  <div>
                    <img src={mailicon} alt="Nexus Icon" className='pb-2' width="70" height="60" />
                    <a className='med-text ps-3' href='https://www.nexus-it.es/' target="#blank">
                      Nexus IT
                    </a>
                  </div>
                </div>
                <div className='row offset-md-1 pt-3 max-w-90perc'>
                  <span className='normal-text'>
                    I had my first internship at Nexus. They create solutions to help companies digitalize their services, mainly offering 2 products: OpenLis
                    and Plyca.<br/><br/>

                    I worked on Plyca, which is a solution for digitalizing auctioning, managing records and, overall, speeding up processes. Plyca is a software
                    written in Java which is very flexible for customers. I had the oportunity to work on it and handle customers simoultaneously, which was a 
                    very good experience for me, since I learned a lot.<br/><br/>

                    OpenLis is a product that supports clinical laboratories management, unifying the pre-analysis and post-analysis phases, while also making them
                    more flexible and speeding the process.
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
