import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Brother from '../components/brother'

import pic11 from '../assets/images/derekGarcia.jpg'

const Brothers = (props) => (
    <Layout>
        <Helmet>
            <title>Brothers</title>
            <meta name="description" content="Brothers Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Brothers</h1>
                    </header>
                    <Brother img = {pic11} name = {"Derek"} picView = {"Normal"}></Brother>
                </div>
            </section>
        </div>
    </Layout>
)

export default Brothers