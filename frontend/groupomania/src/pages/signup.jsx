import {useRef, useState, useEffect} from "react"
import loginLogo from "../images/signupLogo.png"
import emailLogo from "../images/emailLogo.png"
import passwordLogo from "../images/passwordLogo.png"
import { Link } from "react-router-dom";
import "../styles/login.css"
import axios from '../api/axios';

const emailForm = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordForm = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNUP_URL ='/signup';

function SignUp() {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
    emailRef.current.focus();
    }, [])

    useEffect(() => {
        const result = emailForm.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = passwordForm.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
        }, [password, matchPassword])

        useEffect(() => {
            setErrMsg('');
        }, [email, password, matchPassword])

        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(email, password);
            setSuccess(true);
        }
/*
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            try{
                const response = await axios.post(SIGNUP_URL,
                    JSON.stringify({ email, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);

            setEmail('');
            setPassword('');
            setMatchPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    */

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <Link to={'/'}>
                        Home
                    </Link>
                </section>
            ) : (
        <div className="loginSpace">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <img src={loginLogo} alt="logo connexion" className='loginLogo'/>
            <form onSubmit={handleSubmit}>
            <img src={emailLogo} alt="logo email" className="usernameLogo" />
            <label htmlFor="email">
                            Email:
            </label>
            <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                <img src={passwordLogo} alt="logo cadenas" className="passwordLogo" />
                <label htmlFor="password">
                Mot de passe :
                </label>
                <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            8 à 24 caractères.<br />
                            Doit inclure majuscules et minuscules, un nombre et un caractère spécial.<br />
                        </p>
                <label htmlFor="confirm_pwd">
                            Confirm Password:
                </label>
                <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPassword(e.target.value)}
                            value={matchPassword}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
            <button disabled={!validEmail || !validPassword || !validMatch ? true : false}>Inscription</button>
            </form>
        </div>
            )}
            </>
    )
}

export default SignUp