

import './Footer.css'

const Footer = () => {
    return (  
        <div>
             <div className="sub">
             <div className="news">
              <h1>Subscribe to our Newsletter</h1>
              <p>Join our mailing list to get the latest news</p>
              <form>
               <div className="form">
                <input className='email' type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
                </div>
              </form>
              </div>
            <div className="foot">
               <div className="footcover">
                <div className="logo">
                        <h1 className='the'>The</h1>
                        <h1 className='next'>Next Gen</h1>
                        <h1 className="show">SHOW</h1>
                    </div>
                    <div className='footertext'>
                        <div className='comp'>
                            <h5>COMPANY</h5>
                            <p>How it works</p>
                            <p>Talents</p>
                            <p>Events</p>
                        </div>
                        <div className='resource'>
                            <h5>RESOURCES</h5>
                            <p>Blog post name goes here</p>
                            <p>Blog post name goes here</p>
                            <p>Blog post name goes here</p>
                            <p>See all resources</p>
                        </div>
                        <div className='abt'>
                            <h5>ABOUT</h5>
                            <p>Terms and condition</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
               </div>
               <div className='copyright'>
                 <p>Copyright © 2023 The NextGen Show</p>
               </div>
            </div>
            </div>
        </div>
    );
}
 
export default Footer;