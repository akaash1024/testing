
import { HOME_CHECKLIST } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const HomeChecklist = () => {

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Home Checklist</h1>
                </div>
                <div className="main--card">
                    <CardCreation list={HOME_CHECKLIST} />
                </div>
            </div>
        </>
    )
}