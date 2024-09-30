import {useStateContext} from "../Context/ContextProvider.jsx";
import axiosClient from "../axiosClient.jsx";

const Users = () => {
    const {user, setUser, setToken} = useStateContext();
    const handleLogout = () => {
        const payload = {
            user: user
        }
        axiosClient.post("/logout", payload).then(({data}) => {
            setUser(data.user);
            setToken(data.token);
            console.log(data);
        }).catch(error => {
            console.error(error);
        })
    }
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         email: email,
    //         password: password
    //     }
    //     axiosClient.post("/login", payload).then(({data}) => {
    //         setUser(data.user);
    //         setToken(data.token);
    //         console.log(data);
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }
    return (
        <>
            <div>
                Users Page
            </div>
            Name: {user.name}<br />
            Phone: {user.phone}<br />
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Users;