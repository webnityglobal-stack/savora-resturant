
import {
  createContext,
  useContext,
  useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ADD PRODUCT TO CART
  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === dish.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === dish.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...dish,
          quantity: 1
        }
      ];
    });
  };

  // REMOVE PRODUCT FROM CART
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // UPDATE PRODUCT QUANTITY
  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + change
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // CLEAR COMPLETE CART AFTER ORDER
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL CART ITEMS
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL CART PRICE
  const cartTotal = cart.reduce(
    (total, item) => {
      const price = Number(
        String(item.price).replace(/[^\d.]/g, "")
      );

      return total + price * item.quantity;
    },
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// CUSTOM CART HOOK
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
