// imports
import './footer.css'
import finish from '../../images/footer-img/finished.png'

const Footer = () => {
return (
<div className='footer'>
    <div className="container footer-box">
        <div className="main-line-footer">
            <div className="left-footer">
                <h1 className='twise'>Follow</h1>
                <div className="nomal cor">
                    <a href="https://bekzodjonportfolio.netlify.app" className='orage'>Instagram</a>
                    <span className='orage orasas'>|</span>
                    <a href="https://bekzodjonportfolio.netlify.app" className='orage'>Telegram</a>
                </div>
            </div>

            <div className="center-footer">
                <img src={finish} alt="" />
            </div>

            <div className="left-footer right-footer">
                <h1 className='twise'>Aloqa</h1>
                <div className="nomal">
                    <a href="https://bekzodjonportfolio.netlify.app" className='orage'>Email</a>
                    <span className='orage orasas'>|</span>
                    <a href="tel: (91) 698-0700" className='orage'>Telafon</a>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Footer