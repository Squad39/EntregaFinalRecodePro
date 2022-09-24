import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Itens from './Layout/NavBar'

import Home from './paginas/Home';
import Nos from './paginas/Nos';
import Proposito from './paginas/Proposito';
import Voluntario from './paginas/Voluntarios';
import Apoiar from './paginas/Apoiadores';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

export default()=>{
    return(
        /* Em vez de encapsular tudo dentro de uma div, os elementos serão encapsulados dentro de uma div Router e as referencias dos Links dentro da Routes. */
        /* E cada elemento dentro de seu proximo route, sua rota */
        <Router>
            <Header/>
            <Itens/>
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