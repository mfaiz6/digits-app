import './testimonials.css'
import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'

const Testimonials = () => {
    return (
        <div className='Tcontainer'>

            <div className="TcontainerHead">
                <h3>What others are saying</h3>
            </div>

            <div className="TcontainerMain">

                <div className="TcontainerBody">
                    <div className="TBodyText">
                        Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!
                    </div>

                    <div className="testBodyUser">
                        <img src={test1} alt="test1" />
                        <h4>Happy User</h4>
                        <h6>tempy.club</h6>
                    </div>
                </div>

                <div className="TcontainerBody">
                    <div className="TBodyText">
                    Really easy to use and customize. easy to understand. Darinka helped me with my site! She answers very quickly, a good service! Thank you very much!
                    </div>

                    <div className="testBodyUser">
                        <img src={test2} alt="test1" />
                        <h4>Happy User</h4>
                        <h6>tempy.club</h6>
                    </div>
                </div>

                <div className="TcontainerBody">
                    <div className="TBodyText">
                    Really pleasing to look at! Documentation (including installation instructions) are clear and that is coming from a relatively new WordPress user.
                    </div>

                    <div className="testBodyUser">
                        <img src={test3} alt="test1" />
                        <h4>Happy User</h4>
                        <h6>tempy.club</h6>
                    </div>
                </div>                

            </div>

        </div>
    )
}

export default Testimonials