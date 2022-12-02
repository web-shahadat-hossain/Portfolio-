import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/About/About";
import Blog from "./Component/Pages/Blogs/Blog";
import Contact from "./Component/Pages/Contact/Contact";
import Portfolio from "./Component/Pages/Portfolio/Portfolio";
import Pricing from "./Component/Pages/Pricing/Pricing";
import Resume from "./Component/Pages/Resume/Resume";
import Services from "./Component/Pages/Services/Services";
import Testimonial from "./Component/Pages/testimonial/Testimonial";
import SideBar from "./Component/SideBar/SideBar";
function App() {
  return (
    <>
      <SideBar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
