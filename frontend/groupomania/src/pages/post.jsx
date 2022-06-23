import loginLogo from "../images/loginLogo.png"
import emailLogo from "../images/emailLogo.png"
import passwordLogo from "../images/passwordLogo.png"
import "../styles/login.css"

function Post() {
    return (
        <div className="loginSpace">
            <img src={loginLogo} alt="logo connexion" className='loginLogo'/>
            <div className="loginFields">
                <div className ="usernameField">
                <img src={emailLogo} alt="logo email" className="usernameLogo" />
                <input type="text" placeholder ="Nom d'utilisateur" className="username" />
                </div>
                <div className ="passwordField">
                <img src={passwordLogo} alt="logo cadenas" className="passwordLogo" />
                <input type="text" placeholder ="Mot de passe" className="password" />
                </div>
            </div>
            <button>Connexion</button>
        </div>
    )
}

export default Post