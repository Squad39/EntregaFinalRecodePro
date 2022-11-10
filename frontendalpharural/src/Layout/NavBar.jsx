import {Link} from "react-router-dom";
import './NavBar.css';

export default()=>{
    return(
        <ul className="Navbar">
            {/* O to='' indica qual a rota que vai ser direcionada.*/}
            {/* Que precisa ser recebida pelo routes */}
            <li><Link to='/' >HOME</Link></li>
            <li><Link to='/Nos'>NOS</Link></li>
            <li><Link to='/Proposito'>PROPÓSITO</Link></li>
            <li><Link to='/Voluntarios'>VOLUNTARIAR-SE</Link></li>
            <li><Link to='/Apoiadores'>APOIAR</Link></li>
        </ul>
    )
}