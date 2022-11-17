export default ({nome, texto, tipo, placeholder, valor})=>{
    return(
        <div style={{width:'900px', margin:'30px auto'}}>
            <label htmlFor={nome} style={{paddingRight:'30px', width:'600px'}}>{texto}</label>
            <input type={tipo} name={nome} id={nome} placeholder={placeholder} value={valor} className="form-control"/>
        </div>
    )
}