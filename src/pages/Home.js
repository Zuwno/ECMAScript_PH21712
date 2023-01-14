import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

const HomePage = () => 
{
    return `
    ${Header()}
    <div>Home Page</div>
    ${Footer()}
    `;
};

export default HomePage;