import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
      <BrowserRouter> 
        <Navbar/>
        <main> 
          <Navigation/>
        </main>
      </BrowserRouter> 
  );
}

export default App;
