
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  User,
  Phone,
  Mail,
  CreditCard,
  Banknote,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { photo } from "../data";

export default function Checkout() {
  const navigate = useNavigate();

  const { cart, cartTotal, cartCount, clearCart } = useCart();

  const [payment, setPayment] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    instructions: "",
  });

  const deliveryCharge =
    cartTotal >= 999 || cartTotal === 0 ? 0 : 40;

  const grandTotal = cartTotal + deliveryCharge;

  const formatPrice = (price) =>
    "₹" + price.toLocaleString("en-IN");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "pincode") {
      if (!/^\d*$/.test(value)) return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (cart.length === 0) {
      navigate("/menu");
      return;
    }

    if (form.phone.length !== 10) {
      setError("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (form.pincode.length !== 6) {
      setError("Please enter a valid 6 digit PIN code.");
      return;
    }

    setLoading(true);

    try {
      const orderId =
        "SAV" + Date.now().toString().slice(-9);

      const order = {
        orderId,
        customer: { ...form },
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: Number(
            item.price.replace(/[^\d.]/g, "")
          ),
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal: cartTotal,
        deliveryCharge,
        total: grandTotal,
        paymentMethod: payment,
        paymentStatus:
          payment === "cod"
            ? "Pay on delivery"
            : "Demo payment - not charged",
        orderStatus: "Order placed",
        createdAt: new Date().toISOString(),
      };

      const existingOrders = JSON.parse(
        localStorage.getItem("savoraOrders") || "[]"
      );

      localStorage.setItem(
        "savoraOrders",
        JSON.stringify([order, ...existingOrders])
      );

      localStorage.setItem(
        "savoraLastOrder",
        JSON.stringify(order)
      );

      clearCart();

      navigate("/order-success", {
        state: { order },
      });

    } catch (err) {
      console.error(err);
      setError("Unable to place your order. Please try again.");
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <section className="checkout-empty wrap">
        <ShoppingBag size={50} />
        <h2>Your cart is empty</h2>
        <p>Please add food items before checkout.</p>
        <Link to="/menu" className="btn btn-dark">
          Explore Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="wrap">

        <div className="checkout-heading">
          <span className="eyebrow">ALMOST THERE</span>
          <h1>Complete your <em>order.</em></h1>
          <p>Just a few details and we'll get cooking.</p>
        </div>

        <form
          className="checkout-layout"
          onSubmit={handleSubmit}
        >

          {/* CUSTOMER DETAILS */}

          <div className="checkout-main">

            <div className="checkout-card">

              <div className="checkout-card-title">
                <User />
                <div>
                  <h2>Customer Information</h2>
                  <p>Enter your contact details.</p>
                </div>
              </div>

              <div className="checkout-fields">

                <label>
                  Full Name *
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    minLength={2}
                    required
                  />
                </label>

                <label>
                  Mobile Number *
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                  />
                </label>

                <label className="checkout-full">
                  Email Address *
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </label>

              </div>
            </div>

            {/* DELIVERY ADDRESS */}

            <div className="checkout-card">

              <div className="checkout-card-title">
                <MapPin />
                <div>
                  <h2>Delivery Address</h2>
                  <p>Where should we deliver your food?</p>
                </div>
              </div>

              <div className="checkout-fields">

                <label className="checkout-full">
                  Complete Address *
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House no., street, area, landmark"
                    rows="3"
                    required
                  />
                </label>

                <label>
                  City *
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    required
                  />
                </label>

                <label>
                  State *
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="Your state"
                    required
                  />
                </label>

                <label>
                  PIN Code *
                  <input
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="6 digit PIN"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    required
                  />
                </label>

                <label className="checkout-full">
                  Delivery Instructions
                  <textarea
                    name="instructions"
                    value={form.instructions}
                    onChange={handleChange}
                    placeholder="Any special delivery instructions?"
                    rows="2"
                  />
                </label>

              </div>
            </div>

            {/* PAYMENT */}

            <div className="checkout-card">

              <div className="checkout-card-title">
                <CreditCard />
                <div>
                  <h2>Payment Method</h2>
                  <p>Choose how you want to pay.</p>
                </div>
              </div>

              <div className="payment-options">

                <button
                  type="button"
                  className={
                    payment === "cod"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setPayment("cod")}
                >
                  <Banknote />
                  <span>
                    <b>Cash on Delivery</b>
                    <small>Pay when your order arrives.</small>
                  </span>
                  <input
                    type="radio"
                    checked={payment === "cod"}
                    readOnly
                  />
                </button>

                <button
                  type="button"
                  className={
                    payment === "online"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setPayment("online")}
                >
                  <CreditCard />
                  <span>
                    <b>Online Payment</b>
                    <small>Demo mode – no actual payment.</small>
                  </span>
                  <input
                    type="radio"
                    checked={payment === "online"}
                    readOnly
                  />
                </button>

              </div>

              {payment === "online" && (
                <p className="demo-payment-note">
                  This is a frontend demo. No money will be
                  charged. Connect Razorpay or another payment
                  gateway before accepting real payments.
                </p>
              )}

            </div>

            {error && (
              <div className="checkout-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-dark place-order-btn"
              disabled={loading}
            >
              {loading
                ? "Placing Order..."
                : `Place Order · ${formatPrice(grandTotal)}`}
            </button>

            <p className="checkout-security">
              <ShieldCheck size={16} />
              Your information is stored locally in this demo.
            </p>

          </div>

          {/* ORDER SUMMARY */}

          <aside className="checkout-summary">

            <h2>Your Order</h2>

            {cart.map((item) => {
              const price = Number(
                item.price.replace(/[^\d.]/g, "")
              );

              return (
                <div className="checkout-item" key={item.id}>
                  <img
                    src={photo(item.image, 200)}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <small>Qty: {item.quantity}</small>
                  </div>

                  <strong>
                    {formatPrice(price * item.quantity)}
                  </strong>
                </div>
              );
            })}

            <div className="checkout-summary-line">
              <span>Items ({cartCount})</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <div className="checkout-summary-line">
              <span>Delivery</span>
              <strong>
                {deliveryCharge === 0
                  ? "FREE"
                  : formatPrice(deliveryCharge)}
              </strong>
            </div>

            <div className="checkout-grand-total">
              <span>Total</span>
              <strong>{formatPrice(grandTotal)}</strong>
            </div>

            <Link to="/cart" className="edit-cart-link">
              <ArrowLeft size={15}/>
              Edit Cart
            </Link>

          </aside>

        </form>
      </div>
    </section>
  );
}
