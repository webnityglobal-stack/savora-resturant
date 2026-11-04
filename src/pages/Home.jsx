import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Heart,
  Clock3
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import DishCard from "../components/DishCard";
import { dishes, photo } from "../data";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=2000)`
          }}
        />

        <div className="hero-shade" />

        <div className="wrap hero-content">
          <span className="eyebrow">FRESH FROM OUR KITCHEN</span>

          <h1>
            A little more
            <br />
            <em>flavour</em> in life.
          </h1>

          <p>
            Seasonal plates, thoughtful ingredients and good company.
            Pull up a chair — there's always room for one more.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-accent" to="/menu">
              Explore our menu <ArrowUpRight size={17} />
            </Link>

            <Link className="text-link light-link" to="/reservations">
              Reserve your table <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero-note">
            <span /> GOOD FOOD. GOOD MOOD. GOOD COMPANY.
          </div>
        </div>

        
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section wrap">
        <div className="intro-kicker">
          <span className="eyebrow">THE SAVORA WAY</span>
          <span className="line" />
        </div>

        <div className="intro-copy">
          <h2>
            Not just a meal.
            <br />
            <em>A moment to savour.</em>
          </h2>

          <p>
            We believe the best memories are made around a table.
            Our kitchen brings together honest produce, playful flavours
            and a generous dose of heart.
          </p>

          <Link className="under-link" to="/about">
            Get to know us <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="intro-image">
          <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Elegant restaurant dining interior"
          />
        </div>
      </section>

      {/* MENU PREVIEW - UNCHANGED */}
      <section className="menu-preview section-pad">
        <div className="wrap">
          <div className="section-top">
            <SectionHeading
              eyebrow="MADE WITH CARE"
              title="A few house favourites"
              description="A taste of what's cooking. Made fresh, served with love."
            />

            <Link className="under-link desktop-link" to="/menu">
              View full menu <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="dish-grid">
            {dishes.slice(0, 3).map((d) => (
              <DishCard key={d.id} dish={d} />
            ))}
          </div>

          <Link
            className="btn btn-outline mobile-menu-link"
            to="/menu"
          >
            Explore full menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section">
        <div className="wrap values-grid">
          <div className="values-photo">
            <img
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fresh colourful seasonal vegetables and ingredients"
            />

            <span className="photo-caption">
              FRESH IS OUR FAVOURITE FLAVOUR.
            </span>
          </div>

          <div className="values-copy">
            <span className="eyebrow">
              A GOOD THING, GROWN LOCALLY
            </span>

            <h2>
              Rooted in good
              <br />
              <em>ingredients.</em>
            </h2>

            <p>
              We work with local growers and trusted makers to bring
              the best of every season to your plate. Less fuss,
              more flavour — that's our kind of cooking.
            </p>

            <div className="value-list">
              <div>
                <Leaf />
                <span>
                  <b>Season-led cooking</b>
                  <small>Menus that move with the seasons.</small>
                </span>
              </div>

              <div>
                <Heart />
                <span>
                  <b>Made with intention</b>
                  <small>Care in every ingredient and detail.</small>
                </span>
              </div>

              <div>
                <Clock3 />
                <span>
                  <b>Time well spent</b>
                  <small>Relax, take a seat and stay awhile.</small>
                </span>
              </div>
            </div>

            <Link className="under-link" to="/about">
              Our philosophy <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE / RESERVATION SECTION */}
      <section className="quote-band">
        <div className="wrap">
          <span className="eyebrow">
            A TABLE FOR EVERY STORY
          </span>

          <h2>
            Come hungry.
            <br />
            <em>Leave happy.</em>
          </h2>

          <Link className="btn btn-accent" to="/reservations">
            Book your table <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}