import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className='bg-black font-poppins'>
      <NavBar />
      <Home /> 
    </div>
  )
}

export default App;