// import
import './servis.css'
import second from '../../images/servis-img/second.png'
import first from '../../images/servis-img/first.png'
import play from '../../images/servis-img/play.png'

// for delete data
const data = [
    {
        id: 1,
        nomi: "Nikoh to‘y",
        description: "To‘yingiz ajoyib va chiroyli o‘tishini xohlaysizmi? Unda bizga murojaat qiling.",
        link: "Batafsil"
    },
    {
        id: 2,
        nomi: "Tug‘ilgan kun",
        description: "To‘yingiz ajoyib va chiroyli o‘tishini xohlaysizmi? Unda bizga murojaat qiling.",
        link: "Batafsil"
    },
    {
        id: 3,
        nomi: "Yubiley",
        description: "To‘yingiz ajoyib va chiroyli o‘tishini xohlaysizmi? Unda bizga murojaat qiling.",
        link: "Batafsil"
    },      
]

const Servis = () => {
return (
<div className='servis'>
    <div className="container servis-box">
        <div className="top-servis">
            <div className="left-top-servise">
                <img src={second} alt="" />
                <img src={first} alt="" className='absolute' />
                <img src={play} alt="" className='pppl' />
            </div>
            <div className="right-top-servise">
                <h2 className='name'>Menejer xizmatlari</h2>
                <p className='grey top2'>Ajoyib ko‘rinishdagi to‘y va marosimlar o‘qazish xizmati</p>
                <p className='grey'>Bizning jamoa sizga qulay bo‘lgan narxlarda va chiroyli ko‘rinishdagi <br /> to‘y va
                    marosimlar o‘tkazib beramiz.</p>
            </div>
        </div>
        <div className="bottom-servise">
            {
                data.map(item =>(
                    <div className="all-bottom-ser" key={item.id}>
                        <h1 className='h1-nomi'>{item.nomi}</h1>
                        <p className='p-descrp'>{item.description}</p>
                        <a href="#" className='buttoms'>{item.link}</a>
                    </div>
            ))
            }
        </div>
    </div>
</div>
)
}

export default Servis;