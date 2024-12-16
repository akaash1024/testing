import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CardCreation = (props) => {
    const array = props.list;
    const navigate = useNavigate()

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);

    const totalItems = array.length;
    const displayCount = 4;
    const arr = array.slice(start, end);

    const Card = ({ currentCard }) => {
        const style = {
            borderRadius: '30px'
        }
        return (
            <div className="card--container">
                <img src={currentCard} style={style} alt="image" onClick={()=>navigate(`jewelery`)}/>
            </div>
        );
    };

    const handlePrev = () => {
        setStart((prevStart) => {

            const newStart = prevStart === 0 ? totalItems - displayCount : prevStart - 1;
            setEnd(newStart + displayCount);
            return newStart;
        });
    };

    const handleNext = () => {
        setStart((prevStart) => {

            const newStart = prevStart === totalItems - displayCount ? 0 : prevStart + 1;
            setEnd(newStart + displayCount);
            return newStart;
        });
    };

    return (
        <>
            <div className="ConnectBaseWidget" >
                <div className="card--action-btn">
                    <button
                        className="prev-button"
                        onClick={handlePrev}
                        style={{
                            position: "absolute",
                            right: "80px",
                            top: "20px",
                            transform: "translateY(-50%)",
                            background: "rgba(0, 0, 0, 0.5)",
                            color: "white",
                            border: "none",
                            borderRadius: "50% 0 0 50%",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            
                            backgroundColor: "#ECECEC",
                        }}
                    >
                        &#8249;
                    </button>


                    <button
                        className="next-button"
                        onClick={handleNext}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "10px",
                            transform: "translateY(-50%)",
                            background: "rgba(0, 0, 0, 0.5)",
                            color: "white",
                            border: "none",
                            borderRadius: "0 50% 50% 0",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            
                            backgroundColor: "#ECECEC",
                        }}
                    >
                        &#8250;
                    </button>

                </div>

                <div className="card__ConnectBaseWidget">
                    {arr.map((currentCard, index) => {
                        return (

                            <Card key={index} currentCard={currentCard} />

                        )
                    })}
                </div>
            </div>
        </>
    );
};