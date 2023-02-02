const ProjectList = ({ projects }) => {
  return `
        ${projects
          ?.map((item) => {
            return `<div><a href="/Projects/${item.id}">${item.name}</a></div>`;
          })
          .join("")}
    `;
};
export default ProjectList;
