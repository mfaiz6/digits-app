import './cta.css'
import mailIcon from '../../assets/mailIcon.png'

const Cta = () => {
    return (
        <div className='ctaContainer'>

            <div className="ctaText">
                <h2>Ready to launch <br />your next website?</h2>
            </div>

            <div className="ctaAction">
                <button> <span><img src={mailIcon} alt="mailIcon" /></span> Get in touch now</button>
                <p>Or, take a peek inside our <span className='dYellow'>design studio</span></p>
            </div>

        </div>
    )
}

export default Cta