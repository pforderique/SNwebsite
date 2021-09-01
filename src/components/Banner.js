import React from 'react'
import letters from '../assets/images/letters.png'

//TODO: redirect to correct pages, scrolls down when clicks

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major letterholder">
                <h1 align="center" className={"letters"}>ΣΝ</h1>
            </header>
            <div className="content">
                <h2>Love. Honor. Truth.</h2>
            </div>
            <div className="about-us content">
                <ul className="actions">
                    <li><a href="#two" className="button next scrolly">About us</a></li>
                    <li><a href="/rush" className="button next scrolly">Rush 2021</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
