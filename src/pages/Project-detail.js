import Header from "../components/Header";
import { projectsFake } from "../Data"
const ProjectDetailPage = (id) => 
{
        const CurrentProject = projectsFake.find((project) => project.id == id)
        if(!CurrentProject)  return `ABC`;
        

    return `
    ${Header()}
    ${CurrentProject.name}
    `
};

export default ProjectDetailPage;
