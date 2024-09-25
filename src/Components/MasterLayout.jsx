import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";

const MasterLayout = () => {
    const {token} = useStateContext();
    if (!token) {
        return <Navigate to='/login'/>
    }
    return (
        <>
            <Outlet/>
        </>
    )
}

export default MasterLayout