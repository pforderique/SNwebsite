import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


import './brothers.scss'

import brotherInfo from '../assets/brotherInfo'
import BrotherGrid from '../components/brotherGrid'

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
                  <BrotherGrid></BrotherGrid>
                </div>
            </section>
        </div>
    </Layout>
)


export default Brothers
