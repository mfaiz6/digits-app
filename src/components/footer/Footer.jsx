import './footer.css'
import logo from '../../assets/logo.png'
import dribble from '../../assets/icon-dribbble.png'
import envato from '../../assets/icon-envato.png'
import facebook from '../../assets/icon-facebook.png'
import instagram from '../../assets/icon-instagram.png'
import twitter from '../../assets/icon-twitter.png'

const Footer = () => {
    return (
        <div className='footerContainer'>


            <div className="fLinksContainer">

                <div className="fBrand">
                    <div className="fBrandLogo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="fBrandText">
                        Digits is a website template built to work seamlesly with the WordPress block editor to create beautifully designed pages in minutes.
                    </div>
                </div>

                <div className="fLinks">
                    <h6>Pages</h6>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="fLinks">
                    <h6>Demos</h6>
                    <ul>
                        <li>Classic</li>
                        <li>Boxy</li>
                        <li>Gradient</li>
                        <li>Minimal</li>
                        <li>Night</li>
                    </ul>
                </div>

                <div className="fSocial">

                    <div className="fSocialText">
                        Resources
                    </div>

                    <div className="fSocialIcons">
                        <img src={dribble} alt="dribble" />
                        <img src={envato} alt="envato" />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>

                    <div className="fSocialBottoms">
                        <p>Download now</p>
                        <p>Documentation</p>
                    </div>

                </div>

            </div>


            <hr className='footerRule' />


            <div className="lowerFooterContainer">

                <h5>Copyright &copy; 2020 tempy.club</h5>

                <div className="lowerFooterLinks">
                    <ul>
                        <li>Privacy policy</li>
                        <li>Terms of Use</li>
                        <li>GDPR</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer