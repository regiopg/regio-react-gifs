import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } )=>{

    const {imagenes, cargando} = useFetchGifs(category);
    return(
        <div className="card-grid">
            <h4 className="titulo"> {category} </h4>
            {
                cargando && (<h4>Cargando</h4>)
            }
            {
                imagenes.map(image=>(
                    <GifItem 
                        key={image.id}
                        { ...image }
                    />
                ))
            }
        </div>
    );
}