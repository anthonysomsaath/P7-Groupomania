import React, {useState} from "react"
import loginLogo from "../images/loginLogo.png"
import emailLogo from "../images/emailLogo.png"
import passwordLogo from "../images/passwordLogo.png"
import "../styles/login.css"
import axios from "../api/axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    
    axios({
        method: "post",
        withCredentials: true,
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            window.location = "/";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
        <div className="loginSpace">
            <img src={loginLogo} alt="logo connexion" className='loginLogo'/>
            <form className="form-profile" onSubmit={handleSubmit}>
            <div className="loginFields">
                <div className ="usernameField">
                <img src={emailLogo} alt="logo email" className="usernameLogo" />
                <input type="text" name="email" id ="email" placeholder ="email" className="email" onChange={(event)=>setEmail(event.target.value)} value={email}/>
                <div className="email error"></div>
                </div>
                <div className ="passwordField">
                <img src={passwordLogo} alt="logo cadenas" className="passwordLogo" />
                <input type="text" name="password" id="password" placeholder ="Mot de passe" className="password" onChange={(event) => setPassword(event.target.value)} value={password}/>
                <div className="password error"></div>
                </div>
            </div>
            <button type = "submit" >Connexion</button>
            </form>
        </div>
    )
}

export default Login