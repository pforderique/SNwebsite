import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Brother from '../components/brother'

import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'

import './brothers.scss'

import brotherInfo from '../assets/brotherInfo'

import Popup from "reactjs-popup";

import rush from '../assets/images/brothers/charlesCoffey.jpg'
import rush2 from '../assets/images/brothers/marcoFleming.jpg'
import rush3 from '../assets/images/brothers/moisesTrejo.jpg'

var brotherMap = {
  "charles": rush,
  "marco": rush2,
  "moi": rush3
};


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
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={2}>
                      <Button>All</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2023</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2022</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2021</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2020</Button>
                    </Grid>
                  </Grid>
                  <br/>
                    <div className={'brotherGrid'}>
                      <Grid container spacing={3}>
                        {brotherInfo.map( obj => {
                          return <Grid item xs={6} sm={3} onClick={ () =>logItem(obj.name)}>
                                    <Brother name={obj.name} img={brotherMap[obj.img]} bio={obj.bio} year={obj.year} major={obj.major} hometown={obj.hometown} nickname={obj.nickname}/>
                                </Grid>
                        })}
                      </Grid>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

function brothers(year){
  {brotherInfo.map( obj => {
          return <Grid item xs={6} sm={3} onClick={ () =>logItem(obj.name)}>
                      <Brother name={obj.name} img={brotherMap[obj.img]} bio={obj.bio} year={obj.year} major={obj.major} hometown={obj.hometown} nickname={obj.nickname}/>
                  </Grid>
          })}
}

function logItem(item){
  console.log(item)
}

export default Brothers
