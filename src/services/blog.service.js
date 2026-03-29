import { api } from "./api";

export default {
    async obtenerPublicacion() {
        const { data } = await api().get('/articles');
        console.log("Datos para consola", data)
        return data;
    },

    async guardarPublicacion(datos) {
        const { data } = await api().post('/articles', datos);
        console.log("Datos para consola", data)
        return data;
    },

    async obtenerPublicacionID(id) {
        const { data } = await api().get('/articles' + id);
        console.log("Datos para consola", data)
        return data;
    },

    async actualizarPublicacion(id, datos) {
        const { data } = await api().put('/articles' + id, datos);
        console.log("Datos para consola", data)
        return data;
    },

    async eliminarPublicacion(id) {
        const { data } = await api().delete('/articles' + id);
        console.log("Datos para consola", data)
        return data;
    },
} 