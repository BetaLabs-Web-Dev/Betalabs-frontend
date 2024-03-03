import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./components/Carousel/Projects";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-black font-poppins">
      <NavBar />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
