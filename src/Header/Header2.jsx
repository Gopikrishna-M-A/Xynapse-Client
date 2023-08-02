import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";

export default function Header2() {

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg ${hasScrolled ? "navShadow" : ""}`} id="navbar">
        <div className="container-fluid nav-container">
          <div className="container-fluid nav-container">
            <a className="navbar-brand" href="/">
              <img src="./images/main-logo-yellow.png" alt="" id="main-logo" />
              Xynapse Tech
            </a>

            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    SERVICES
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/" >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                    WORK
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    BLOG
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/careers">
                    CAREER
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="getStartBtn" to="/" >
                    GET STARTED
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
