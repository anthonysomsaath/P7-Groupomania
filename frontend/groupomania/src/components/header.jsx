import logo from '../logos/icon.png'
import '../styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='header'>
                <div className='title'>
                    <h1>Groupomania</h1>
                    <img src={logo} alt="logo Groupomania" className='logo'/>
                    </div>
            <nav className ="menu">
                    <Link to="/login">Connexion</Link>
                    <Link to="/signup">Inscription</Link>
            </nav>
            </div>

        </header>
)}

export default Header