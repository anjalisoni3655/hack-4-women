import React from "react";


const Footer: React.FC = () => {
    return (
      <footer id="footer">
      <div className="container">
            <div className="row">
                  <div className="col-sm-6 col-md-6">	
                        <p className="copyright">Copyrights © 2020. All rights reserved.</p>
                  </div>
                  {/* <div className="hidden-xs col-sm-6 col-md-6 text-right">
                        <ul className="list-unstyled no-list-style list-inline list-socials">
                            <li><a href="#top"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#top"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#top"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                              <li><a href="#top"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                  </div> */}
            </div>
      </div>
</footer>
       

    );
};

export default Footer;