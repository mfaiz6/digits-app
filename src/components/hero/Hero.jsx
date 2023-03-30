import './hero.css'
import heroImage from '../../assets/heroGraphic.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='heroContainer'>

        <div className="heroText">
            <h1>Good design meets <br /> great experience</h1>
            <h5>For everyone, from beginners to experts</h5>
        </div>

        <div className="heroButtons">
        <button><Link to="/register">Register</Link></button>
        <button><Link to="/login">Sign in</Link></button>
        </div>

        <div className="heroImage">
            <img src={heroImage} alt="heroImage" />
        </div>

    </div>
  )
}

export default Hero