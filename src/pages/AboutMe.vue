<script setup>
import { ROUTES } from '../routes'
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'

import upmicon from '../static/images/icons/upm.webp'
import degreeicon from '../static/images/icons/degree.webp'
import mastersicon from '../static/images/icons/masters.webp'
import magnifying_glassicon from '../static/images/icons/magnifying_glass.webp'
import vueicon from '../static/images/icons/vue.webp'
import reacticon from '../static/images/icons/react.webp'
import angularicon from '../static/images/icons/angular.png'
import workericon from '../static/images/icons/worker.webp'
import usizyicon from '../static/images/icons/usizy.svg'
import mailicon from '../static/images/icons/mail.webp'
</script>

<template>
  <div id="about">
    <Navbar />
    <div>
      <div class="container-fluid">
        <div class="row" data-aos="fade-down" data-aos-duration="1500">
          <div class="text-center">
            <span class="big-text">Education</span>
            <img :src="upmicon" alt="Upm Icon" width="325" height="150" />
          </div>
        </div>

        <div class="pb-100">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="row gx-5 pt-5">
                <div class="col-md-6" data-aos="fade-right" data-aos-duration="1500">
                  <div class="pb-3">
                    <img :src="degreeicon" alt="Degree Icon" width="50" height="50" />
                    <a class="med-text ps-3" href="http://www.etsisi.upm.es/estudios/grados/61iw/ig" target="_blank" rel="noreferrer">Degree</a>
                  </div>
                  <div class="pt-3">
                    <span class="normal-text">
                      I got started on my software developer career studing at Universidad Politécnica de Madrid, where I graduated as a software engineer after 4
                      years.<br /><br />
                      There, I had the oportunity to learn a lot of languages and techologies, although I think the most important thing I learned are good software
                      practices, agile methodologies and software architecture and infrastructure. I also had the chance to work with a lot of other developers,
                      which forced me to learn even more from them.<br /><br />
                      That made me be the developer I am today, and be able to write efficient, sustainable and writable code.
                    </span>
                  </div>
                </div>

                <div class="col-md-6" data-aos="fade-left" data-aos-duration="1500">
                  <div class="pb-3">
                    <img :src="mastersicon" alt="Masters Icon" width="50" height="50" />
                    <a class="med-text ps-3" href="http://msde.etsisi.upm.es/" target="_blank" rel="noreferrer">Master's</a>
                  </div>
                  <div class="pt-3">
                    <span class="normal-text">
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
        </div>
      </div>

      <div>
        <div class="container-fluid" data-aos="fade-down" data-aos-duration="1500">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="row">
                <div>
                  <img :src="magnifying_glassicon" alt="Magnifying Glass Icon" width="50" height="50" class="height-auto pb-15" />
                  <span class="big-text ps-3">Interests</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 offset-md-2 pt-md-3 pb-100">
              <span class="normal-text">
                I have always been a very curious person. That translates to my profesional life and hobbies. When i see a project, game or interesting
                system, I can't help but question myself how it was made and if I could make it myself.<br /><br />
                This exact same thing happens when a new techology, framework or language is developed. I love to take a look at the project, understand
                the basics and think of possible use cases where that particular thing could be applied. That leads to tons of fun and interesting project
                ideas to work on, and new opportunities to learn.
              </span>
            </div>
          </div>
        </div>

        <div class="col-md-8 offset-md-2 pt-md-3 pb-100">
          <div id="js-frameworks" class="row pt-5 ps-130">
            <div class="col-4 js-framework-image" data-aos="fade-right" data-aos-duration="1500">
              <img :src="vueicon" alt="Vue Icon" class="pb-2" width="300" height="250" />
            </div>
            <div class="col-4 js-framework-image" data-aos="fade-down" data-aos-duration="1500">
              <img :src="reacticon" alt="React Icon" class="pb-2" width="300" height="250" />
            </div>
            <div class="col-4 js-framework-image" data-aos="fade-left" data-aos-duration="1500">
              <img :src="angularicon" alt="Angular Icon" class="pb-2" width="300" height="250" />
            </div>
          </div>
        </div>

        <div class="row" data-aos="fade-down" data-aos-duration="3000">
          <div class="col-md-8 offset-md-2 pt-md-3 pb-50">
            <span class="normal-text">
              And that's how this project was born! This website was developed using Vue. I also had the opportunity to check out React and Angular, which are
              very similar, but each and every one of them have their unique use cases which makes it very important to chose the correct one.<br /><br />
              A good developer should invest time in thinking, structuring and choosing the right tools before writing any line of code before starting a project.
              That makes the difference between a sustainable and robust product and a failure that will fall eventually.<br /><br />
              Starting a project is easy, ending it is not.<br /><br />
            </span>
          </div>
        </div>

        <div class="row pb-200" data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="col-md-8 offset-md-2 pt-md-3">
            <span class="normal-text">
              Want to know more about me? Check out my projects <RouterLink :to="ROUTES.PROJECTS">here!</RouterLink>
            </span>
          </div>
        </div>
      </div>

      <div class="row" data-aos="fade-down" data-aos-duration="1500">
        <div class="text-center">
          <img :src="workericon" alt="Worker Icon" class="pb-3" width="100" height="120" />
          <div class="display-inline ps-4">
            <span class="big-text">Experience</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-100">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="row gx-5 pt-5">
            <div class="col-md-6" data-aos="fade-right" data-aos-duration="1500">
              <div class="pb-3">
                <img :src="usizyicon" alt="Usizy Icon" width="50" height="60" />
                <a class="med-text ps-3" href="https://usizy.com/" target="_blank" rel="noreferrer">Usizy</a>
              </div>
              <div class="pt-3">
                <span class="normal-text">
                  Usizy is a startup that offers the most advanced and accurate size recommendation technology in the market. They provide a full range
                  of eCommerce solutions based on machine learning and under one single platform.<br /><br />
                  This is where I currently work, and where I have learned the most in my life. From machine learning and complex dashboards for several
                  eCommerces, to analysis and actions to reduce returns and get the best CVR possible.<br /><br />
                  We work with the latest technology to automatically give service to every product our clients uploads to their eCommerce and to get
                  all data available and store it to make our system stronger and get the best service and KPI's possible. Usizy boosts businesses
                  regardless of their scope, from apparel to bycicles, footwear and bras, we have a solution for almost everything.<br /><br />
                  With only 2 lines of code, we can integrate any client from around the world, and give service to most if not all of their brands out of the box.
                </span>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-left" data-aos-duration="1500">
              <div class="pb-3">
                <img :src="mailicon" alt="Nexus Icon" class="pb-2" width="70" height="60" />
                <a class="med-text ps-3" href="https://www.nexus-it.es/" target="_blank" rel="noreferrer">Nexus IT</a>
              </div>
              <div class="pt-3">
                <span class="normal-text">
                  I had my first internship at Nexus. They create solutions to help companies digitalize their services, mainly offering 2 products: OpenLis
                  and Plyca.<br /><br />
                  I worked on Plyca, which is a solution for digitalizing auctioning, managing records and, overall, speeding up processes. Plyca is a software
                  written in Java which is very flexible for customers. I had the oportunity to work on it and handle customers simoultaneously, which was a
                  very good experience for me, since I learned a lot.<br /><br />
                  OpenLis is a product that supports clinical laboratories management, unifying the pre-analysis and post-analysis phases, while also making them
                  more flexible and speeding the process.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
