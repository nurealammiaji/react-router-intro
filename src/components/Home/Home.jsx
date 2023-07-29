import './Home.css';
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default Home;