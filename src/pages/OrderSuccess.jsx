
import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle2, Package, MapPin, ShoppingBag } from "lucide-react";
import { photo } from "../data";

export default function OrderSuccess() {
  const location = useLocation();

  const order =
    location.state?.order ||
    JSON.parse(localStorage.getItem("savoraLastOrder") || "null");

  if (!order) {
    return <Navigate to="/menu" replace />;
  }

  const formatPrice = (price) =>
    "₹" + price.toLocaleString("en-IN");

  return (
    <section className="success-page">
      <div className="wrap">

        <div className="success-card">

          <div className="success-icon">
            <CheckCircle2 size={55}/>
          </div>

          <span className="eyebrow">THANK YOU FOR ORDERING</span>

          <h1>Order <em>Confirmed!</em></h1>

          <p className="success-message">
            Thank you, {order.customer.name}! Your order has
            been placed successfully.
          </p>

          <div className="order-id-box">
            <span>YOUR ORDER ID</span>
            <strong>{order.orderId}</strong>
            <small>
              {new Date(order.createdAt).toLocaleString("en-IN")}
            </small>
          </div>

          <div className="success-order-details">

            <div className="success-detail-heading">
              <Package/>
              <h2>Order Details</h2>
            </div>

            {order.items.map((item) => (
              <div className="success-item" key={item.id}>
                <img
                  src={photo(item.image, 180)}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>
                  <small>Quantity: {item.quantity}</small>
                </div>

                <strong>
                  {formatPrice(item.price * item.quantity)}
                </strong>
              </div>
            ))}

            <div className="success-price-line">
              <span>Subtotal</span>
              <strong>{formatPrice(order.subtotal)}</strong>
            </div>

            <div className="success-price-line">
              <span>Delivery Charge</span>
              <strong>
                {order.deliveryCharge === 0
                  ? "FREE"
                  : formatPrice(order.deliveryCharge)}
              </strong>
            </div>

            <div className="success-total">
              <span>Total Paid / Payable</span>
              <strong>{formatPrice(order.total)}</strong>
            </div>

          </div>

          <div className="success-address">
            <MapPin/>
            <div>
              <b>Delivery Address</b>
              <p>
                {order.customer.address},
                {" "}{order.customer.city},
                {" "}{order.customer.state} -
                {" "}{order.customer.pincode}
              </p>
              <small>
                Contact: {order.customer.phone}
              </small>
            </div>
          </div>

          <div className="success-payment">
            <span>Payment Method</span>
            <strong>
              {order.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Online Payment (Demo)"}
            </strong>
          </div>

          {order.paymentMethod === "online" && (
            <p className="demo-payment-note">
              No actual online payment was processed.
              This is a demo order confirmation.
            </p>
          )}

          <div className="success-actions">
            <Link to="/menu" className="btn btn-dark">
              <ShoppingBag size={16}/>
              Order More
            </Link>

            <Link to="/" className="success-home-link">
              Back to Home
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
