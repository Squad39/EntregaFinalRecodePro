import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Layout/NavBar';

import './App.css';

import Home from './page/Home';
import Nos from './page/Nos';
import Proposito from './page/Proposito';
import Voluntario from './page/Voluntarios';
import Apoiar from './page/Apoiadores';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

export default()=>{

    return(
        /* Em vez de encapsular tudo dentro de uma div, os elementos serão encapsulados dentro de uma div Router e as referencias dos Links dentro da Routes. */
        /* E cada elemento dentro de seu proximo route, sua rota */
        <Router>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Nos' element={<Nos/>}/>
                <Route path='/Proposito' element={<Proposito/>}/>
                <Route path='/Voluntarios' element={<Voluntario/>}/>
                <Route path='/Apoiadores' element={<Apoiar/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}