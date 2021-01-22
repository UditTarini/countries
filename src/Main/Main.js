import React, {useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar";
import "./Main.css";
import CountryCard from "../CountryCard/CountryCard";
import {getData} from "./helper";
const Main = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [errorMsg, seterrorMsg] = useState("loading");
  useEffect(() => {
    getAllCountries();
    setLoading(false);
  }, []);

  const getAllCountries = () => {
    getData("all").then((response) => setData(response));
  };

  const handleChangeSearch = (event) => {
    setsearchText(event.target.value);
  };
  const handleSearch = () => {
    setLoading(true);

    getData(`name/${searchText}`).then((response) => {
      if (response.error) {
        setLoading(true);
        getAllCountries();
        setLoading(false);
      }
      if (response.status === 404) {
        setLoading(true);
        seterrorMsg(response.message);
      } else {
        setData(response);
        setLoading(false);
      }
    });
  };

  const handleSort = (sortby) => {
    if (sortby === "accending") {
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
    }
    if (sortby === "deccending") {
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
    }
  };

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Countries
        </a>

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
                {loading ? (
                  <h1>{errorMsg}</h1>
                ) : (
                  data.error === undefined &&
                  data.map((item, index) => {
                    return <CountryCard countryData={item} />;
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
