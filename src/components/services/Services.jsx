import servicesGraphic from '../../assets/servicesGraphic.png'
import servicesIcon1 from '../../assets/servicesIcon1.png'
import servicesIcon2 from '../../assets/servicesIcon2.png'
import servicesIcon3 from '../../assets/servicesIcon3.png'
import './services.css'

const Services = () => {
    return (
        <div className='servicesContainer'>

            <div className="servicesHead">
                <h3>Whatever work you do,<br /> we're able to help</h3>
            </div>

            <div className="servicesBody">

                <div className="servicesImage">
                    <img src={servicesGraphic} alt="servicesGraphic" />
                </div>

                <div className="servicesText">

                    <div className="servicesTextArea">
                        <div className="servicesTextIcon">
                            <img src={servicesIcon1} alt="servicesIcon1" />
                            <h5>Design and Assets</h5>
                        </div>

                        <div className="servicesTextBody">
                            
                            <h6>Make your brand stand out with pixel-perfect design crafted to perfection</h6>
                        </div>
                    </div>

                    <div className="servicesTextArea">
                        <div className="servicesTextIcon">
                            <img src={servicesIcon2} alt="servicesIcon2" />
                            <h5>Easy Content</h5>
                        </div>

                        <div className="servicesTextBody">
                            
                            <h6>Import your demos or build pages visually. Bonus: All images and illustrations included!</h6>
                        </div>
                    </div>

                    <div className="servicesTextArea">
                        <div className="servicesTextIcon">
                            <img src={servicesIcon3} alt="servicesIcon3" />
                            <h5>Fast and Reliable</h5>
                        </div>

                        <div className="servicesTextBody">
                            
                            <h6>No heavy-weight plugins. No builders. No unnecessary file loading. Pure WordPress.</h6>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services