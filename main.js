
import 'bootstrap/dist/css/bootstrap.min.css'
import { render, router } from "./src/lib";
import HomePage from "./src/pages/Home";
import ContactPage from "./src/pages/Contact";
import AboutPage from "./src/pages/About";
import ProjectsPage from "./src/pages/Project";
import ProjectDetailPage from "./src/pages/Project-detail";
import NotFoundPage from "./src/pages/not-found";
import PostsPage from "./src/pages/posts";
import PostDetailPage from "./src/pages/post-detail";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectsAddPage from "./src/pages/admin/projects-add";


const app = document.querySelector("#app");


router.on ( "",() => render(HomePage,app) );
router.on ( "/Contact",() => render(ContactPage,app) );
router.on ( "/About",() => render(AboutPage,app) );
router.on ("/Projects", () => render(ProjectsPage,app));
router.on ("/Projects/:id", (params) => render(() => ProjectDetailPage(params.data.id),app));
router.on ("/Posts",() => render(PostsPage,app));
router.on ("/Posts/:id", () => render(PostDetailPage,app)) ;
router.on ("Admin/Projects", () => render(AdminProjectsPage, app))
router.on ("Admin/Projects/Add" , () => render(AdminProjectsAddPage, app))

router.notFound( () => render(NotFoundPage,app) );



router.resolve();
