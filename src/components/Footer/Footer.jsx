import React from "react";
import "../Footer/footer.css"
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <div id="footerMainContainer" className="container-fluid">
        <h4 className="text-center footer-text">HOPING TO ADD MORE INTERESTING EXPERIENCES TO THE JOURNEY</h4>
        <ScrollToTop smooth />
      </div>
    </>
  );
};

export default Footer;
