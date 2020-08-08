import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className={"row"}>


            <div className="contact-method">
                <span className="icon alt fa-envelope"/>
                <h3>Email</h3>
                <a href="#">sigmanu@mit.edu</a>
            </div>
            <div className="contact-method">
                <span className="icon alt fa-home"/>
                <h3>Address</h3>
                <span> <a href={"https://goo.gl/maps/BpTAT4x7dH12"}>99 Bay State Road Boston, MA</a></span>
            </div>
        </div>
    </section>
)

export default Contact
