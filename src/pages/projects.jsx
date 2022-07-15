import { useEffect } from 'react';

import Aos from 'aos';

import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer';

import pasicon from '.././static/images/projects/pas-pokedex/pas.png'
import pas_login from '.././static/images/projects/pas-pokedex/pas_login.png'
import pas_pokedexoverview from '.././static/images/projects/pas-pokedex/pas_pokedex_overview.png'
import pas_pokemonoverview1 from '.././static/images/projects/pas-pokedex/pokemon_overview_1.png'
import pas_pokemonoverview2 from '.././static/images/projects/pas-pokedex/pokemon_overview_2.png'
import pas_teambuilderoverview from '.././static/images/projects/pas-pokedex/pas_teambuilder_overview.png'
import pas_teambuilderteamcreationoverview from '.././static/images/projects/pas-pokedex/pas_teambuilder_teamcreation_overview.png'

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="projects">
      <Navbar/>
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
                <div className='col-4 pas-image' data-aos="fade-right" data-aos-duration="1500">
                  <img src={pas_login} alt="Pas Login" className='pb-2' width="270" height="460"/>
                </div>
                <div className='col-4 pas-image' data-aos="fade-down" data-aos-duration="1500">
                  <img src={pas_pokedexoverview} alt="Pas Pokedex Overview" className='pb-2' width="270" height="460"/>
                </div>
                <div className='col-4 pas-image' data-aos="fade-left" data-aos-duration="1500">
                  <img src={pas_pokemonoverview1} alt="Pas Pokemon Overview1" className='pb-2' width="270" height="460"/>
                </div>
              </div>
              <div className='pt-5' data-aos="fade-in" data-aos-duration="1500">
                <span className='normal-text'>
                  You can also see the shiny version and a graphical view of the base stats if you scroll down!
                </span>
              </div>
              <div className='text-center pt-5' data-aos="fade-in" data-aos-duration="1500">
                <img src={pas_pokemonoverview2} alt="Pas Pokemon Overview2" className='pb-2' width="350" height="310"/>
              </div>
              <div className='pt-100' data-aos="fade-down" data-aos-duration="1500">
                <span className='normal-text'>
                  Whats the fun about Pokémon if you can't build a team? TeamBuilder has you covered! Build as many teams as you want using the search functionality
                  and create, modify or delete them at will. When a team is created, it's displayed as a new team with Pokémon images. You can create a team of a
                  maximum of 6 members, but you can leave some spots open and fill them later!
                </span>
              </div>
              <div id="teambuilder" className='row pt-5 ps-200'>
                <div className='col-6 pas-image' data-aos="fade-right" data-aos-duration="1500">
                  <img src={pas_teambuilderoverview} alt="Pas TeamBuilder Overview" className='pb-2' width="270" height="460"/>
                </div>
                <div className='col-6 pas-image' data-aos="fade-left" data-aos-duration="1500">
                  <img src={pas_teambuilderteamcreationoverview} alt="Pas TeamBuilder TeamCreation Overview" className='pb-2' width="270" height="460"/>
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
        </div>
      <Footer/>
    </div>  
  )
}
export default Projects;
