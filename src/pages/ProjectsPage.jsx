export default function ProjectPage(props)
{
    const {projects, match, history, location} = props

    console.log("props from parent ROUTE: ",{projects, match, history, location})

    return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}