import './navbar.css'
import internet from '../../images/navbar-img/1.png'
import cart from '../../images/navbar-img/2.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container navbar-box">
          <div className="started"></div>
            <div className="nav-center-sec">
              <a href="#" className='links1'>Servislar</a>
              <a href="#" className='link'>Name Company</a>
              <a href="#" className='links1'>Portfolio</a>
            </div>
            <div className="nav-right-sec">
              <a href="#">
                <img src={internet} alt="" />
              </a>
              <a href="#">
                <img src={cart} alt="" />
              </a>
              <a href="#" className='enter'>Kirish</a>
              <a href="#" className='log'>Royhatdan otish</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;