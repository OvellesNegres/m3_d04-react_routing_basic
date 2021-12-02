import {useParams, Link} from "react-router-dom"

export default function ProjectDetailsPage(props){

    const params = useParams() // const {id} = useParams()

    const projectList = props.projects
    const foundProject = projectList.find(project => project._id === params.id)
    return (
        <div>
          <h1>Project Details</h1>
          {!foundProject && <h3>Project not found!</h3>}
    
          {foundProject && (
            <>
              <h2>{foundProject.name}</h2>
              <h3>Tech Stack: {foundProject.technologies}</h3>
              <p>{foundProject.description}</p>
              <Link to="/projects">Back</Link>
            </>
          )}
        </div>
      )
}