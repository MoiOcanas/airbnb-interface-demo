import React from 'react'

const Navbar = () => (
    <div className="nav">
        <div className="nav-container">
            <div>
                <img src="https://dexauc1l0pcnj.cloudfront.net/Content/images/blog/certification-hoteliga-airbnb-logo.png" alt="logo" />
            </div>
            <div className="navbar-buttons">
                <button className="informative-button">Tamaulipas, Mexico</button>
                <span></span>
                <button className="informative-button">15 Jun - 26 Jun</button>
                <span id="informative"></span>
                <button className="input-button">Agregar huespedes</button>
                <span id="search"></span>
                <button className="search-button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
            <div className="nav-buttons-list">
                <div className="icons-buttons">
                    <button className="world-button">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        <i class="fa fa-chevron-down" style={{ marginLeft: '5px' }} aria-hidden="true"></i>
                    </button>
                </div>
                <button className="register-button">
                    Registrate
                </button>
            </div>
        </div>
    </div>
);

export default Navbar;