
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal';
import PJava from './components/PJava';
import PPython from './components/PPython';
import PJavaScript from './components/PJavaScript';
import PCMas from './components/PCMas';
import PCMasMas from './components/PCMasMas';
import PTypeScript from './components/PTypeScript';
import PPHP from './components/PPHP';
import PGo from './components/PGo';
import PSwitft from './components/PSwift';
import PSQL from './components/PSQL';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Creditos from './components/Creditos';
import video from './components/video';




function App() {
  return (
    <div>
      
      <Router>
      <Routes>
      <Route path="/" element={<div><NavBar /><PaginaPrincipal /><Footer /></div>} />
      <Route path="/video" component={video} />
        <Route path="/python" element={<PPython />} />
        <Route path="/java" element={<PJava />} />
        <Route path="/javascript" element={<PJavaScript />} />
        <Route path="/cmas" element={<PCMas />} /> 
        <Route path="/cmasmas" element={<PCMasMas />} /> 
        <Route path="/typescript" element={<PTypeScript />} /> 
        <Route path="/php" element={<PPHP />} />
        <Route path="/go" element={<PGo />} /> 
        <Route path="/swift" element={<PSwitft />} /> 
        <Route path="/sql" element={<PSQL />} /> 
        <Route path="/creditos" element={ <div> <NavBar /> <Creditos /> <Footer /> </div> } />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
