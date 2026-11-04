
import { useState } from "react";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import DishCard from "../components/DishCard";
import { dishes } from "../data";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [category, setCategory] = useState("All");

  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();

  const categories = [
    "All",
    "Breakfast",
    "Starters",
    "Mains",
    "Desserts",
  ];

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((d) => d.category === category);

  const formatPrice = (price) =>
    "₹" + price.toLocaleString("en-IN");

  return (
    <>
      <section className="page-hero menu-hero">
        <div className="wrap">
          <span className="eyebrow">
            FROM OUR KITCHEN TO YOUR TABLE
          </span>

          <h1>
            Good things
            <br />
            <em>on the menu.</em>
          </h1>

          <p>
            Seasonal ingredients, familiar comforts and a
            little something unexpected.
          </p>
        </div>
      </section>

      <section className="wrap page-content">

        <SectionHeading
          eyebrow="THE MENU"
          title="Find your new favourite"
          description="Our menu changes with the seasons. Here's a taste of what we love to make."
        />

        <div className="filter-row">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={category === c ? "filter active" : "filter"}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="dish-grid menu-grid">
          {shown.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* CART SECTION */}

        <section className="cart-section" id="cart">

          <div className="cart-heading">
            <div>
              <span className="eyebrow">YOUR SELECTION</span>
              <h2>Your Shopping Cart</h2>
            </div>

            <span className="cart-count">
              {cartCount} Items
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={40} />
              <h3>Your cart is empty</h3>
              <p>Add some delicious food from our menu!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">

                {cart.map((item) => {
                  const price = Number(
                    item.price.replace(/[^\d.]/g, "")
                  );

                  return (
                    <div className="cart-item" key={item.id}>

                      <img
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=150&q=80`}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                      </div>

                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <strong className="item-total">
                        {formatPrice(price * item.quantity)}
                      </strong>

                      <button
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>
                  );
                })}

              </div>

              <div className="cart-total">
                <span>Subtotal ({cartCount} items)</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <div className="cart-total grand-total">
                <span>Total Amount</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <button
                className="btn btn-dark checkout-btn"
                onClick={() =>
                  alert("Checkout page integration coming soon!")
                }
              >
                Proceed to Checkout →
              </button>
            </>
          )}

        </section>

        <p className="menu-disclaimer">
          Please let our team know about allergies or dietary
          requirements. Prices are inclusive of applicable taxes.
        </p>

      </section>
    </>
  );
}
