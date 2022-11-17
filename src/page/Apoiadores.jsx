
export default ()=>{
    return(
        <>
            <h1 style={{textAlign:'center', fontFamily:'Arial-Narrow', fontWeight:'700', padding:'20px'}}>Como tornar o projeto real</h1>
           <form action="" style={{width:'600px', margin:'30px auto'}}>
                <input type="text" placeholder="Nome" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="Formação" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="email@email.com" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="11/11/1111" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" placeholder="Fale um pouco sobre voce" className="form-control" style={{marginBottom:'10px'}}/>
                <input type="text" value="VOLUNTARIAR-SE" className="btn" style={{margin: '8% 35%',color: `white`, backgroundColor: `rgb(17, 55, 130)`}}/>
           </form>
            
        </>
    )
}