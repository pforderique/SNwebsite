import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BrotherGrid from '../components/brotherGrid'
import { brothers, filteredBros } from '../components/FilteredBros'

import './brothers.scss'



const Brothers = (props) => (
    <Layout>
        <Helmet>
            <title>Brothers</title>
            <meta name="description" content="Brothers Page" />
        </Helmet>
      <section id="banner" className="major">
        <div className="inner">
            <h1 align="center" >Meet the brothers of ΣΝ</h1>
        </div>
      </section>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <BrotherGrid brothers={brothers.filter((bro) => bro.active)}/>
                </div>
            </section>
        </div>
    </Layout>
)


export default Brothers
