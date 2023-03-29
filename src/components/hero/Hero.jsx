import './hero.css'
import heroImage from '../../assets/heroGraphic.png'

const Hero = () => {
  return (
    <div className='heroContainer'>

        <div className="heroText">
            <h1>Good design meets <br /> great experience</h1>
            <h5>For everyone, from beginners to experts</h5>
        </div>

        <div className="heroButtons">
            <button>Buy Digits</button>
            <button>See the features</button>
        </div>

        <div className="heroImage">
            <img src={heroImage} alt="heroImage" />
        </div>

    </div>
  )
}

export default Hero