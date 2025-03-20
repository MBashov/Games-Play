import { createContext } from "react";

export const userContext = createContext({
    _id: '',
    email: '',
    accessToken: '',
    userLoginHandler: () => null,   
});