import React from 'react';
import searchButtonCallback from './callback.js';

const Destination = () => {

  const handleSearchClick = () => {
    searchButtonCallback();
  };

  return (
    <div id="section2">
      <div className="fbox1">
        <p>Search your</p>
        <p>Destination</p>
      </div>

      <div className="fbox2">
        <div className="fbox_2">
          <input type="text" id="destinationSearch" placeholder="Search destinations..." />
          <button id="searchButton" onClick={handleSearchClick}>Search</button>
        </div>
        <div className="fbox_info">
          <div id="destinationInfo" className="fbox1_r">
            Destination information will be displayed here
          </div>
          <div id="hotelInfo" className="fbox1_hotel">
            Hotel information will be displayed here
          </div>
        </div>
      </div>

      <div className="fbox3">
        <div className="slide area">
          <h2 className="fbox3_h">Popular Places</h2>
          <div className="places">
            <div>
              <p>Paris, France</p>
              <p>Rome, Italy</p>
              <p>New York City, USA</p>
              <p>Tokyo, Japan</p>
              <p>Sydney, Australia</p>
              <p>Machu Picchu, Peru</p>
              <p>Sydney, Australia</p>
            </div>
            <div className="start">See More</div>
          </div>
        </div>

        <div className="slide area">
          <h2 className="fbox3_h">Value Places</h2>
          <div className="places">
            <div>
              <p>Bangkok, Thailand</p>
              <p>Dublin, Ireland</p>
              <p>Berlin, Germany</p>
              <p>Edinburgh, Scotland</p>
              <p>Santiago, Chile</p>
              <p>Prague, Czech Republic</p>
              <p>Dubrovnik, Croatia</p>
            </div>
            <div className="start"><a href="destination.html">See More</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
