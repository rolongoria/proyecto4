import { Outlet, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './routes/Home'
import PicturesCarousel from './components/PicturesCarousel';
import ReserveForm from './components/ReserveForm';

import Pupusas from './images/pupusas.png';
import Flautas from './images/flautas.png';
import Enchiladas from './images/enchiladas.png';
import Gorditas from './images/gorditas.png';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />

      

    </div>
  );
}

export default App;
