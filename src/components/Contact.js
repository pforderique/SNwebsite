import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className={"row"}>


            <div className="contact-method">
                <span className="icon alt fa-envelope"/>
                <h3>Email</h3>
                <a href="#">sn-rush2020@mit.edu</a>
            </div>
            <div className="contact-method">
                <span className="icon alt fa-home"/>
                <h3>Address</h3>
                <span>99 Bay State Road Boston, MA</span>
            </div>
        </div>
    </section>
)

export default Contact
