import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../contexts/auth";
import loginLogo from "../images/loginLogo.png"
import emailLogo from "../images/emailLogo.png"
import passwordLogo from "../images/passwordLogo.png"
import "../styles/login.css"
import axios from "../api/axios";
import { Link } from "react-router-dom";
const LOGIN_URL = '/api/users/login';

const Login = () => {
    const {setAuth}=useContext(AuthContext)
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(()=> {
      emailRef.current.focus();
    }, [])

    /*const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email);
      setEmail('');
      setPassword('');
      setSuccess(true);
    }*/
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
       try{
        const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true
        });
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({email, password, roles, accessToken});
        setEmail('');
        setPassword('');
        setSuccess(true);
       }catch(err){
        if(!err?.response){
          setErrMsg('No server response');
        } else if(err.response?.status === 400) {
          setErrMsg('Missing email or password');
        } else if (err.response?.status === 401){
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
       }
    }
    
        
    return (
      <>
      {success ? (
          <section>
              <h1>You are logged in!</h1>
              <Link to={'/dashboard'}>
                        Home
                </Link>
          </section>
      ) : (
        <div className="loginSpace">
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <img src={loginLogo} alt="logo connexion" className='loginLogo'/>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input 
              type ="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              required
              />
              <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
            <button>Connexion</button>
            </form>
        </div>
      )}
      </>
    )
  
}

export default Login