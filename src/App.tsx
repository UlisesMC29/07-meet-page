import './App.css'
import ImgLeft from '../src/assets/desktop/image-hero-left.png'
import ImgRight from '../src/assets/desktop/image-hero-right.png'
import LogoMain from '../src/assets/logo.svg'
import Mantxt from '../src/assets/desktop/image-man-texting.jpg'
import MenMeet from '../src/assets/desktop/image-men-in-meeting.jpg'
import WomCall from '../src/assets/desktop/image-woman-in-videocall.jpg'
import WomVideo from '../src/assets/desktop/image-women-videochatting.jpg'


function App() {

  return (
    <div className="App">
      <div className='header'>
        <img className='logo' src={LogoMain} alt="Logo" />
      </div>
      <div className="container-header">
        <div className='left-container'>
          <img className='img-left' src={ImgLeft} alt="Img Left" />
        </div>
        <div className='center-container'>
          <h1 className='txt-h1'>Group Chat for Everyone</h1>
          <p className='txt-body'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
          <div className='btn-container'>
            <p className='btn-down'>Download <p className='txt-ver'> v1.3</p> </p>
            <p className='btn-txt'>What it is?</p>
          </div>
        </div>
        <div className='rigth-container'>
          <img className='img-right' src={ImgRight} alt="Img Right" />
        </div>
      </div>
      <div className='circule-container'>
        <hr className='v-line1' />
        <p className='circule'>01</p>
      </div>
      <div className='img-container'>
        <img className='img-body' src={Mantxt} alt="Man Texting" />
        <img className='img-body' src={MenMeet} alt="Men in meetting" />
        <img className='img-body' src={WomCall} alt="Woman in videocall" />
        <img className='img-body' src={WomVideo} alt="Woman in videoconference" />
      </div>

      <div className='txt-info-container'>
        <p className='txt-built'>Built for modern use</p>
        <h1 className='txt-smart'>Smarter meetings, all in one place</h1>
        <p className='txt-content'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
      </div>

      <div className='circule-container'>
        <hr className='v-line1' />
        <p className='circule02'>02</p>
      </div>

      <div className='footer'>
        <div className='mask'>
          <div className='content-footer'>
            <h1 className='footer-h1'>Experience more together</h1>
            <p className='footer-txt'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
            <p className='footer-btn'>Download <p className='txt-btn'> v1.3</p></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
