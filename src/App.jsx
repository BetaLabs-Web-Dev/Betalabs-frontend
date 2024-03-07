import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./components/Carousel/Projects";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import GetInTouch from "./components/GetInTouch/GetInTouch";

const App = () => {
  return (
    <div className="bg-black font-poppins">
      <Home />
      <MeetTheTeam />
      <Projects />
      <GetInTouch />
    </div>
  );
};

export default App;
