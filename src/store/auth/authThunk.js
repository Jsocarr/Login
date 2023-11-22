import { getLogin, getValidarSesion } from '../../services';
import { loginStart, loginOk, loginError, loginOut } from './authSlice';

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const { data } = await getLogin({ username, password });
    if (data) {
      if (username === data?.credenciales?.p_usuario && password === data?.credenciales?.p_clave) {
        dispatch(loginOk(data.response));
        localStorage.setItem('username', data.response.IDUSUARIO);
        localStorage.setItem('token', data.response.TOKEN);
      }
    }
  } catch (error) {
    dispatch(loginError('Error al iniciar sesión. Verifica tus credenciales.'));
  }

};

export const logout = (username) => async (dispatch) => {
  try {
    await getOutLogin({ username });
    dispatch(loginOut(username));
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  } catch (error) {
    dispatch(loginError('Algo Salio Mal.'));
  }
};

export const validarSesion = () => async (dispatch) => {
  try {
    const { data } = await getValidarSesion({
      p_usuario: localStorage.getItem('username'),
      p_token: localStorage.getItem('token')
    });
    if (data?.rpt === true) {
      console.log('La sesión es válida');
    } else {
      console.log('La sesión no es válida');
      dispatch(loginOut());
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    }
  } catch (error) {
    console.log('Error al validar sesión:', error);
  }
};



