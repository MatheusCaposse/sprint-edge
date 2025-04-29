import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Home from './routes/Home';
import Triagem from './routes/Triagem';
import Contato from './routes/Contato';
import AreaMedico from './routes/AreaMedico';
import PageNotFound from './error/PageNotFound';

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/triagem" element={<Triagem/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path ="/areamedico" element ={<AreaMedico/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
