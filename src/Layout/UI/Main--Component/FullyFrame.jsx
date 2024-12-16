
import { FULLY_FRAMED } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const FullyFramed = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Fully Framed</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={FULLY_FRAMED} />
                </div>
            </div>
        </>
    )
}