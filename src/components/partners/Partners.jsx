import './partners.css'
import IMAGES from '../../assets/images.js'

const Partners = () => {


    return (
        <div className='partnersContainer'>

            <div className="partnersText">
                <h3>Trusted by forward-thinking software teams around the world</h3>
            </div>

            <div className="partnerIcons">
                <img src={IMAGES.netflixLogo} alt="partnerLogo" />
                <img src={IMAGES.drawkitLogo} alt="partnerLogo" />
                <img src={IMAGES.figmaLogo} alt="partnerLogo" />
                <img src={IMAGES.cinemaxLogo} alt="partnerLogo" />
                <img src={IMAGES.stripeLogo} alt="partnerLogo" />
                <img src={IMAGES.googleLogo} alt="partnerLogo" />
                <img src={IMAGES.disneyLogo} alt="partnerLogo" />
            </div>

        </div>
    )
}

export default Partners