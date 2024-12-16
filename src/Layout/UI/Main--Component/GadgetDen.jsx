
import { GADGET_DEN } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const GedgetDen = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Gedget Den</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={GADGET_DEN} />
                </div>
            </div>
        </>
    )
}