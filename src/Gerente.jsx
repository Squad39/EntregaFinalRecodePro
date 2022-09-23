import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import PAGINAS from './paginas/NavBar';
import HOME from './paginas/home';
import NOS from './paginas/nos';
import APOIAR from './paginas/apoiar';
import PROPOSITO from './paginas/proposito';
import VOLUNTARIO  from './paginas/voluntario';

export default () =>{
    return(
        <Router>
            <PAGINAS/>
            <Routes>
                <Route exact='true' path="/" element={<HOME/>}/>
                <Route path="/nos" element={<NOS/>}/>
                <Route path="/voluntario" element={<VOLUNTARIO/>}/>
                <Route  path="/apoiar" element={<APOIAR/>}/>
                <Route path="/proposito" element={<PROPOSITO/>}/>
            </Routes>
        </Router>
    )
}