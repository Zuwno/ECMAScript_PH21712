import { router, useEffect } from "@/lib";



const AdminProjectsAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const projectName = document.querySelector("#project-name");
          const projectAuthor = document.querySelector("#project-author");
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              
              const formData = {
                
                  name: projectName.value,
                  author: projectAuthor.value,
              };
            
              fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }).then(() => router.navigate("/Admin/Projects"))
              
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
              <button style="margin-top:10px;" class="btn btn-primary ">Thêm dự án</button>
          </form>
          </div>`;
};

export default AdminProjectsAddPage;