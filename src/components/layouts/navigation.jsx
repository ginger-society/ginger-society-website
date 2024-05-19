import { useEffect, useState } from "react";
import navigation from "@data/navigation.json";

export default function Navigation({ pageUrl }) {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 70);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    const navbar = $("#mainnavigationBar");
    navbar.toggleClass("bg-nav");
  };

  
  const handleDropdownClick = (e) => {
    if (window.innerWidth >= 991.98) return;
  
    e.preventDefault();
  
    const parentDropdown = e.target.closest('.dropdown');
    if (!parentDropdown) return;
  
    const wasOpen = parentDropdown.classList.contains('show');

    document.querySelectorAll('.dropdown.show, .dropdown-menu.show').forEach(el => el.classList.remove('show'));
  
    if (!wasOpen) {
      parentDropdown.classList.add('show');
      parentDropdown.querySelector('.dropdown-menu').classList.add('show');
    }
  };
  
  

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg position-fixed w-100 zindex-dropdown${isSticky ? " sticky-nav" : ""}`}
          id="mainnavigationBar"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={navigation.logo} alt="Nav-Logo" height="100px" />
              Ginger Society
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClick}
            >
              <span className="navbar-toggler-default">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3.5"
                    y1="5.5"
                    x2="21.5"
                    y2="5.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="4.5"
                    y1="12.5"
                    x2="21.5"
                    y2="12.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="19.5"
                    x2="21.5"
                    y2="19.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 6.5L6.5 21.5"
                    stroke="#404152"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.5 21.5L6.5 6.5"
                    stroke="#404152"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button> 
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-20 mb-lg-0">
              {navigation.items.map((item, i) => (
                <li key={i} className={`nav-item ${item.enable_dropdown && item.dropdown ? 'dropdown' : ''}`}>
                  {item.enable_dropdown && item.dropdown ? (
                    <>
                      <a
                        href={`${item.link}`}
                        className={`nav-link dropdown-link ${pageUrl?.pathname === item.link ? "active" : ""}`}
                        onClick={handleDropdownClick}
                      >
                        {item.text}
                      </a>
                      <ul className="dropdown-menu">
                        {item.dropdown.map((dropdown_item, j) => (
                          <li key={j}>
                            <a className="dropdown-item" href={dropdown_item.dropdown_link}>
                              {dropdown_item.dropdown_text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={`${item.link}`}
                      className={`nav-link ${pageUrl?.pathname === item.link ? "active" : ""}`}
                    >
                      {item.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          { navigation.enable_nav_btn ? (
            <>
            <div className="d-none d-lg-block">
              <div className="nav-item" style={{gap: '10px', display: 'flex'}}>
                <a
                  href={`${navigation.nav_btn?.link}`}
                  className="btn btn-sm btn-links"
                >
                  {navigation.nav_btn?.text}
                </a>
                <a
                  href={'https://github.com/ginger-society'}
                  className="btn btn-primary gh-icon"
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg> Github
                </a>
              </div>
            </div>
            </>
          ) : null }
        </div>
        </nav>
      </header>
    </>
  );
}
