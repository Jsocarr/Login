import { useDispatch, useSelector } from 'react-redux';
import { login, logout, validarSesion } from '../../../store/auth';

export const useLogin = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);


    const onLogin = ({ username, password }) => {
        dispatch(login(username, password));
    };

    const outLogin = ({ username }) => {
        dispatch(logout(username));
    }

    const checkSesion = () => {
        dispatch(validarSesion());
    }

    return {
        user,
        loading,
        error,

        //function

        onLogin,
        outLogin,
        checkSesion,
    }
}