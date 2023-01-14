import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectsFake } from "../Data"
const ProjectDetailPage = (id) => 
{
        const CurrentProject = projectsFake.find((project) => project.id == id)
        if(!CurrentProject)  return "";
        

    return `
    ${Header()}
    ${CurrentProject.name}
    ${Footer()}
    `
};

export default ProjectDetailPage;
