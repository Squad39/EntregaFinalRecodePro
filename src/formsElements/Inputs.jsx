export default ({nome, texto, tipo, placeholder, valor})=>{
    return(
        <div className="form-control">
            <label htmlFor={nome}>{texto}</label>
            <input type={tipo} name={nome} id={nome} placeholder={placeholder} value={valor}/>
        </div>
    )
}