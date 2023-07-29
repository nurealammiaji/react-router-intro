import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <h1>Welcome to App.jsx</h1>
      <Header></Header>
      <Outlet/>
    </>
  )
}

export default App
