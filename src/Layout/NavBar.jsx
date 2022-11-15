import {Link} from "react-router-dom";
import './NavBar.css';

export default()=>{
    return(
        <ul className="Navbar">
            {/* O to='' indica qual a rota que vai ser direcionada.*/}
            {/* Que precisa ser recebida pelo routes */}
            <li><Link to='/' style={{textDecoration: 'none', color: 'white'}}>HOME</Link></li>
            <li><Link to='/Nos' style={{textDecoration: 'none', color: 'white'}}>NÓS</Link></li>
            <li><Link to='/Proposito' style={{textDecoration: 'none', color: 'white'}}>PROPÓSITO</Link></li>
            <li><Link to='/Voluntarios' style={{textDecoration: 'none', color: 'white'}}>VOLUNTARIAR-SE</Link></li>
            <li><Link to='/Apoiadores' style={{textDecoration: 'none', color: 'white'}}>APOIAR</Link></li>
        </ul>
    )
}