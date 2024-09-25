import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";

const GuestLayout = () => {
    const {token} = useStateContext();
    if (token) {
        return <Navigate to='/users'/>;
    }
    return (
        <>
            <Outlet/>
        </>
    )
}

export default GuestLayout