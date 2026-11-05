import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { photo } from "../data";

export default function About() {
  return (
    <>
      {/* ABOUT HERO */}
      <section
        className="page-hero about-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20, 17, 14, 0.45), rgba(20, 17, 14, 0.55)), url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="wrap">
          <span className="eyebrow">A LITTLE ABOUT US</span>

          <h1>
            Our kind of
            <br />
            <em>gathering place.</em>
          </h1>

          <p>
            Good food brings people together. That's where our story begins.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="wrap story-section">
        <div className="story-image">
          <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Elegant Savora restaurant dining space"
          />
        </div>

        <div className="story-text">
          <span className="eyebrow">HOW IT STARTED</span>

          <h2>
            A simple idea.
            <br />
            <em>A shared table.</em>
          </h2>

          <p>
            Savora began with a simple thought: a neighbourhood restaurant
            should feel like your favourite place to be. Somewhere the welcome
            is warm, the food is full of character and nobody is in a hurry
            to leave.
          </p>

          <p>
            Today, we still cook with that same spirit. We celebrate seasonal
            produce, support local makers and create plates that are as
            thoughtful as they are delicious.
          </p>

          <p>
            Whether it's a quick lunch, a long dinner or a special occasion,
            we're glad you're here.
          </p>

          <Link className="under-link" to="/reservations">
            Come visit us <span>↗</span>
          </Link>
        </div>
      </section>

      {/* OUR VALUES - UNCHANGED */}
      <section className="about-values">
        <div className="wrap">
          <SectionHeading
            eyebrow="WHAT MATTERS TO US"
            title="The ingredients of a good time"
          />

          <div className="principles">
            <article>
        
              <h3>Honest food</h3>
              <p>
                Good ingredients, prepared with care. Nothing complicated,
                nothing to hide.
              </p>
            </article>

            <article>
          
              <h3>Open-hearted hosting</h3>
              <p>
                A friendly hello, a thoughtful detail and a seat saved
                just for you.
              </p>
            </article>

            <article>
            
              <h3>Better together</h3>
              <p>
                Local partnerships and seasonal choices make our table richer.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}