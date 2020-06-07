import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Summer = (props) => (
    <Layout>
        <Helmet>
            <title>Summer Housing</title>
            <meta name="description" content="Summer Housing Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Summer Housing</h1>
                    </header>
                    <h3>Summer housing 2020 has been cancelled :(</h3>
                </div>
            </section>
        </div>

    </Layout>
)

export default Summer