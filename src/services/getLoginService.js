import { axiosBase } from "../api/axios";

export const getLogin = async ({username,password}) => {
    const credenciales = {"p_usuario": username,"p_clave":password};

    return await axiosBase.post('/archivo.json',credenciales);

}