import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useCart } from "../Cart/CartProvider";



export const ProductDetail = () => {

  const product = useLoaderData()

  const { addToCart } = useCart();
  const { description, id, image, price, title, rating: { rate, count } } = product;
  const [showMessage, setShowMessage] = useState(false);

  const handleAdded = (product) => {
    addToCart(product)
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false)
    }, 3000);
  };



  return (
    <>
      <div className="product-detail-container">
        <div className="image-section">
          <div className="image-section--child">
            <div className="main-image">
              <img src={image} alt="Main Shirt" />
              <div className="discount-badge">40% off</div>
            </div>
            <div className="main-image">
              <img src={image} alt="Main product" />
            </div>
          </div>

          <div className="thumbnail-images">
            <img src={image} alt="Thumbnail 1" />
            <img src={image} alt="Thumbnail 2" />
            <img src={image} alt="Thumbnail 3" />
          </div>
        </div>

        <div className="details-section">
          <div className="breadcrumb">
            Home &gt; {title.length > 15 ? title.slice(0, 14) + "..." : title}
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="price-section">
            <span className="current-price">{`$${price}`}</span>
            <span className="mrp">{`$${price + 22.95}`}</span>
            <span className="discount">30% Off</span>
          </div>
          <p className="price-drop">Price dropped by {`$${3.9}`} since yesterday</p>
          <p className="offer">
            Buy 1 get additional 10% off or Buy 2 & more get additional 20% off, no coupon required.
          </p>
          <div className="ratings-reviews">
            <span className="rating">4 ★</span>
            <span className="reviews">41 Ratings & 5 Reviews</span>
          </div>
          <div className="color-options">
            <p>Colour: White</p>
            <div className="color-thumbnails">
              <img src={image} alt="Black" />
              <img src={image} alt="White" />
              <img src={image} alt="Red" />
            </div>
          </div>

          <div className="actions">
            {console.log("testing", product)}

            <button className="buy-now" onClick={() => handleAdded(product)}>Buy Now</button>
            <button className="add-to-bag" onClick={() => handleAdded(product)}>Add to Bag</button>
          </div>
        </div>
      </div>


      {showMessage && (
        <div className="product-added-message">
          Added to cart
        </div>
      )}
    </>
  );
};


