import "./App.css";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-global">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
