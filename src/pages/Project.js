import Header from "../components/Header";
import ProjectList from "../components/ProjectList"
import { projectsFake } from "../Data";
import Footer from "../components/Footer";

const ProjectsPage = () => 
{
    return `
    ${Header()}
    <div>Projects</div>
    ${ProjectList({projects: projectsFake})}
    ${Footer()}`
   
}

export default ProjectsPage;