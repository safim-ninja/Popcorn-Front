import {createBrowserRouter} from "react-router-dom";
import MasterLayout from "./Components/MasterLayout.jsx";
import Users from "./Pages/Users.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout/>,
        children: [
            {
                path: "/users",
                element: <Users/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            }
        ]
    }
])

export default router