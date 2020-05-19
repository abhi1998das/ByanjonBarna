import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 m-auto d-none d-lg-block e4">
            <img
              className="logo"
              src="https://imgur.com/kdqeZea.png"
              alt="byanjonlogo"
            />
          </div>

          <div className="col-md-12 col-lg-9">
            <hr />

            <nav
              id="default2"
              className="navbar navbar-expand-md navbar-light bg-light default2 e2"
            >
              <div id="nav-size" className="container-fuil">
                <div className="row">
                  <div className="d-none d-sm-block d-md-none">
                    <Link className="navbar-brand" to="/">
                      Navbar
                    </Link>
                  </div>
                </div>
              </div>

              <Link id="logo-small" className="navbar-brand ext" to="/">
                <img src="https://imgur.com/hDeFNzU.png" alt="small" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse "
                id="navbarsExampleDefault"
              >
                <ul className="navbar-nav mr-auto extraaa">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About us
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link className="dropdown-item" to="/">
                        Objective
                      </Link>
                      <Link className="dropdown-item" to="/Team">
                        People
                      </Link>
                      <Link className="dropdown-item" to="/AdvisoryBoard">
                        Advisory Board Members
                      </Link>
                      <Link className="dropdown-item" to="/OtherMembers">
                        Other Members
                      </Link>
                      <Link className="dropdown-item" to="/Commitee">
                        Committees
                      </Link>
                      <Link className="dropdown-item" to="/Institute">
                        Associated institutes
                      </Link>
                      <Link className="dropdown-item" to="/Reports">
                        Reports
                      </Link>
                      <Link className="dropdown-item" to="/Chapter">
                        Chapters
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Others
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Wings
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link className="dropdown-item" to="/">
                        Social
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Educational
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Cultural
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Economical
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Others
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Academic Activities
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link className="dropdown-item" to="/Workshop">
                        Workshops
                      </Link>
                      <Link className="dropdown-item" to="/Seminar">
                        Seminar
                      </Link>
                      <Link className="dropdown-item" to="/SpecialLectures">
                        Special lectures
                      </Link>
                      <Link className="dropdown-item" to="/Internship">
                        Internship Programmes
                      </Link>
                      <Link className="dropdown-item" to="/Award">
                        Awards
                      </Link>
                      <Link className="dropdown-item" to="/Initiatives">
                        Initiatives
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Others
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Joinus/Membership <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Publication
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link className="dropdown-item" to="/Books">
                        Books
                      </Link>
                      <Link className="dropdown-item" to="/Journals">
                        Journals
                      </Link>
                      <Link className="dropdown-item" href="/">
                        Others
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Annoucements
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link className="dropdown-item" to="/">
                        Seminar/Workshops
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Special Lecture
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Others
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Advertisement <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gallery
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link className="dropdown-item" to="/">
                        Photos
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Videos
                      </Link>
                      <Link className="dropdown-item" href="/">
                        Others
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Contacts <span className="sr-only"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
