import axiosClient from "../axiosClient.jsx";
import {useStateContext} from "../Context/ContextProvider.jsx";

const LogoutButton = () => {

    const {setUser, setToken} = useStateContext();

    const handleLogout = () => {
        axiosClient.get("/logout").then(({data}) => {
            setUser(data.user);
            setToken(data.token);
            console.log(data);
        }).catch(error => {
            console.error(error);
        })
    }

    return (

        <button
            onClick={handleLogout}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Logout
        </button>
    )
}

export default LogoutButton