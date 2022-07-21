import { useEffect } from 'react';

import Aos from 'aos';

import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';


// Pas Pokédex images
import pasicon from '.././static/images/projects/pas_pokedex/pas.png';
import pas_login from '.././static/images/projects/pas_pokedex/pas_login.png';
import pas_pokedexoverview from '.././static/images/projects/pas_pokedex/pas_pokedex_overview.png';
import pas_pokemonoverview1 from '.././static/images/projects/pas_pokedex/pokemon_overview_1.png';
import pas_pokemonoverview2 from '.././static/images/projects/pas_pokedex/pokemon_overview_2.png';
import pas_teambuilderoverview from '.././static/images/projects/pas_pokedex/pas_teambuilder_overview.png';
import pas_teambuilderteamcreationoverview from '.././static/images/projects/pas_pokedex/pas_teambuilder_teamcreation_overview.png';

// VR Portals images
import vrportalsicon from '.././static/images/projects/vr_portals/portals.png';
import vrportals_overview from '.././static/images/projects/vr_portals/portals_overview.png';
import vrportals_gameplay_example_1 from '.././static/images/projects/vr_portals/gameplay_example_1.png';
import vrportals_gameplay_example_2 from '.././static/images/projects/vr_portals/gameplay_example_2.png';

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="projects">
      <Navbar />
      <div>
        {/*Pas Pokedex*/}
        <div className='container-fluid'>
          <div className='row' data-aos="fade-down" data-aos-duration="1500">
            <div className='col offset-md-2'>
              <img src={pasicon} alt="Pas Pokedex Icon" className='pb-2' width="120" height="105" />
              <a className='big-text ps-3' href='https://github.com/alvarodev-lc/PAS-Pokedex' target="#blank">
                Pas Pokedex
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col offset-md-2 pt-md-3 pb-100 max-w-70perc'>
              <div data-aos="fade-down" data-aos-duration="1500">
                <span className='normal-text'>
                  PAS Pokedex was a project I made with a group of developers using Android Studio and Java. The point was to consume a <a href='https://pokeapi.co/'
                    target={'#blank'}>Pokémon API</a> to consume all the information we could and create a Pokédex with usefull information for Pokémon lovers. We
                  implemented a login system using <a href='https://firebase.google.com/' target={'#blank'}>Firebase</a> so that we could store users on the cloud.
                </span>
              </div>
              <div className='row pt-5'>
                <div className='col' data-aos="fade-right" data-aos-duration="1500">
                  <img src={pas_login} alt="Pas Login" className='pb-2' width="270" height="460" />
                </div>
                <div className='col' data-aos="fade-down" data-aos-duration="1500">
                  <img src={pas_pokedexoverview} alt="Pas Pokedex Overview" className='pb-2' width="270" height="460" />
                </div>
                <div className='col' data-aos="fade-left" data-aos-duration="1500">
                  <img src={pas_pokemonoverview1} alt="Pas Pokemon Overview1" className='pb-2' width="270" height="460" />
                </div>
              </div>
              <div className='pt-5' data-aos="fade-in" data-aos-duration="1500">
                <span className='normal-text'>
                  You can also see the shiny version and a graphical view of the base stats if you scroll down!
                </span>
              </div>
              <div className='text-center pt-5' data-aos="fade-in" data-aos-duration="1500">
                <img src={pas_pokemonoverview2} alt="Pas Pokemon Overview2" className='pb-2' width="350" height="310" />
              </div>
              <div className='pt-100' data-aos="fade-down" data-aos-duration="1500">
                <span className='normal-text'>
                  Whats the fun about Pokémon if you can't build a team? TeamBuilder has you covered! Build as many teams as you want using the search functionality
                  and create, modify or delete them at will. When a team is created, it's displayed as a new team with Pokémon images. You can create a team of a
                  maximum of 6 members, but you can leave some spots open and fill them later!
                </span>
              </div>
              <div id="teambuilder" className='row pt-5 ps-200'>
                <div className='col' data-aos="fade-right" data-aos-duration="1500">
                  <img src={pas_teambuilderoverview} alt="Pas TeamBuilder Overview" className='pb-2' width="270" height="460" />
                </div>
                <div className='col' data-aos="fade-left" data-aos-duration="1500">
                  <img src={pas_teambuilderteamcreationoverview} alt="Pas TeamBuilder TeamCreation Overview" className='pb-2' width="270" height="460" />
                </div>
              </div>
              <div className='pt-100' data-aos="fade-up" data-aos-duration="1500">
                <span className='normal-text'>
                  Check out the open source project on <a href='https://github.com/alvarodev-lc/PAS-Pokedex' target="#blank">Github!</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* VR Portals */}
        <div className='container-fluid'>
          <div className='row' data-aos="fade-right" data-aos-duration="1500">
            <div className='col offset-md-2'>
              <img src={vrportalsicon} alt="Pas Pokedex Icon" className='pb-2' width="120" height="105" />
              <a className='big-text ps-3' href='https://github.com/jesusmayor/VRPortalsUnity' target="#blank">
                VR Portals
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col offset-md-2 pt-md-3 pb-100 max-w-70perc'>
              <div data-aos="fade-left" data-aos-duration="1500">
                <span className='normal-text'>
                  This was my final project before graduating as a software engineer. I wanted to explore how <a href='https://en.wikipedia.org/wiki/Non-Euclidean_geometry'
                  target={'#blank'}>non euclidean spaces</a> could be used to take advantage of the space on virtual reality applications.<br/><br/>

                  One of the main problems of virtual reality, is the lack of space available by users. When immersed in the virtual world, most people forget
                  about the real enviroment and that can cause crashes that end up damaging the user or the technology they are using. The idea is to simulate
                  non euclidean enviroments using portals in virtual reality that are connected to each other.

                </span>
              </div>
              <div className='container'>
                <div className='row pt-5'>
                  <div className='col flex justify-content-center' data-aos="fade-right" data-aos-duration="1500">
                    <img src={vrportals_overview} alt="VRPortals Overview" className='pb-2' width="410" height="380" />
                  </div>
                </div>
              </div>
              <div className='pt-100' data-aos="fade-down" data-aos-duration="1500">
                <span className='normal-text'>
                  Users would see on portal 1 a reflection of portal's 2 view. This way, even if portals are on ceillings on walls, gravity is changed so that
                  the transition between portals is smooth. Each eye of the VR Headset is transported separately, this way users can peek through portals. With
                  these tools, I made an algorythm that procedurally generates labyrinths depending on the user's available space.<br/><br/>

                  The main condition is that the user can't see a portal through another portal. This is to avoid performance issues, since the enviroment is 
                  dynamically generated depending on how the player moves, removing sections the user can't see and rendering sections that the user is now 
                  able to see.
                </span>
              </div>
              <div id="vr-portals-gameplay" className='row pt-5 offset-md-1'>
                <div className='col' data-aos="fade-right" data-aos-duration="1500">
                  <img src={vrportals_gameplay_example_1} alt="VRPortals Gameplay1" className='pb-2 vr-portals-image' width="500" height="350" />
                </div>
                <div className='col' data-aos="fade-left" data-aos-duration="1500">
                  <img src={vrportals_gameplay_example_2} alt="VRPortals Gameplay2" className='pb-2 vr-portals-image' width="500" height="350" />
                </div>
              </div>
              <div className='pt-100' data-aos="fade-up" data-aos-duration="1500">
                <span className='normal-text'>
                  Click <a href='https://www.linkedin.com/in/alvaro-lopez-b354321b8/overlay/1635464364542/single-media-viewer/' target="#blank">here </a>
                  to know more about the project. Open source project on <a href='https://github.com/jesusmayor/VRPortalsUnity' target="#blank">Github</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* More */}
        <div className='container-fluid'>
          <div className='row' data-aos="fade-up" data-aos-duration="1500">
            <div className='col offset-md-2'>
              <span className='big-text'>
                More
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='col offset-md-2 pt-md-3 pb-100 max-w-70perc'>
              <div data-aos="fade-up" data-aos-duration="1500">
                <span className='normal-text'>
                  These are just a few examples of projects I have built throughout my life. I have worked on APIs, games, machine learning and deep learning
                  models... And much more I am building now and planning to build next!<br/><br/>

                  This website was a little project I started because I wanted people to know a little more about me on a fun way, and learn the React framework
                  as a side effect!<br/><br/>

                  If you like what I do, you can give my projects stars on Github and feel free to open pull requests and contribute! I will be more than happy 
                  to review your code and merge it. Contact me for more information or if u don't know how to start.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects;
