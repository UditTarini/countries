import React from "react";
import "./CountryCard.css";
const CountryCard = ({countryData}) => {
  return (
    <div className="card country-card">
      <div class="card-item">
        <div class="card-image">
          <img src={countryData.flag} alt="" />
        </div>
        <div className="card-info">
          <span className="text-wrap county-info-text">{countryData.name}</span>
          <span className="text-wrap county-info-text-alt">
            Capital - {countryData.capital}
          </span>
          <span className="county-info-text-alt">
            language - {countryData.languages[0].name}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
