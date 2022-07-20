import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerImagenes = async ()=>{
      const respuesta = await getGifs(category);
      setImagenes(respuesta);
      setCargando(false);
  }

  useEffect( ()=>{
      obtenerImagenes();
  },[])
  
  return {
    imagenes,
    cargando
  }
}