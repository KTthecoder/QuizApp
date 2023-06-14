import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Navigation from './components/Navigation/Navigation';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
      <BrowserRouter> 
        <AuthProvider>
          <ScrollToTop/>
          <Navbar/>
          <main> 
            <Navigation/>
          </main>     
        </AuthProvider>
      </BrowserRouter> 
  );
}

export default App;
