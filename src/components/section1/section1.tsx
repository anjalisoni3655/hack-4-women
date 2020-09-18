import React from "react";

const section1: React.FC = () => {
      return (
          <section id="intro-features" className="direction-arrow">
                <div className="container">
                      <div className="row no-gutter text-center">
                            <div className="intro-features-wrap">
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                        <figure className="min-feature">
                                              <div className="image">
                                                    <a href="#top"><img src="images/featured-image1.jpg"
                                                                        className="img-responsive" alt="Featured Image"/></a>
                                              </div>
                                              <img src="images/min-feature-shadow.png" className="shadow img-responsive"
                                                   alt="Shadow"/>
                                                    <div className="text">
                                                          <h3>Organic</h3>
                                                          <h4>HELATHY</h4>
                                                    </div>
                                        </figure>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                        <figure className="min-feature">
                                              <div className="image">
                                                    <a href="#top"><img src="images/featured-image2.jpg"
                                                                        className="img-responsive" alt="Featured Image"/></a>
                                              </div>
                                              <img src="images/min-feature-shadow.png" className="shadow img-responsive"
                                                   alt="Shadow"/>
                                                    <div className="text">
                                                          <h3>GMO-Free</h3>
                                                          <h4>GUARANTEED</h4>
                                                    </div>
                                        </figure>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                        <figure className="min-feature">
                                              <div className="image">
                                                    <a href="#top"><img src="images/featured-image3.jpg"
                                                                        className="img-responsive" alt="Featured Image"/></a>
                                              </div>
                                              <img src="images/min-feature-shadow.png" className="shadow img-responsive"
                                                   alt="Shadow"/>
                                                    <div className="text">
                                                          <h3>Premium</h3>
                                                          <h4>Quality</h4>
                                                    </div>
                                        </figure>
                                  </div>
                                  <div className="clearfix"></div>
                            </div>
                      </div>

                      <div className="row text-center">
                            <div className="col-lg-12">
                                  <h6>some word about us</h6>
                                  <h2>We are the innovators in agricultural business</h2>
                                  <span className="title-separator"></span>
                            </div>
                      </div>
                      <div className="row justify-content-center">
                            <div className="col-lg-10 col-lg-push-1 text-center">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                  <span className="title-separator bottom"></span>
                                  <a className="button brown rounded" href="#top">More Info</a>
                            </div>
                      </div>
                </div>
          </section>
      );
};

export default section1;