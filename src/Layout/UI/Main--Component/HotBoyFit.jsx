
import { HOT_BOY_FITS } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const HotBoyFits = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Hot Boy Fits</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={HOT_BOY_FITS} />
                </div>
            </div>
        </>
    )
}