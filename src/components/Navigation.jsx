import React, {useState} from "react";

const Navigation = () => {
  const [limit, setLimit] = useState('')

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark">
        <a id="murphMan" class="navbar-brand" href="#"></a>
        <button
          class="burger-btn navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse collapse justify-content-md-center"
          id="navbarsExample01"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="home nav-link float-right mr-2" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link float-right mr-2" href="portfolio.html">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link float-right mr-2" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
