import Navbar from '@components/Navbar/navbar'
import ProjectCard from '@components/ProjectCard/card';
import { ROUTES } from '../routes';

const Projects = () => {
  return (
    <div id="projects">
      <Navbar />
      <div className="proj-page-content">
        <div className="proj-header">
          <h1 className="big-text">Projects</h1>
          <p className="normal-text proj-subtitle">A selection of things I've built</p>
        </div>
        <div className='proj-grid'>
          <ProjectCard index={0} image="bulbasur-bg" title="Pokédex" desc="Android pokédex and team builder for all pokémon generations" redirectUrl={ROUTES.PROJECTS_POKEDEX} negative={true} />
          <ProjectCard index={1} image="portal-bg" title="VR Portals" desc="Non-euclidean spaces in virtual reality" redirectUrl={ROUTES.PROJECTS_PORTAL_VR} negative={true} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
