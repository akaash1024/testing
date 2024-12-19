
import { BEST_BRANDS_ON_OFFER } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const IndianWearReimagined = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Indian Wear Reimagined</h1>
                </div>

                <div className="banner">
                    <img src='/image/wedding_wonder.jpg' alt="" />
                </div>

                <div className="main--card">
                    <CardCreation list={BEST_BRANDS_ON_OFFER} />
                </div>
            </div>
        </>
    )
}