export const ErrorPage404 = () => {
    return (
        <>
            <div className="NoResultPage__base">
                <div className="errorMessageContainer">
                    <div className="noResult__outer--image">
                        <div className="errorText">
                            <h1 className="error-code">404</h1>
                            <p style={{color: 'white'}}>Uh-oh! The page you’re searching for is unavailable.</p>
                            <p style={{color: 'white'}}>Visit Croma to explore a wide selection of electronics.</p>
                            <p style={{color: 'white'}}>Looking for your next fashion, beauty and lifestyle fix?</p>
                            <p style={{color: 'white'}}>Keep browsing to CLiQ with the latest trends today.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
