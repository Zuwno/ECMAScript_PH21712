import { useEffect, useState } from "@/lib";



const AdminProjectsPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    setData(projects);
  },[]);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        const NewProjects = data.filter((project) => project.id != id);
        localStorage.setItem("projects", JSON.stringify(NewProjects));
        setData(NewProjects);
      });
    }
  });

  return `<div class="container pt-5">
            <h1>Quản lý dự án</h1>
            <p class="btn"> <a href="#/Admin/Projects/Add">Thêm mới</a> </p>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data
                          .map((project, index) => {
                            return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-name="DataName" data-id="${
                                          project.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="/Projects/:id/:action">Edit</a>
                                    </td>
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;
