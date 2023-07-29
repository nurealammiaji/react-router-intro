import { Link } from 'react-router-dom';
import './User.css';

const User = ({user}) => {

    const {id, name, email, phone} = user;

    return (
        <div className="user-card">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/user/${id}`}><button>Details</button></Link></p>
        </div>
    );
};

export default User;