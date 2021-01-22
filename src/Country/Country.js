import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getData} from "../Main/helper";
import "./Country.css";
const Country = ({history, match}) => {
  const [data, setData] = useState([]);
  const {name} = match.params;
  useEffect(() => {
    getData(`name/${name}`).then((response) => setData(response));
  }, []);

  return (
    <>
      <div className="container mt-5 flex-column d-flex  col-10">
        <h1>{name}</h1>
        <div className="country-info">
          {data.map((item, index) => {
            return (
              <>
                <p>Native Name - {item.nativeName}</p>
                <p>Capital - {item.capital}</p>
                <p>Currencies - {item.currencies[0].name}</p>
                <p>Languages - {item.languages[0].name}</p>
                <p>Area - {item.area}</p>
                <p>Lattitude Longitude - {item.latlng}</p>
                <p>Region - {item.region}</p>

                <p>Sub Region - {item.subregion}</p>
                <p>Population - {item.population}</p>
                <p>Region - {item.region}</p>
                <p>Time Zone - {item.timezones}</p>
                <p>Domain Name - {item.topLevelDomain[0]}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Country;
