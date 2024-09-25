import {useStateContext} from "../Context/ContextProvider.jsx";

const Users = () => {
    const logout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
    }
    const {user} = useStateContext();
    return (
        <>
            <div>
                Users Page
            </div>
            Name: {user.name}<br />
            Phone: {user.phone}<br />
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Users;