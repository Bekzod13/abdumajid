import './offer.css'
import offer from '../../images/offer-img/offer-img.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="container offer-box">
            <div className="right-line">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Non neque massa purus, vitae faucibus sed.  </h1>
            </div>
            <div className="left-line">
                <img src={offer} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Offer;