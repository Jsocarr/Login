
import { axiosBase } from "../api/axios";

const response = {
    rpt: true,
    credenciales: {
        usuario: "73133130",
        token: "22441cba079b833a92811da2f61f0ba44afb1c1a05472b6cb245a04b20b081db219fa20231020212053"
    }
}

export const getValidarSesion = async ({ p_usuario, p_token }) => {
    const credenciales = { "p_usuario": p_usuario, "p_token": p_token };
    if (credenciales.p_usuario === response.credenciales.usuario && credenciales.p_token === response.credenciales.token) {
        return response;
    }
    return { rpt: false }
    //return await axiosBase.post('/archivo.json', credenciales);

}