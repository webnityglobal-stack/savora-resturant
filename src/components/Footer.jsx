import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
export default function Footer(){return <footer className="footer"><div className="wrap footer-grid">
  <div><Link to="/" className="brand footer-brand"><span className="brand-mark">S.</span><span>SAVORA<small>KITCHEN & TABLE</small></span></Link><p className="muted">Good food, honest ingredients and a table always ready for you.</p></div>
  <div><h4>Explore</h4><Link to="/menu">Our menu</Link><Link to="/about">Our story</Link><Link to="/gallery">Gallery</Link><Link to="/reservations">Reservations</Link></div>
  <div><h4>Visit us</h4><p>14 Garden Lane, New Delhi<br/>India 110001</p><p>+91 98765 43210<br/>hello@savorakitchen.in</p></div>
  <div><h4>Opening hours</h4><p>Mon – Fri · 11:00 AM – 10:30 PM<br/>Sat – Sun · 9:00 AM – 11:00 PM</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook/></a></div></div>
</div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Savora Kitchen. All rights reserved.</span><span>Made for moments worth sharing.</span></div></footer>}