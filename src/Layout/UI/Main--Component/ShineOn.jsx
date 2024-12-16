
import { useNavigate } from "react-router-dom"
import { SHINE_ON } from "../../../Links"
import { CardCreation } from "./CardCreation"



export const ShineOn = () => {
    

    return (
        <>
            <div className="main--BestBrandsOnOfferContainer">
                <div className="main--text__description">
                    <h1>Shine On</h1>
                </div>
                <div className="main--card ">
                    <CardCreation list={SHINE_ON} />
                </div>
            </div>
        </>
    )
}