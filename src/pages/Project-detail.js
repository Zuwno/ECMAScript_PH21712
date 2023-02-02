import Header from "../components/Header";

import { projects } from "../Data"
const ProjectDetailPage = (id) => 
{
        const CurrentProject = projectsFake.find((project) => project.id == id)
        if(!CurrentProject)  return "";
        

    return `
    ${Header()}
    ${CurrentProject.name}
   
    `
};

export default ProjectDetailPage;
