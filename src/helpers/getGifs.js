export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GU7kQuWPng1EpflbCqur3xKMYIr9IGuD&limit=10&q=${category}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(elemento=>({
        id:elemento.id,
        titulo:elemento.title,
        url:elemento.images.downsized_medium.url
    }));
    return gifs
}