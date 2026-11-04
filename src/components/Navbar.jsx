
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const links = [
  ["Home", "/"],
  ["Our Story", "/about"],
  ["Menu", "/menu"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner wrap">

        {/* Brand Logo */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">S.</span>
          <span className="brand-name">
            SAVORA
            <small>KITCHEN & TABLE</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <Link className="nav-cta" to="/reservations">
            Book a Table
            <ArrowUpRight size={16} />
          </Link>

          <Link to="/cart" className="nav-cart">
            <ShoppingCart size={19} />
            <span>Cart</span>
            <b>{cartCount}</b>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <nav className="mobile-links">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link
            className="nav-cta mobile-cta"
            to="/reservations"
            onClick={closeMenu}
          >
            Book a Table
            <ArrowUpRight size={17} />
          </Link>

          <Link
            to="/cart"
            className="nav-cart mobile-cart"
            onClick={closeMenu}
          >
            <ShoppingCart size={19} />
            <span>Cart</span>
            <b>{cartCount}</b>
          </Link>
        </div>

      </div>
    </header>
  );
}
