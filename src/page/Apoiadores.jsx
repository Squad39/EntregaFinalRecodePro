import { useState } from 'react';
import { useEffect } from 'react';

export default ()=>{

    //UseState
    //const [btnCadastrar, setBtnCasdastrar] = useState(true);
    const [produtos, setProdutos] = useState([]);

    //UseEffect
    useEffect(()=>{
        fetch("http://169.57.196.58/Apoiadores")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setProdutos(retorno_convertido));
    }, []
    );

    return(

        <>
            <h1 style={{textAlign:'center', fontFamily:'Arial-Narrow', fontWeight:'700', padding:'25px 0'}}>Torne Real esse Iniciativa - Participe!</h1>
           <form action="" style={{width:'600px', margin:'30px auto', textAlign:'center'}}>
                <input type="text" placeholder="Nome" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="Formação" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="email@email.com" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="11/11/1111" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="Fale um pouco sobre voce" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" value="VOLUNTARIAR-SE" className="btn" style={{/* margin: '8% 35%', */color: `white`, backgroundColor: `rgb(17, 55, 130)`, paddindTop: `20px`}}/>
           </form>
            
        </>
    )
}