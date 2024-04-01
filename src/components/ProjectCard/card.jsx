import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './card.min.css'

import Aos from 'aos';




function ProjectCard(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  let neg = ""
  if(props.negative){
    neg = "neg"
  }

  return (
    <div className={`proj-card ${props.image}`}>
        <div className="proj-card-content">
            <h2 className={`proj-card-title${neg} ps-2`}>
                {props.title}
            </h2>
            <p className={`proj-card-body${neg} ps-2`}>
                {props.desc}
            </p>
            <Link className="proj-card-button ps-2" to="/projects/pokedex">Learn more</Link>
        </div>
    </div>
  );
}

export default ProjectCard;