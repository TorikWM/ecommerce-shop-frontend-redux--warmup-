import React from "react";


function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
            LA GOULET
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <div className="buttons">
                <button className="btn">
                  <a href="#" className="btn btn-outline-dark ">
                    <i className="fa fa-sign-in me-1 "></i> Login
                  </a>
                  <a href="#" className="btn btn-outline-dark ms-2">
                    <i
                      className="fa  fa-user-plus
 me-1 "
                    ></i>{" "}
                    Register
                  </a>
                  <a href="#" className="btn btn-outline-dark ms-2 ">
                    <i
                      className="fa  fa-shopping-cart
n me-1 "
                    ></i>{" "}
                    Cart (0£)
                  </a>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
