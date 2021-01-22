import React from "react";
import "./SideBar.css";
const SideBar = ({sort}) => {
  const handleDropdownClick = (value) => {
    sort(value);
  };
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Sort By Alphabet</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" />
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("accending")}
                >
                  Alphabet (accending)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  Alphabet (deccending)
                </li>
              </ul>
            </div>
          </li>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Sort By Region</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <span data-feather="plus-circle" />
            </a>
          </h6>
          <li className="nav-item">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  EU (European Union)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  EFTA (European Free Trade Association)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  CARICOM (Caribbean Community)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  PA (Pacific Alliance)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  AU (African Union)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  USAN (Union of South American Nations)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  EEU (Eurasian Economic Union)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  AL (Arab League)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  ASEAN (Association of Southeast Asian Nations)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  CAIS (Central American Integration System)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  CEFTA (Central European Free Trade Agreement)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  NAFTA (North American Free Trade Agreement)
                </li>
                <li
                  class="dropdown-item"
                  onClick={() => handleDropdownClick("deccending")}
                >
                  SAARC (South Asian Association for Regional Cooperation)
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
