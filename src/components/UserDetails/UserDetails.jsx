import './UserDetails.css';
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);

    return (
        <>
            <h1>User Details</h1>
            <div className='user-details-card'>
                <h3>{user.name}</h3>
                <p>Website: {user.website}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.address.street}, {user.address.city}</p>
            </div>
        </>
    );
};

export default UserDetails;