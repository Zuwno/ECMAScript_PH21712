import Header from "../components/Header";
import ProjectList from "../components/ProjectList"
import { projects } from "../Data";


const ProjectsPage = () => 
{
    return `
    ${Header()}
    <div>Projects</div>
    ${ProjectList({projects: projects})}
    `
   
}

export default ProjectsPage;