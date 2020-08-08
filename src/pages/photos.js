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

import ajWithIce from '../assets/images/ajWithIce.jpg'
import brickLetters from '../assets/images/brickLetters.jpg'
import gusAndEnriko from '../assets/images/gusAndEnriko.jpg'
import silvieChrisPasqualCharlesLuke from '../assets/images/silvieChrisPasqualCharlesLuke.jpg'
import moi from '../assets/images/moi.jpg'
import rushPic2 from '../assets/images/rushPic2.jpg'
import flag from '../assets/images/flag.jpg'




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

    </Layout>
)

export default Photos
