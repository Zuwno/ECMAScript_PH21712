import {projects} from "../../Data"
import { useEffect, useState, router } from "../../lib";

const AdminProjectsAddPage = () => 
{
     useEffect(() => {
          const form = document.querySelector("#form-add");
          const projectName = document.querySelector("#project-name");
          const projectAuthor = document.querySelector("#project-author");
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              
              const project = {
                  id: projects.length + 1,
                  name: projectName.value,
                  author: projectAuthor.value,
              };
            
              
              projects.push(project);
  
            
              router.navigate("/Admin/Projects");
          });
      });
      return `<div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Tên Dự Án</label>
                  <input type="text" class="form-control" id="project-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Tác Giả</label>
                  <input type="text" class="form-control" id="project-author" />
              </div>
              <button class="btn btn-primary">Thêm dự án</button>
          </form>
          </div>`;
};

export default AdminProjectsAddPage;