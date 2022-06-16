import logo from '../logos/icon.png'
import '../styles/header.css'
import { Link } from 'react-router-dom'

function HeaderLogged() {
    return (
        <header>
            <div className='header'>
                <div className='title'>
                    <h1>Groupomania</h1>
                    <img src={logo} alt="logo Groupomania" className='logo'/>
                    </div>
            <nav className ="menu">
                    <Link to="/user">Profil</Link>
                    <Link to="/signout">Déconnexion</Link>
            </nav>
            <div className='newPost'>
            Créer un post
            </div>
            </div>

        </header>
)}

export default HeaderLogged