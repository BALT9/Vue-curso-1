import axios from "axios";

export default {
    async obtenerPublicacion(){
        const {data} = await axios.get('https://dev.to/api/articles');
        console.log("Datos para consola",data)
        return data;
    } ,

    async guardarPublicacion(){
        const {data} = await axios.get('https://dev.to/api/articles');
        console.log("Datos para consola",data)
        return data;
    } 
}