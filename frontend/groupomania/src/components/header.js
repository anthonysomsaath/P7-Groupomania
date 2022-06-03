import logo from '../logos/icon.png'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className='header'>
            <h1>Groupomania</h1>
            <img src={logo} alt="logo Groupomania"/>
            <nav class ="menu">
                <ul>
                    <li>Connexion</li>
                    <li>Inscription</li>
                </ul>
            </nav>
            </div>

        </header>
)}

export default Header