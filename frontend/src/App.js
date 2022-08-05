import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navigation/Navbar';
import Navigation from './components/Navigation/Navigation';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
      <BrowserRouter> 
      <ScrollToTop/>
        <Navbar/>
        <main> 
          <Navigation/>
        </main>     
      </BrowserRouter> 
  );
}

export default App;
