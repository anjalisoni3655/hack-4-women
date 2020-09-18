import React from "react";

const NavBar: React.FC = () => {
    return (

        <header className="nav-down">
            <nav className="navbar">
                <div className="container">
                    <div className="row header-row">
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt="Logo"/></a>
                        </div>
                        <div className="nav navbar-nav text-center">
                            <span><a href="#top">Home</a></span>
                            <span><a href="#features-spanst">Features</a></span>
                            <span><a href="#testimonials">Testimonials</a></span>
                            <span><a href="#extra-features">Certificate</a></span>
                            <span><a className="button green text-white border spanght rounded"
                                     href="#contact">Contact Us</a></span>
                        </div>

                    </div>
                </div>
            </nav>
        </header>

    );
};

export default NavBar;