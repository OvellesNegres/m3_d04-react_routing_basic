import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from "react-router-dom";
// import HomePageWithRedirect from "./pages/HomePageWithRedirect";

import projectsData from './projects-data.json';     // <== IMPORT 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        < Route path={"/projects/:id"} render={(props)=><ProjectDetailsPage {...props} projects={projectsData} />} />
        < Route path={"/projects"} render={(props)=><ProjectsPage {...props} projects={projectsData} />} />
        < Route path={"/about"} component={AboutPage} />
        < Route exact path={"/"} component={HomePage} />

        <Route component={ErrorPage} />
      </Switch>

    </div>
  );
}

export default App;
