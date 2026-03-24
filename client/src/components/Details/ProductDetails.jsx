import React, { useState } from 'react';

function ProductDetails({ product, onBack }) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.length ? product.sizes[0] : null
  );

  return (
    <div className="details-screen">
      <div className="details-header">
        <button className="circle-btn" onClick={onBack}>
          ←
        </button>
        <h2>Details</h2>
        <button className="circle-btn">♡</button>
      </div>

      <div className="details-image-section">
        <img src={product.image} alt={product.name} className="details-image" />
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="details-card">
        <div className="price-row">
          <div>
            <p className="description-label">Description</p>
            <h1>{product.name}</h1>
          </div>
          <span className="details-price">$ {product.price.toFixed(2)}</span>
        </div>

        <p className="details-description">{product.description}</p>

        {product.sizes?.length > 0 && (
          <>
            <h4 className="size-title">Choose Size</h4>
            <div className="size-row">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="checkout-row">
          <button className="cart-mini-btn">👜</button>
          <button className="checkout-btn">Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;