export const GifItem = ({url,titulo})=>{
    return(
        <div className="card">
            <img src={url} alt={titulo} width="50px"/>
            <p className="tituloImagen"> { titulo } </p>
        </div>
    )
}