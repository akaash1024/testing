import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


import data from './NAVBAR_DATA'
import { useAuth } from "../../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../Cart/CartProvider";


const userEssentials = [
    { name: "My Account", icon: "https://www.tatacliq.com/src/general/components/img/profile.png" },
    { name: "Order History", icon: "https://www.tatacliq.com/src/general/components/img/order-history.svg" },
    { name: "My WishList", icon: "https://www.tatacliq.com/src/general/components/img/WL7.svg" },
    { name: "Alert & Coupon", icon: "https://www.tatacliq.com/src/account/components/img/alert.svg" },
    { name: "Gift Card", icon: "https://www.tatacliq.com/src/account/components/img/giftCards.svg" },
    { name: "CLiQ Cash", icon: "https://www.tatacliq.com/src/account/components/img/cliqCash.svg" }
];


const HoverEle = ({ currentObj }) => {

    return (
        <>
            <div className="elememtOption">
                <div className="img--container">
                    <img src={currentObj.icon} alt={currentObj.name} />
                </div>
                <h3>{currentObj.name}</h3>
            </div>
        </>
    )
}


export const Header = () => {

    const navigate = useNavigate()
    const { isLoggedIn, activeUser, logout } = useAuth();
    const { cart } = useCart()
    const email = activeUser?.email || "";
    const [showMessage, setShowMessage] = useState(false);




    const handleLogout = () => {
        logout();
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);

        }, 3000);
    };

    return (
        <>
            <header className="Header">
                <div className="container">


                    <div className="tata--cliqLogo" onClick={() => navigate('/')}>

                    </div>

                    <nav className="funtionality">
                        <div className="funtionality__upper">
                            <div className="left--tatacliqLuxury">
                                <a href="#" alt='tata luxury'>Tata CLiq luxury</a>
                            </div>

                            <div className="user__essentials">
                                <div>CLiQ Cash</div>
                                <div>Gift Card</div>
                                <div>CLiQ Care</div>
                                <div>Track Orders</div>
                                <div className="user__essentials__hover">
                                    {isLoggedIn ? `👋${email}` : `Login/ Register`}
                                    <div className="user__essentials__dropdown">
                                        <div className="user__getIn__option">

                                            <button className="login-register"
                                                onClick={() => {
                                                    if (!isLoggedIn) {
                                                        navigate('/login');
                                                    }
                                                }}
                                            >
                                                {isLoggedIn ? <span onClick={handleLogout}>LogOut</span> : `Login/ Register`}
                                            </button>

                                            <div className="linee"></div>
                                        </div>
                                        {
                                            userEssentials.map((currentObj, index) => (
                                                <div className="dropdown--section" key={`${currentObj.id}--${index}`}>
                                                    <span className="category" >
                                                        <HoverEle currentObj={currentObj} />
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="funtionality__lower">
                            <div className="left--categories--brands">
                                <div className="categories__hover">
                                    <div className="categories__left">
                                        Categories
                                        <div className="arrow"></div>
                                    </div>

                                    {/* //! this would implement or learn later */}
                                    {/* <div className="dropdown">
                                        {
                                            data.categories.map((category, index) => (
                                                <div className="dropdown-section" key={index}>
                                                    <span className="category">{category.title}</span>
                                                    <div className="sub-dropdown">
                                                        <ul>
                                                            {
                                                                category.subcategories.map((sub, i) => (
                                                                    <li style={{ listStyle: 'none' }} key={i}>{sub}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div> */}

                                </div>
                                <div className="brands__hover">
                                    <div className="brands__left">
                                        Brands
                                        <div className="arrow"></div>
                                    </div>
                                    <div className="dropdown">
                                        {
                                            data.categories.map((category, index) => (
                                                <div className="dropdown-section" key={index}>
                                                    <span className="category">{category.title}</span>
                                                    <div className="sub-dropdown">
                                                        <ul>
                                                            {
                                                                category.subcategories.map((sub, i) => (
                                                                    <li style={{ listStyle: 'none' }} key={i}>{sub}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>

                                </div>
                            </div>

                            <div className="searchbar__mid">
                                <div className="searchbar__input">
                                    <div className="search__icon" ><img src="/image/search-inactive.png" alt="" /></div>
                                </div>
                            </div>

                            <div className="right--cart--favorite">
                                <div className="myWishList">
                                    <img
                                        onClick={() => {
                                            if (!isLoggedIn) {
                                                navigate('/login');
                                            }
                                        }}
                                        src="https://www.tatacliq.com/src/general/components/img/WL4.svg" alt="cart" /></div>
                                <div className="myBagShow">
                                    {cart.length > 0 && <div className="cartCount">{cart.length}</div>}
                                    <img onClick={() => navigate('/cart')}
                                        src="https://www.tatacliq.com/src/general/components/img/orderhistorywhite.svg" alt="favorite" />
                                </div>



                            </div>
                        </div>

                    </nav>

                </div>
            </header>

            {/* Logout Success Message */}
            {showMessage && (
                <div className="logout-message">
                    You've logout successfully
                </div>
            )}
        </>
    )
}