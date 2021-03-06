import './styles.scss'
import heroImg from '../../images/screen1.png'
import mask from '../../images/mask.png'
import mask2 from '../../images/mask2.png'
import swirlBg from '../../images/bg.png'
import screen2 from '../../images/screen2.png'
import cardScreen2 from '../../images/cardScreen2.png'
import playstore from '../../images/google-play.png'
import appstore from '../../images/apple-store.png'
import logo from '../../images/Qwid.png'
import netflix from '../../images/netflix.svg'
import xbox from '../../images/xbox.svg'
import playstation from '../../images/playstation.svg'
import screen3 from '../../images/cardScreen.png'
import Footer from '../footer/Footer'
import { useRef, useState } from 'react'

const LandingPage = () => {

    const formRef = useRef(null)

    const slideToForm = () =>{
        formRef.current.scrollIntoView()
    }

    const [email,setEmail] = useState('')

    const onChangeHandler = (e) =>{
        setEmail(e.target.value)
    }

    //this handles the submission of the email
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submitted')
    }

    console.log(email)
    return ( 
        <div>
            <section className='hero txt-center'>
                <img src={logo} alt="logo" className="logo" />
                <h1 className='hero-title title-1'>Pay Online, Simply</h1>
                <div className='hero-summary'>
                    <p className='summary-1'>Send money to your friends, make payments online & go cashless.</p>
                    <p className='summary-1'>welcome to the future.<span></span></p>
                </div>
                <button className='hero-btn btn-pry mt-2' onClick={slideToForm}>Join the waitlist</button>
                <div className='hero-img'>
                     <img src={heroImg} alt='quid screen' />
                     <img src={mask} alt='mask' className="mask" />
                </div>
            </section>

            <section className='secure'>
                <div className="secure-left">
                    <h2 className='title-3'>Fully secure P2P payments</h2>
                    <img src={swirlBg} alt="bg" className="swirls" />
                </div>
                <div className="secure-right">
                    <img src={screen2} alt="screen" className="screen2" />
                </div>
            </section>

            <section className='cards txt-center'>
                <h2 className='cards-title title-2'>Say hello to <br/>Secure & customizable <br/> virtual cards</h2>
                <p className='summary-1 mt-2'>Pay for Netflix or buy those shoes online using our secure virtual <br/> customizable cards</p>
                <div className="cards-examples">
                     <img src={screen3} alt="screen" className="screen" />
                     <img src={netflix} alt="netflix" className="netflix e-card" />
                     <img src={xbox} alt="xbox" className="xbox e-card" />
                     <img src={playstation} alt="playstation" className="playstation e-card" />
                     <img src={mask2} alt='mask' className="mask-two" />   
                </div>
                <img src={cardScreen2} alt="screen" className="cardScreen" />
            </section>

            <section className='waitlist txt-center'>
                <h2 className='waitlist-title title-2'>Coming Soon</h2>
                <div className="waitlist-links">
                    <img src={playstore} alt="playstore" className="playstore" />
                    <img src={appstore} alt="appstore" className="appstore" />
                </div>
                <div className="waitlist-form">
                    <div className="left">
                        <h2 className='title-2'>Join <br/>our <br/>waitlist!</h2>
                    </div>
                    <form className="right" ref={formRef} onSubmit={handleSubmit}>
                        <input className='input-field-1' placeholder='your mail' value={email} onChange={onChangeHandler}/>
                        <button className='btn-pry-b mt-2'>Join the waitlist</button>
                    </form>
                </div>
             </section>
             <Footer />
        </div> 
        );
}
 
export default LandingPage;