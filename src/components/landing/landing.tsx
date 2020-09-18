import React from "react";

const Landing: React.FC = () => {
    return(
        <div id="top">
            <section id="intro" className="separator bottom" data-speed="2" data-type="background">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="text-white">Welcome to Our Farm</h6>
                            <h1 className="text-white">A Remarkable Khadi Product</h1>
                            <h2 className="text-white">Great <strong>place</strong> for offering a
                                rural <strong>products</strong> and <strong>services</strong>!</h2>
                            <a className="button green rounded margin-20" href="#contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;