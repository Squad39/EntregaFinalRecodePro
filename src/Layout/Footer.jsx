import { Link } from 'react-router-dom';

import './Footer.css';
export default()=>{
    return(
        <ul className='footer'>
            <li><Link>Linkedin</Link></li>
            <li><Link>Github</Link></li>
            <li><Link>Criadores</Link></li>
        </ul>
    )
}