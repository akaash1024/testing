
import { WATCH_THIS_SPACE } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const WatchThisSpace = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Watch This Space</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={WATCH_THIS_SPACE} />
                </div>
            </div>
        </>
    )
}