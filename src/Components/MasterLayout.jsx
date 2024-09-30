import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";
import Navbar from "./Navbar.jsx";

const MasterLayout = () => {
    const {token} = useStateContext();
    if (!token) {
        return <Navigate to='/login'/>
    }
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default MasterLayout