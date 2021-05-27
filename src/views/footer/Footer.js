import './styles.scss'
import Twitter from '../../images/twitter-icon.svg'
import Facebook from '../../images/Ig-icon.svg'
import IG from '../../images/Ig-icons.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Follow Us</p>
            <div className="footer-icons">
                <img src={Twitter} alt="twitter" className='icon'/>
                <img src={Facebook} alt="facebook" className='icon'/>
                <img src={IG} alt="instagram" className='icon'/>
            </div>
        </footer> 
    );
}
 
export default Footer;