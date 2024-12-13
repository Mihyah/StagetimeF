import Footer from '../../components/footer/Footer';
import inc from "../../assets/2020INC.png";
import arisehealth from "../../assets/AriseHealth.png";
import ephicient from "../../assets/Ephicient.png";
import pipelinxco from "../../assets/Pipelinxco.png";
import thepark from "../../assets/THEPARK.png";
import toogether from "../../assets/TOOGETHER.png"
import './About.css'

const About = () => {
    return ( 
        <div> 
            <div className="con">
            <h1 className="about">About Us</h1>
            </div>
            <div className="partners2">
          <div className="partwords2">
            <h1>Meet Our Partners</h1>
          </div>
          <div className="f1stpart2">
            <img src={arisehealth} alt="Arise Health" />
            <img src={ephicient} alt="Ephicient" />
            <img src={inc} alt="INC" />
            <img src={thepark} alt="thepark" />
          </div>
          <div className="s2ndpart2">
          <img src={pipelinxco} alt="pipelinxco" />
          <img src={toogether} alt="toogether" />
          </div>
        </div>
         <div className="footer2">
            <Footer/>
         </div>
    </div>
    
     );
}
 
export default About
