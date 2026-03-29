import axios from "axios";

export default {
    async obtenerPublicacion() {
        const { data } = await axios.get('https://dev.to/api/articles');
        console.log("Datos para consola", data)
        return data;
    },

    async guardarPublicacion(datos) {
        const { data } = await axios.post('https://dev.to/api/articles', datos);
        console.log("Datos para consola", data)
        return data;
    },

    async obtenerPublicacionID(id) {
        const { data } = await axios.get('https://dev.to/api/articles' + id);
        console.log("Datos para consola", data)
        return data;
    },

    async actualizarPublicacion(id, datos) {
        const { data } = await axios.put('https://dev.to/api/articles' + id, datos);
        console.log("Datos para consola", data)
        return data;
    },

    async eliminarPublicacion(id) {
        const { data } = await axios.delete('https://dev.to/api/articles' + id);
        console.log("Datos para consola", data)
        return data;
    },
}