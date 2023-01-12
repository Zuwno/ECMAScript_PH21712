const ProjectList = () => {
  const product = [
    { id: 1, name: "Du an 1" },
    { id: 2, name: "Du an 2" },
  ];
  return `
    <div> Project Page</div> 
    ${product
      .map((item) => {
        return `<div><a href="Project/${item.id}">${item.name}</a></div>`;
      })
      .join("")}
    
    `;
};

export default ProjectList;
