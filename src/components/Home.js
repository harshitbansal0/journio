import React, { useState } from 'react';
import "./Home.css";
import "./tickets.css";
import "./Destination.css";
import { Link } from 'react-router-dom';
import TypedText from './TypedText';
const Home = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  

  return (
    <>
      <nav className="navbar navbar-fixed-top">
        <div>
          <div>
            {/* <a className="navbar-brand" href="#"><img src="images/Name.png" alt="" /></a> */}
          </div>
          <ul id="nav">
            <li><a style={{ color: 'white', backgroundColor: 'black' }} href="#">Home</a></li>
            <li><Link to="destination">Destination</Link></li>
            <li><Link to="/hotel">Hotels</Link></li> 
            <li><Link to="/tickets">Tickets</Link></li>
            <li><a href="#section5">About Us</a></li>
            {/* <li><a href="#" id="login"><span>LOGIN</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-person" viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </a></li> */}
          </ul>
        </div>
      </nav>

      <div id="section1">
        <div className="first">
          <h1 id="head1">JOURNIO</h1>
          <p id="text1">welcomes you</p>
          <div style={{ height: '39px' }}>
            <p className="point"></p>
          </div>
          <div className="typetext">
          <TypedText/>
          </div>
          <div id="start"><a href="destination.html">Get Started</a></div>
        </div>

        <div className="second">
          <div className="soco" id="soco-i">
            <a href="https://www.instagram.com" target="_blank">
              <img src="images/instagram.svg" alt="Instagram" />
            </a>
          </div>
          <div className="soco" id="soco-f">
            <a href="https://www.facebook.com" target="_blank">
              <img src="images/facebook.svg" alt="Facebook" />
            </a>
          </div>
          <div className="soco" id="soco-t">
            <a href="https://www.twitter.com" target="_blank">
              <img src="images/twitter.svg" alt="Twitter" />
            </a>
          </div>
          <div className="soco" id="soco-d">
            <a href="https://www.discord.com" target="_blank">
              <img src="images/discord.svg" alt="Discord" />
            </a>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="banner">
        <div className="banner-text-item">
          <div className="banner-heading">
            <h1>Find your Next tour!</h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              list="mylist"
              placeholder="Where would you like to go?"
              value={destination}
              onChange={handleDestinationChange}
            />
            <datalist id="mylist">
              <option>London</option>
              <option>Canada</option>
              <option>Monaco</option>
              <option>France</option>
              <option>Japan</option>
              <option>Switzerland</option>
              <option>Seoul</option>
            </datalist>
            <input
              type="date"
              className="date"
              value={date}
              onChange={handleDateChange}
            />
            <button type="submit" className="book">Book</button>
          </form>
        </div>
      </section>
      {/* End of Banner Section */}

      {/* Other sections */}
      {/* Explore Section */}
      <section className="explore-section" id="explore-section" style={{ backgroundColor: 'rgb(7, 7, 59)' }}>
        <h1 className="section-title" data-aos="fade-up">Explore the world</h1>
        <p className="section-para" data-aos="fade-up">Look at the wonders that the world has to offer while you plan your
            tour.</p>
        <div className="tours-container">
          <div className="tour-card" data-aos="fade-up">
            <img src="images/austalia.jpg" className="tour-img" alt="tour-image" style={{ transform: 'scale(1.1)' }} />
            <div className="tour-body">
              <h3 className="tour-name">Australia</h3>
              <p className="tour-action">View city</p>
            </div>

          </div>
          <div className="tour-card" data-aos="fade-up">
                <img src="images/maldives.jpg" className="tour-img" alt="tour-image" style={{ transform: 'scale(1.1)' }}/>
                <div className="tour-body">
                    <h3 className="tour-name">Maldives</h3>
                    <p className="tour-action">View city</p>
                </div>
            </div>

            <div className="tour-card" data-aos="fade-up">
                <img src="images/paris.jpg" className="tour-img" alt="tour-image"/>
                <div className="tour-body">
                    <h3 className="tour-name">Paris</h3>
                    <p className="tour-action">View city</p>
                </div>
            </div>

            <div className="tour-card" data-aos="fade-up">
                <img src="images/dubai.jpg" className="tour-img" alt="tour-image"/>
                <div className="tour-body">
                    <h3 className="tour-name">Dubai</h3>
                    <p className="tour-action">View city</p>
                </div>
            </div>

            <div className="tour-card" data-aos="fade-up">
                <img src="images/punjab.jpg" className="tour-img" alt="tour-image"/>
                <div className="tour-body">
                    <h3 className="tour-name">Panjab</h3>
                    <p className="tour-action">View city</p>
                </div>
            </div>

            <div className="tour-card" data-aos="fade-up">
                <img src="images/itlay.jpg" className="tour-img" alt="tour-image"/>
                <div className="tour-body">
                    <h3 className="tour-name">Italy</h3>
                    <p className="tour-action">View city</p>
                </div>
            </div>
        
        </div>
      </section>
     

      {/* Book Section */}
      <section className="book-section" id="booknow" style={{ backgroundColor: 'rgb(7, 7, 59)' }}>
        <div className="book-content" data-aos="fade-up">
          <h1 className="book-now-title">Book your travel today</h1>
          <p className="book-now-text">Give yourself and your family a peaceful and wonderful vacation this holiday</p>
          <button className="book-now">Book Now</button>
        </div>
        <img src="images/travel3.png" data-aos="fade-up" className="book-now-img" alt="" />
      </section>
      {/* End of Book Section */}

      

      {/* Footer */}
      <div className="footer" style={{ backgroundColor: 'rgb(7, 7, 59)' }}>
        <div className="links">
          <h3 className="footer-li">Quick Links</h3>
          <ul>
            <li className="footer-li">Offers & Discounts</li>
            <li className="footer-li">Get Coupon</li>
            <li className="footer-li">Contact Us</li>
            <li className="footer-li">About</li>
          </ul>
        </div>
        {/* Other links */}
      </div>
      {/* End of Footer */}
    </>
  );
}

export default Home;
