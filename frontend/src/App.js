import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
      <BrowserRouter> 
        <Navbar/>
        <main> 
          <HomePage/>
        </main>
      </BrowserRouter> 
  );
}

export default App;
