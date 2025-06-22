import React, { useEffect, useState } from "react";
import "./../style/landing.scss";
import { Link } from "react-router-dom";
import { assets, features, partners } from "../assets/asset";

const getLogoSrc = (themeMode) =>
  themeMode === "dark-mode" ? assets.brand.white_logo : assets.brand.dark_logo;

const LandingPage = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const handleStorage = () => {
      setThemeMode(localStorage.getItem("theme"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeMode(localStorage.getItem("theme"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const logoSrc = getLogoSrc(themeMode);

  return (
    <div className="landingpage">
      <header>
        <div className="container">
          <div className="content">
            <Link to={"/"} className="logo">
              <img src={logoSrc} alt="Logo" loading="lazy" />
            </Link>
            <div className="btn">
              <Link>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="content">
            <h1>Protecting Children's Health with AI</h1>
            <p>
              Transform your health with our tailored nutrition solutions.
              Discover personalized meal plans, expert guidance, and premium
              products designed to empower your wellness journey. Join a
              community that prioritizes nutrition and well-being, ensuring you
              achieve your goals with confidence and support every step of the
              way.
            </p>
          </div>
        </div>
      </section>
      <section className="partner">
        <div className="container">
          <div className="content">
            <ul>
              {partners.map((brand, index) => (
                <li key={index}>
                  <img src={brand} alt="Partner" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="content">
            <div className="sec-title">
              <h1>AI-Powered Solution for Child Nutrition Health</h1>
            </div>
            <div className="grids">
              {features.map((feature, index) => (
                <div className="grid" key={index}>
                  <span className="icon">
                    <feature.icon />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="video-basics">
        <div className="container">
          <div className="content">
            <div className="sec-title">
              <h1>Understand Macronutrients Basics</h1>
              <p>
                Get a clear understanding of macronutrients and their roles in
                your diet. This guide breaks down proteins, fats, and
                carbohydrates, helping you balance them for optimal health.
              </p>
            </div>
            <div className="vid">
              <img src={assets.cover} alt="Video" loading="lazy" />
              <button>
                <img src={assets.play_icon} alt="play" loading="lazy" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
