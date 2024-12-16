
import { BEST_BRANDS_ON_OFFER } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const BestBrandsOnOffer = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Best Brands on Offer</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={BEST_BRANDS_ON_OFFER} />
                </div>
            </div>
        </>
    )
}