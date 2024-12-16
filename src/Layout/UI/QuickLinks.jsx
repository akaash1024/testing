
import { useNavigate } from 'react-router-dom'
import { QUICKLINKS } from '../../Links'
const [westside, womenswear, menswear, handbags, watches, footer, kidswear, jewellery, beauty, homeAndLiving, gadgets,] = QUICKLINKS



export const QuickLinks = () => {
    const navigate = useNavigate()
    console.log(westside)
    return (
        <>
            <div className="QuickLinks__sldOuter">
                <div className="QuickLinks__sldRow">
                    <div className="quickLinks__card card">
                        <img src={westside} alt="westside" />
                    </div>
                    <div className="quickLinks__card card">
                        <img
                            onClick={() => navigate('/womens')}
                            src={womenswear} alt="womenswear" />
                    </div>
                    <div className="quickLinks__card card">
                        <img
                            onClick={() => navigate('/mens')}
                            src={menswear} alt="menswear" />
                    </div>
                    <div className="quickLinks__card card">
                        <img src={handbags} alt="handbags" />
                    </div>
                    <div className="quickLinks__card card">
                        <img src={watches} alt="watches" />
                    </div>
                    <div className="quickLinks__card card">
                        <img src={footer} alt="footer" />
                    </div>
                    <div className="quickLinks__card card">
                        <img src={kidswear} alt="kidswear" />
                    </div>
                    <div className="quickLinks__card card">
                        <img
                            onClick={() => navigate('/jewelery')}
                            src={jewellery} alt="jewellery" />
                    </div>
                    <div className="quickLinks__card card">
                        <img src={beauty} alt="beauty" />
                    </div>
                    <div className="quickLinks__card card">
                        <img src={homeAndLiving} alt="homeAndLiving" />
                    </div>
                    <div className="quickLinks__card card">
                        <img 
                            onClick={() => navigate('/electronics')}
                        src={gadgets} alt="gadgets" />
                    </div>

                </div>
            </div>

            <div className="active--offers">
                <div className="active--offers--container">
                    <div className="BankBanner__marginTopWithBase BankBanner__base">
                        <img src="https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg" alt="Bank Offer Banner" style={{ height: "auto", maxWidth: "100%" }} />
                    </div>
                    <div className="BankBanner__marginTopWithBase BankBanner__base">
                        <img src="https://assets.tatacliq.com/medias/sys_master/images/62309792808990.jpg" alt="Bank Offer Banner" style={{ height: "auto", maxWidth: "100%" }} />
                    </div>
                    <div className="BankBanner__marginTopWithBase BankBanner__base">
                        <img src="https://assets.tatacliq.com/medias/sys_master/images/62842086555678.jpg" alt="Bank Offer Banner" style={{ height: "auto", maxWidth: "100%" }} />
                    </div>


                </div>
            </div>
        </>
    )
}