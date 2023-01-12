
import { render, rounter } from "./src/lib";
import HomePage from "./src/pages/Home";
import ContactPage from "./src/pages/Contact";
import AboutPage from "./src/pages/About";
import ProjectsPage from "./src/pages/Project";
import ProjectDetailPage from "./src/pages/Project-detail";
import NotFoundPage from "./src/pages/not-found";
import PostsPage from "./src/pages/posts";
import PostDetailPage from "./src/pages/post-detail";

const app = document.querySelector("#app");


rounter.on ( "/",() => render(HomePage(),app) );
rounter.on ( "/Contact",() => render(ContactPage(),app) );
rounter.on ( "/About",() => render(AboutPage(),app) );
rounter.on ("/Projects", () => render(ProjectsPage(),app));
rounter.on ("/Project/:id", (params) => render(ProjectDetailPage(params.data.id),app));
rounter.on ("/Posts",() => render(PostsPage(),app));
rounter.on ("/Post/:id", () => render(PostDetailPage(),app)) ;
rounter.notFound( () => render(NotFoundPage(),app) );



rounter.resolve();
