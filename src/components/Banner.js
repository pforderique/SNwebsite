import React from 'react'

//TODO: center LHT, add letters pic instead of MIT chapter of signu, center buttons, redirect to correct pages, scrolls down when clicks

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1 align="center">MIT Chapter of Sigma Nu</h1>
            </header>
            <div className="content">
                <h2>Love. Honor. Truth.</h2>
            </div>    
            <div className="about-us">
                <ul className="actions">
                    <li><a href="#two" className="button next scrolly">About us</a></li>
                    <li><a href="/rush" className="button next scrolly">Rush 2020</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner