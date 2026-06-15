<script setup>
import Navbar from '../components/Navbar/Navbar.vue'
import ProgressBar from '../components/ProgressBar/ProgressBar.vue'
import Footer from '../components/Footer/Footer.vue'

import neverland_poster from '../static/images/thumbnails/neverland_poster.webp'
import pyicon from '../static/images/icons/python.webp'
import jsicon from '../static/images/icons/js.webp'
import javaicon from '../static/images/icons/java.webp'
import htmlicon from '../static/images/icons/html.webp'
import cssicon from '../static/images/icons/css.webp'
import othersicon from '../static/images/icons/others.webp'
import dockericon from '../static/images/icons/docker.webp'
import giticon from '../static/images/icons/git.png'
import sqlicon from '../static/images/icons/sql.png'
import djangoicon from '../static/images/icons/django.png'
import linuxicon from '../static/images/icons/linux.webp'
import vueicon from '../static/images/icons/vue.webp'

function resetVideo() {
  document.getElementById('neverland-video').load()
}

function initVideo() {
  document.getElementById('neverland-video').volume = 0.2
}
</script>

<template>
  <div id="home">
    <Navbar />
    <div>
      <div class="container-fluid" data-aos="fade-down" data-aos-duration="1500">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <span class="big-text">Hi! Im Álvaro, a software developer.</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 pt-md-3 pb-100">
            <span class="normal-text">
              I solve problems using my skills and a data driven mentallity. My passion is to create a direct impact on people with my code, and
              see how it makes their life easier. Automation, features, beautiful and intuitive UI's... everything is possible with the correct mindset
              and a lot of strategic thinking!
            </span>
          </div>
        </div>
      </div>

      <div class="container-fluid pb-5">
        <div class="row justify-content-around">
          <!-- Languages card -->
          <div class="col col-lg-4 card min-width-300" data-aos="fade-right" data-aos-duration="1500">
            <div class="card-header">Languages</div>
            <div class="card-body">
              <div class="mb-3">
                <img :src="pyicon" alt="Python Icon" width="25" height="25" />
                <span class="card-title">Python</span>
                <ProgressBar progress="80" delay="0" background="linear-gradient(135deg, rgba(219,236,45,1) 10%, rgba(27,138,171,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="htmlicon" alt="Html Icon" width="25" height="25" />
                <span class="card-title">HTML</span>
                <ProgressBar progress="78" delay="1" background="linear-gradient(135deg, rgba(255,162,0,1) 24%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="jsicon" alt="Js Icon" width="25" height="25" />
                <span class="card-title">JavaScript</span>
                <ProgressBar progress="74" delay="2" background="linear-gradient(135deg, rgba(249,255,0,1) 10%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="cssicon" alt="Css Icon" width="25" height="25" />
                <span class="card-title">CSS</span>
                <ProgressBar progress="65" delay="3" background="linear-gradient(135deg, rgba(0,206,255,1) 14%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="javaicon" alt="Java Icon" width="25" height="25" />
                <span class="card-title">Java</span>
                <ProgressBar progress="62" delay="4" background="linear-gradient(135deg, rgba(255,162,0,1) 30%, rgba(255,64,0,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="othersicon" alt="C Icon" width="25" height="25" />
                <span class="card-title">C, C++, C#</span>
                <ProgressBar progress="53" delay="5" background="linear-gradient(135deg, rgba(167,115,9,1) 30%, rgba(199,185,157,1) 66%)" />
              </div>
            </div>
          </div>

          <!-- Technology knowledge card -->
          <div class="col col-lg-4 card min-width-300" data-aos="fade-left" data-aos-duration="1500" id="technology-card">
            <div class="card-header">Technology knowledge</div>
            <div class="card-body">
              <div class="mb-3">
                <img :src="dockericon" alt="Docker Icon" width="25" height="25" />
                <span class="card-title">Docker</span>
                <ProgressBar progress="90" delay="0" background="linear-gradient(135deg, rgba(0,206,255,1) 14%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="giticon" alt="Git Icon" width="25" height="25" />
                <span class="card-title">Git</span>
                <ProgressBar progress="87" delay="1" background="linear-gradient(135deg, rgba(255,162,0,1) 30%, rgba(255,64,0,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="sqlicon" alt="SQL Icon" width="25" height="25" />
                <span class="card-title">PostgreSQL, MySQL</span>
                <ProgressBar progress="83" delay="2" background="linear-gradient(135deg, rgba(4,37,180,1) 33%, rgba(195,251,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="djangoicon" alt="Django Icon" width="25" height="25" />
                <span class="card-title">Django</span>
                <ProgressBar progress="79" delay="3" background="linear-gradient(135deg, rgba(43,169,119,1) 37%, rgba(224,255,222,1) 66%)" />
              </div>
              <div class="mb-3">
                <img :src="linuxicon" alt="Linux Icon" width="25" height="25" />
                <span class="card-title">Linux</span>
                <ProgressBar progress="75" delay="4" background="linear-gradient(135deg, rgba(255,146,2,1) 33%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="vueicon" alt="Vue Icon" width="30" height="25" />
                <span class="card-title">Vue</span>
                <ProgressBar progress="50" delay="5" background="linear-gradient(135deg, rgba(115,255,223,1) 33%, rgba(255,255,255,1) 74%)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="hobbies" class="container-fluid pt-5">
      <div class="row justify-content-around">
        <div class="col pt-5 min-w-350" data-aos="fade-right" data-aos-duration="1500">
          <div class="row offset-md-2">
            <span class="big-text">Hobbies</span>
          </div>
          <div class="row offset-md-2 pt-5">
            <span class="normal-text">
              I spend a lot of my free time investigating and discovering new techologies and trying them on on my own. It is both fun and educative to
              learn and apply this knowledge on fields I love such as gaming.<br /><br />
              Neverland is a small project i started on summer in 2019. Its a rogue like game where you defeat waves of enemies. I wanted to learn how to
              manage infinite object spawning, enemy interactions and projectile physics.<br /><br />
              Moreover, I designed every image and sprite from scratch, which was a hard process but really let me develop my creativity.
            </span>
          </div>
        </div>
        <div class="col pb-100 min-w-350" data-aos="fade-left" data-aos-duration="1500">
          <div class="row">
            <video id="neverland-video" class="w-85" controls="1" :poster="neverland_poster" width="740" height="580" @ended="resetVideo" @loadstart="initVideo">
              <source src="https://dl.dropboxusercontent.com/s/vck1o60ipg02n7a/Neverland_video.mp4?raw=1" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
