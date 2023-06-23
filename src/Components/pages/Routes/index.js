import { useContext } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import AuthContext from "../contexts/AuthContext";

export default function Routes(){

    const {logado} = useContext(AuthContext);

    return (
        logado == true ? <AppRoutes /> : <AuthRoutes /> 

    )

}