import React from 'react'
import "./footer.scss"

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
          <div className={'footerIcons'}>
            <ul className="icons">
                <li><a href="https://www.facebook.com/MIT.SigmaNu" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/mitsigmanu/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
          </div>
          <div className={"footerText"}>
            <ul className="copyright">
                <li>MIT Chapter of Sigma Nu</li>
            </ul>
          </div>
        </div>
    </footer>
)

export default Footer
