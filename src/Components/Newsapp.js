import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const API_KEY = "1377818e32fa4a1694e38a778fb76017";

  // Fetch news data
  const getData = async () => {
    if (!search.trim()) {
      alert("Please enter a search term."); // Show an error message if the search bar is empty
      return;
    }

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      let dt = jsonData.articles.slice(0, 10);
      setNewsData(dt);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  // Handle search input
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // Handle category button clicks
  const userInput = (event) => {
    setSearch(event.target.value);
  };

  // Handle email input for subscription
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail(""); // Clear the input field
      setTimeout(() => setSubscribed(false), 3000); // Hide message after 3 seconds
    }
  };

  // Static ad data (replace with your own data)
  const topAd = {
    imageUrl: "/logo.png", // Replace with a valid image URL
    headline: "Special Offer!",
    description: "Check out our exclusive deals.",
    targetUrl: "https://www.afaqs.com/news/advertising/samsung-new-ad-for-galaxy-s25-ultra-sparks-mixed-consumer-reaction-8652648"
  };

  const bottomAd = {
    imageUrl: "/logo2.png", // Replace with a valid image URL
    headline: "Limited Time Discount!",
    description: "Don't miss out on this amazing offer.",
    targetUrl: "https://www.freepik.com/free-photos-vectors/food-ad"
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="professional-nav">
        <div className="nav-brand">
          <img src="/logo121.png" alt="Trendy News Logo" className="logo" />
          <h1>BA LIVE NEWS</h1>
        </div>
        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
        </ul>
        <div className='searchBar'>
          <input
            type='text'
            placeholder='Search News'
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      {/* Top Ad */}
      <div className="ad-container">
        <div className="ad">
          <img src={topAd.imageUrl} alt="Ad" className="ad-image" />
          <div className="ad-content">
            <h3>{topAd.headline}</h3>
            <p>{topAd.description}</p>
            <button onClick={() => window.open(topAd.targetUrl)}>Learn More</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h2>Daily news from around the world</h2>
        <p>Get reliable and latest news</p>
      </div>

      {/* Category Buttons */}
      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      {/* News Grid */}
      <div>
        {newsData ? <Card data={newsData} /> : null}
      </div>

      {/* Bottom Ad */}
      <div className="ad-container">
        <div className="ad">
          <img src={bottomAd.imageUrl} alt="Ad" className="ad-image" />
          <div className="ad-content">
            <h3>{bottomAd.headline}</h3>
            <p>{bottomAd.description}</p>
            <button onClick={() => window.open(bottomAd.targetUrl)}>Learn More</button>
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="professional-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>News Categories</h3>
            <ul>
              <li><button onClick={() => setSearch("sports")}>Sports</button></li>
              <li><button onClick={() => setSearch("politics")}>Politics</button></li>
              <li><button onClick={() => setSearch("entertainment")}>Entertainment</button></li>
              <li><button onClick={() => setSearch("health")}>Health</button></li>
              <li><button onClick={() => setSearch("fitness")}>Fitness</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Subscribe</h3>
            <p>Get the latest news delivered to your inbox.</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {subscribed && <p className="subscription-message">Thank you for subscribing!</p>}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BA LIVE NEWS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Newsapp;