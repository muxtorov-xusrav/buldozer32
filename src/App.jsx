import { Route,Routes } from "react-router-dom";
import Home from "./pages/home/home"
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";
import Team from "./pages/team/team";
import Blog from "./pages/blog page/blog";
import Single from "./pages/single page/single";
import Service from "./pages/service/service";
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
                <Route path="/team" element={<Team />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/single" element={<Single />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </div>
    );
}

export default App;
