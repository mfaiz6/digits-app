import './login.css'
import logo from '../../assets/logo.png'
import registerBanner from '../../assets/registerBanner.png'
import callLogo from '../../assets/phone.png'
import emailLogo from '../../assets/email.png'
import passwordLock from '../../assets/passwordLock.png'
import rectangle from '../../assets/rectangle.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import facebook from '../../assets/Facebook.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='registerContainer'>

            <div className="logoContainer">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="registerForm">

                <div className="registerFormHead">
                    <h2>Sign In</h2>
                    <p>If you don't have an account registered <br /> You can <span><Link to="/register">register here!</Link></span></p>
                </div>

                <div className="registerFormDetails">

                    <div className="registerFormInput">

                        <div className="formInputContainer">
                            <label>Email</label>
                            <img src={emailLogo} alt="emailLogo" />
                            <input type="email" placeholder='Enter your email address' autoFocus />
                        </div>

                        <div className="formInputContainer">
                            <label>Password</label>
                            <img src={passwordLock} alt="passwordLock" />
                            <input type="password" placeholder='Enter your Password' />
                        </div>

                        <div className="loginOptions">
                            <div className="loginRemember">
                                <img src={rectangle} alt="rectangle" />
                                <p>Remember me</p>
                            </div>
                            <div className="loginForgot">
                                Forgot Password?
                            </div>
                        </div>


                    </div>

                    <div className="registerButton">
                        <button>Register</button>
                    </div>

                    <div className="socialLogin">
                        <div className='socialLoginText'>or continue with</div>
                    </div>

                    <div className="socialLoginIcons">
                        <img src={facebook} alt="facebook" />
                        <img src={apple} alt="apple" />
                        <img src={google} alt="google" />
                    </div>

                </div>

            </div>


            <div className="registerBanner">

                <div className="registerContact">
                    <img src={callLogo} alt="callLogo" />
                    <h4>+94 0116 789 754</h4>
                </div>

                <div className="registerBanner">
                    <img src={registerBanner} alt="registerBanner" />
                </div>

                <div className="registerText">
                    <h2>Sign In to name</h2>
                    <p>Lorem Ipsum is simply</p>
                </div>

            </div>

        </div>
    )
}

export default Login