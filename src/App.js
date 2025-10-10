import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Speed } from './components/speedDial';
import { Clients } from './pages/clients';
import { Comand } from './pages/comand';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Price } from './pages/price';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Comand />
      <Clients />
      <Price />
      <Contact />
      <Speed />
      <Footer />
    </div>
  );
}

export default App;
