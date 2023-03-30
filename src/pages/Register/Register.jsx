import './Register.css'
import logo from '../../assets/logo.png'
import registerBanner from '../../assets/registerBanner.png'
import callLogo from '../../assets/phone.png'
import emailLogo from '../../assets/email.png'
import usernameLogo from '../../assets/username.png'
import passwordLock from '../../assets/passwordLock.png'

const Register = () => {
  return (
    <div className='registerContainer'>

      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>

      <div className="registerForm">

        <div className="registerFormHead">
          <h2>Sign Up</h2>
          <p>If you already have an account registered <br /> You can <span>Login here!</span></p>
        </div>

        <div className="registerFormDetails">

          <div className="registerFormInput">

            <div className="formInputContainer">
              <label>Email</label>
              <img src={emailLogo} alt="emailLogo" />
              <input type="email" placeholder='Enter your email address' autoFocus />
            </div>

            <div className="formInputContainer">
              <label>Username</label>
              <img src={usernameLogo} alt="usernameLogo" />
              <input type="text" placeholder='Enter your User Name' />
            </div>

            <div className="formInputContainer">
              <label>Password</label>
              <img src={passwordLock} alt="passwordLock" />
              <input type="password" placeholder='Enter your Password' />
            </div>

            <div className="formInputContainer">
              <label>Confirm Password</label>
              <img src={passwordLock} alt="passwordLock" />
              <input type="password" placeholder='Confirm your Password' />
            </div>

          </div>

          <div className="registerButton">
            <button>Register</button>
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
          <h2>Sign Up to name</h2>
          <p>Lorem Ipsum is simply</p>
        </div>

      </div>

    </div>
  )
}

export default Register