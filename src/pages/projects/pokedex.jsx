import { useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar'
import ProjectCard from '../../components/ProjectCard/card';

import Aos from 'aos';




const Pokedex = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="pokedex">
        <Navbar />
        <ProjectCard image="bulbasur-bg" title="Pokédex" desc = "Android pokédex and team builder for all pokémon generations"/>
        <ProjectCard image="portal-bg" title="VR Portals" desc = "TFG" negative={true}/>
    </div>
  );
}

export default Pokedex;
