import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPhotos from '../components/BannerPhotos'

import charlesAndRicky from '../assets/images/charlesAndRicky.jpg'
import paris from '../assets/images/paris.jpg'
import pledges from '../assets/images/pledges.jpg'
import roofpic from '../assets/images/roofpic.jpg'
import sophFormal from '../assets/images/sophFormal.jpg'
import sophRetreat from '../assets/images/sophRetreat.jpg'
import retreatPic1 from '../assets/images/retreatPic1.jpg'
import sandLetters from '../assets/images/sandLetters.jpg'
import marathon from '../assets/images/marathon.jpg'
import charlesPittmanFriend from '../assets/images/charlesPittmanFriend.jpg'

let images = [
  "https://osfl.ucdavis.edu/sites/g/files/dgvnsk3316/files/styles/sf_profile/public/images/person/Sigma_Nu_%CE%A3%CE%9D_.png?h=8d63324d&itok=oV2h-V1o",
  "https://osfl.ucdavis.edu/sites/g/files/dgvnsk3316/files/styles/sf_profile/public/images/person/Sigma_Nu_%CE%A3%CE%9D_.png?h=8d63324d&itok=oV2h-V1o",
  "https://osfl.ucdavis.edu/sites/g/files/dgvnsk3316/files/styles/sf_profile/public/images/person/Sigma_Nu_%CE%A3%CE%9D_.png?h=8d63324d&itok=oV2h-V1o"]

const Photos = (props) => (
    <Layout>
        <Helmet>
            <title>Photo Gallery</title>
            <meta name="description" content="Photos Page" />
        </Helmet>

        <BannerPhotos />



                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${charlesAndRicky})`}}>
                            <header className="major">
                                <h3>ΣLΣCTRIC NU</h3>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${paris})`}}>
                            <header className="major">
                                <h3>Brothers in Paris</h3>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${roofpic})`}}>
                            <header className="major">
                                <h3>Brothers and Friends</h3>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${pledges})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${sophRetreat})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${sophFormal})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>                        

                        <article style={{backgroundImage: `url(${retreatPic1})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>                        

                        <article style={{backgroundImage: `url(${sandLetters})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>                        

                        <article style={{backgroundImage: `url(${marathon})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>   

                        <article style={{backgroundImage: `url(${charlesPittmanFriend})`}}>
                            <header className="major">
                                <h3>Pledges</h3>
                            </header>
                        </article>
                    </section>
                    </div>

        <div style={{marginLeft:"5%", marginRight:"5%"}}>
            {
                images.map( img => <img style={{width:"45%", margin:"32px"}}src={img}/>)
            }
        </div>

    </Layout>
)

export default Photos
