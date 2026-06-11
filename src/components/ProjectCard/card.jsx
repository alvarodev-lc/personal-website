import { Link } from 'react-router-dom'
import './card.css'

const BOXES_PER_ROW = 2;

function ProjectCard(props) {

  let neg = ""
  if (props.negative) {
    neg = "neg"
  }

  const row = Math.floor(props.index / BOXES_PER_ROW);
  const col = props.index % BOXES_PER_ROW;
  const delay = `${(row + col) * 0.08}s`;

  return (
    <div className="box" style={{ animationDelay: delay, transitionDelay: delay }}>
      <Link to={props.redirectUrl} style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <div className={`proj-card ${props.image}`}>
          <div className="proj-card-content">
            <h2 className={`proj-card-title${neg} ps-2`}>
              {props.title}
            </h2>
            <p className={`proj-card-body${neg} ps-2`}>
              {props.desc}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;