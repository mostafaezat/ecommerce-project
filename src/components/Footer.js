import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import PrintIcon from "@material-ui/icons/Print";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <FacebookIcon />
          </a>
          <a href="" className="me-4 text-reset">
            <TwitterIcon />
          </a>
          <a href="" className="me-4 text-reset">
            <InstagramIcon />
          </a>
          <a href="" className="me-4 text-reset">
            <GitHubIcon />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h2 className="text-uppercase fw-bold mb-4">LOGO</h2>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cart
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Man Fashion
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Woman Fashion
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessories
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  My Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tracking
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Wishlist
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <HomeIcon /> New York, NY 10012, US
              </p>
              <p>
                <EmailIcon />
                info@example.com
              </p>
              <p>
                <PhoneIcon /> + 01 234 567 88
              </p>
              <p>
                <PrintIcon /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          mostafa ezzat
        </a>
      </div>
    </footer>
  );
};

export default Footer;
