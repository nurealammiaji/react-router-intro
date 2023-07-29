import './Users.css';
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();

    return (
        <>
            <h1>Users Page</h1>
            <div className="user-container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </>
    );
};

export default Users;