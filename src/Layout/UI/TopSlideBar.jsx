import { useEffect, useState } from "react";
import { slider } from "../../Links";

export const TopSlideBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    };


    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>prevIndex === 0 ? slider.length - 1 : prevIndex - 1)
    };

    return (
        <div className="banner-container" style={{ position: "relative" }}>
            
            <img
                src={slider[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ width: "100%", height: "auto" }}
            />

            
            <button
                className="prev-button"
                onClick={handlePrev}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "65px",
                    height: "65px",
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
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "65px",
                    height: "65px",
                    cursor: "pointer",
                    
                    backgroundColor: "#ECECEC",
                }}
            >
                &#8250; 
            </button>

            
            <div
                className="dots"
                style={{
                    position: "absolute",
                    bottom: "15%",
                    right: ".01%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "5px",
                }}
            >
                {slider.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)} 
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor:
                                currentIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
};
