import './portfolio.css'
import portfolioImage from '../../assets/portfolioImage.png'

const Portfolio = () => {
  return (
    <div className='portfolioContainer'>

        <div className="portfolioHeader">
            <h2>Simplicity meets innovative design</h2>
        </div>

        <div className="portfolioBody">
            <h4>It's really easy to use digits. <br />Install the theme, choose a demo and <br />start designing the future of your business!</h4>
            <button>Buy Digits</button>
        </div>

        <div className="portfolioImage">
            <img src={portfolioImage} alt="portfolioImage" />
        </div>

    </div>
  )
}

export default Portfolio