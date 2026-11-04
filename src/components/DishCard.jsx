
import { ArrowUpRight, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { photo } from "../data";

export default function DishCard({ dish }) {
  const { addToCart, cart } = useCart();

  const added = cart.some((item) => item.id === dish.id);

  return (
    <article className="dish-card">

      <div className="dish-image">
        <img
          src={photo(dish.image, 700)}
          alt={dish.name}
        />

        {dish.tag && (
          <span className="dish-tag">{dish.tag}</span>
        )}
      </div>

      <div className="dish-info">
        <div>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
        </div>

        <strong>{dish.price}</strong>
      </div>

      <span className="dish-category">
        {dish.category}
      </span>

      <button
        className={`add-cart-btn ${added ? "added" : ""}`}
        onClick={() => addToCart(dish)}
      >
        {added ? <Check size={16} /> : <ShoppingBag size={16} />}
        {added ? "Add Another" : "Add to Cart"}
        <ArrowUpRight size={15} />
      </button>

    </article>
  );
}
