import './follow.css'
import follow from '../../images/follow-img/follow-img.png'
import ads from '../../images/follow-img/follow-product.png'
import vector from '../../images/follow-img/Vector6.png'

// to map
const data = [
    {
        id: 1,
        img: follow
    },
    {
        id: 2,
        img: ads
    },
    {
        id: 3,
        img: vector
    }
]

const Follow = () => {
  return (
    <div className='follow'>
        <div className="container follow-box">
            <div className="top-follow">
                <h1 className='insta'>Instagram</h1>
            </div>
            <div className="center-follow">
                {
                    data.map(item =>(
                    <div className="follow-map" key={item.id}>
                        <img src={item.img} alt="" />
                    </div>
                    ))
                }
            </div>
            {/* <div className="end-follow">
                <a href="#">Follow{vector}</a>
            </div> */}
        </div>
    </div>
  )
}

export default Follow;