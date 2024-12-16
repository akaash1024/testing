// Cart.js
import React, { useState } from 'react';
import { useCart } from "../Cart/CartProvider";
import './Cart.css';

export const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const [showMessage, setShowMessage] = useState(false);

    const orderPlaced = () => {

        setShowMessage(true);
        clearCart()
        setTimeout(() => {
            setShowMessage(false);

        }, 3000);
    };

    return (
        <>

            <div className="cart-container">
                <h1 className="cart-title">My Bag</h1>

                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    <div className="cart-content">

                        <div className="cart-items">

                            <div className="delivery-info">
                                <span className="info-icon">ℹ️</span>
                                Review your cart summary for the final amount and any eligible shipping discounts.
                            </div>

                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>

                                    <div className="item-details">
                                        <h3 className="item-title">{item.title}</h3>
                                        <p className="item-price">{`$${item.price}`}</p>

                                        <div className="item-color">
                                            Color: White
                                        </div>

                                        <div className="item-controls">

                                            <div className="quantity-selector">
                                                <label>Qty</label>
                                                <select
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                >
                                                    {[1, 2, 3, 4, 5].map(num => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="item-actions">
                                            <button className="wishlist-button">Save to wishlist</button>
                                            <button
                                                className="remove-button"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>

                                        <div className="delivery-estimate">
                                            <span className="delivery-icon">🚚</span>
                                            Delivery by {
                                                (() => {
                                                    const deliveryDate = new Date();
                                                    deliveryDate.setDate(deliveryDate.getDate() + 10);
                                                    return deliveryDate.toLocaleDateString();
                                                })()
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="delivery-address">
                                <h3>Deliver To</h3>
                                <p>382415, Ahmedabad</p>
                                <button className="change-button">Change</button>
                            </div>

                            <div className="coupon-section">
                                <button className="coupon-button">
                                    Check for Coupons

                                </button>
                            </div>

                            <div className="price-summary">
                                <div className="summary-row">
                                    <span>Bag Total</span>
                                    <span>{`$ ${cartTotal.toFixed(2)}`}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Processing Fee</span>
                                    <span>{`+ $ 29.00`}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Product Discount(s)</span>
                                    <span className="discount">
                                        - $ {`100.00`}
                                    </span>
                                </div>
                                <div className="savings-info">
                                    You will save $ {`${100}.00`} on this order
                                </div>
                                <div className="total-row">
                                    <span>Total</span>

                                    <span>{`$ ${(cartTotal + 29 - 100).toFixed(2)}`}</span>
                                </div>
                            </div>

                            <button className="checkout-button"
                                onClick={orderPlaced}
                            >Checkout</button>

                            <div className="security-info">
                                <span className="security-icon">🔒</span>
                                Safe and secure payments. Easy returns.
                                <br />100% Authentic products.
                            </div>
                        </div>
                    </div>
                )}
            </div>


            {showMessage && (
                <div className="order-placed">
                    🎉Order Placed ! Thank you for shopping with us!!
                </div>
            )}
        </>
    );
};



