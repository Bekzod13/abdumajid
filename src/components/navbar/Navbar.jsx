import './navbar.css'
import internet from '../../images/navbar-img/1.png'
import cart from '../../images/navbar-img/2.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container navbar-box">
          <div className="started"></div>
            <div className="nav-center-sec">
              <a href="https://bekzodjonportfolio.netlify.app" className='links1'>Servislar</a>
              <a href="https://bekzodjonportfolio.netlify.app" className='link'>Name Company</a>
              <a href="https://bekzodjonportfolio.netlify.app" className='links1'>Portfolio</a>
            </div>
            <div className="nav-right-sec">
              <a href="https://bekzodjonportfolio.netlify.app">
                <img src={internet} alt="" />
              </a>
              <a href="https://bekzodjonportfolio.netlify.app">
                <img src={cart} alt="" />
              </a>
              <a href="https://bekzodjonportfolio.netlify.app" className='enter'>Kirish</a>
              <a href="https://bekzodjonportfolio.netlify.app" className='log'>Royhatdan otish</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;