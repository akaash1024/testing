
import { NEXT_GEN_FASHION } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const NextGenFashion = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Next Gen Fashion</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={NEXT_GEN_FASHION} />
                </div>
            </div>
        </>
    )
}