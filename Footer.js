import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">MeetHub:)</div>
            <div className="footer-text__body">
            Experience boundless communication possibilities with MeetHub:), where seamless video calls and advanced features unite.
            </div>
          </div>
          
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Subscribe to get latest updates and new on whiskers
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">Coded by Hemang Dige.</div>
      </div>
    </footer>
  );
}

export default Footer;
