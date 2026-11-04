
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { photo } from "../data";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal
  } = useCart();

  const formatPrice = (price) =>
    "₹" + price.toLocaleString("en-IN");

  const deliveryCharge = cartTotal >= 999 || cartTotal === 0 ? 0 : 40;
  const grandTotal = cartTotal + deliveryCharge;

  return (
    <section className="cart-page">
      <div className="wrap">

        <div className="cart-page-heading">
          <span className="eyebrow">YOUR ORDER</span>
          <h1>Shopping <em>Cart.</em></h1>
          <p>Review your delicious selection before checkout.</p>
        </div>

        {cart.length === 0 ? (

          <div className="cart-empty-page">
            <ShoppingBag size={55} />
            <h2>Your cart is empty!</h2>
            <p>You haven't added any delicious food yet.</p>

            <Link to="/menu" className="btn btn-dark">
              Explore Menu <ArrowRight size={17}/>
            </Link>
          </div>

        ) : (

          <div className="cart-page-layout">

            {/* CART ITEMS */}

            <div className="cart-products">

              <div className="cart-products-heading">
                <h2>Your Items ({cartCount})</h2>
                <Link to="/menu">Continue Shopping</Link>
              </div>

              {cart.map((item) => {
                const price = Number(
                  item.price.replace(/[^\d.]/g, "")
                );

                return (
                  <div className="cart-product" key={item.id}>

                    <img
                      src={photo(item.image, 300)}
                      alt={item.name}
                    />

                    <div className="cart-product-details">
                      <span>{item.category}</span>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>

                      <strong>{formatPrice(price)}</strong>
                    </div>

                    <div className="cart-product-actions">

                      <div className="cart-quantity">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14}/>
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={14}/>
                        </button>
                      </div>

                      <strong>
                        {formatPrice(price * item.quantity)}
                      </strong>

                      <button
                        className="cart-delete"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        <Trash2 size={15}/>
                        Remove
                      </button>

                    </div>

                  </div>
                );
              })}

              <Link to="/menu" className="back-menu">
                <ArrowLeft size={16}/>
                Continue Shopping
              </Link>

            </div>

            {/* ORDER SUMMARY */}

            <aside className="order-summary">

              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>Items ({cartCount})</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <div className="summary-line">
                <span>Delivery Charge</span>
                <strong>
                  {deliveryCharge === 0
                    ? "FREE"
                    : formatPrice(deliveryCharge)}
                </strong>
              </div>

              {cartTotal < 999 && (
                <p className="delivery-note">
                  Add {formatPrice(999 - cartTotal)} more
                  for free delivery!
                </p>
              )}

              <div className="summary-total">
                <span>Total Amount</span>
                <strong>{formatPrice(grandTotal)}</strong>
              </div>

              <Link
                to="/checkout"
                className="btn btn-dark checkout-button"
              >
                Proceed to Checkout
                <ArrowRight size={17}/>
              </Link>

              <p className="secure-note">
                Freshly prepared with love ❤️
              </p>

            </aside>

          </div>
        )}

      </div>
    </section>
  );
}
