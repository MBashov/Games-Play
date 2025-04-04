import { useContext, useEffect, useRef } from "react";

import { userContext } from "../contexts/userContext";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => {

        const result = await request.post(
            `${baseUrl}/login`,
            { email, password },
            { signal: abortRef.current.signal }
        );

        return result;
    }

    useEffect(() => {
        const abortController = abortRef.current;

        return () => abortController.abort();
    }, []);

    return {
        login,
    }
};

export const useRegister = () => {
    const register = async (email, password) =>
        await request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
};

export const useLogout = () => {

    const { accessToken } = useContext(userContext);
    const { userLogoutHandler } = useContext(userContext);

    useEffect(() => {
        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        }
        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler())

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken
    }
}