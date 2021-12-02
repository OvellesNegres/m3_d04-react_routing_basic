import {Link} from "react-router-dom"

export default function ProjectPage(props)
{
    const {projects, match, history, location} = props
    return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <Link to={`/projects/${project._id}`}>Project details</Link>
          </div>
        );
      })}
    </div>
  );
}