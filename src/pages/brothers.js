import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Brother from '../components/brother'

import Grid from '@material-ui/core/Grid';

import './brothers.scss'

import brotherInfo from '../assets/brotherInfo'



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
                    <div className={'brotherGrid'}>

                      <Grid container spacing={3}>
                        {brotherInfo.map( obj => {
                          return <Grid item xs={6} sm={3}>
                                    <Brother name={obj.name} img={obj.img}></Brother>
                                </Grid>
                        })}
                      </Grid>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Brothers
