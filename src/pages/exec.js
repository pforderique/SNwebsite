import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BrotherGrid from '../components/brotherGrid'

import './brothers.scss'

import exec from '../../data/exec.json'

console.log('exec', exec)

const Exec = (props) => (
    <Layout>
        <Helmet>
            <title>Executive Team</title>
            <meta name="description" content="Brothers Page" />
        </Helmet>
        <section id="banner" className="major">
            <div className="inner">
                <h1 align="center" >Executive Team of ΣΝ</h1>
            </div>
        </section>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                <BrotherGrid modal={false} brothers={exec}/>
                </div>
            </section>
        </div>
    </Layout>
);



export default Exec;