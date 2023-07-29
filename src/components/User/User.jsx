import './User.css';

const User = ({user}) => {

    const {name, email, phone} = user;

    return (
        <div className="user-card">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;