import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbarContainer'>

      <div className="navLogo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navLinks">
        <ul>
          <li>Homepages</li>
          <li>Products</li>
          <li>Company</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="navContact">
        <div className="navCall">
          <h2>+00 123 456 789</h2>
        </div>
        <div className="navButton">
          <button>Contact Us</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar