import React, {useEffect, useState} from "react";

import SideBar from "../SideBar/SideBar";
import "./Main.css";
import CountryCard from "../CountryCard/CountryCard";
import {getData} from "./helper";
import {Link, Redirect} from "react-router-dom";
const Main = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [error, setError] = useState({status: false, msg: ""});

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    setLoading(true);
    getData("all").then((response) => setData(response));
    setLoading(false);
    setError({...error, status: false, msg: ""});
  };

  const handleChangeSearch = (event) => {
    setsearchText(event.target.value);
  };
  const handleSearch = () => {
    callApi(`name/${searchText}`);
  };

  const callApi = (urlToFetch) => {
    setLoading(true);

    getData(urlToFetch).then((response) => {
      if (response.error) {
        getAllCountries();
        setLoading(false);
      }
      if (response.status === 404) {
        setError({...error, status: true, msg: response.message});
      } else {
        setData(response);
        setLoading(false);
      }
    });
  };
  const handleSort = (sortby) => {
    if (sortby === "ascending") {
      const sorted = [...data].sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }

        return 0;
      });
      setData(sorted);
    } else if (sortby === "descending") {
      const sorted = [...data].sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }

        return 0;
      });
      setData(sorted);
    } else if (sortby === "pop-ascending") {
      const sorted = [...data].sort(function (a, b) {
        return a.population - b.population;
      });

      setData(sorted);
    } else if (sortby === "pop-descending") {
      const sorted = [...data].sort(function (a, b) {
        return b.population - a.population;
      });
      setData(sorted);
    } else if (sortby === "area-ascending") {
      const sorted = [...data].sort(function (a, b) {
        return a.area - b.area;
      });
      setData(sorted);
    } else if (sortby === "area-descending") {
      const sorted = [...data].sort(function (a, b) {
        return b.area - a.area;
      });
      setData(sorted);
    } else {
      callApi(`regionalbloc/${sortby}`);
    }
  };

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Countries
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChangeSearch}
          onKeyUp={handleSearch}
        />
      </header>
      <div>
        <div className="container-fluid">
          <div className="row">
            <SideBar sort={handleSort} />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-center flex-wrap  align-items-center pt-3 pb-2 mb-3 ">
                {loading && error.status ? (
                  error.status ? (
                    <h1>{error.msg}</h1>
                  ) : (
                    <h1>Loading...</h1>
                  )
                ) : (
                  data.error === undefined &&
                  data.map((item, index) => {
                    return (
                      <Link
                        to={{
                          pathname: `/country/${item.name}`,
                        }}
                      >
                        <CountryCard countryData={item} />
                      </Link>
                    );
                  })
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
