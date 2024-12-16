
import { WEST_SIDE_STORE } from "../../../Links"
import { CardCreation } from "./CardCreation"




export const TheWestSideStore = () => {
    
    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>The West Side Store</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={WEST_SIDE_STORE} />
                </div>
            </div>
        </>
    )
}