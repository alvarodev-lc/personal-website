import { useEffect } from 'react';

import Aos from 'aos';

import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer';

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="projects">
      <Navbar/>

      <Footer/>
    </div>  
  )
}
export default Projects;
