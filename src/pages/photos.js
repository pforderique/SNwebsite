import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPhotos from '../components/BannerPhotos'

import charlesAndRicky from '../assets/images/charlesAndRicky.jpg'
import paris from '../assets/images/paris.jpg'
import pic10 from '../assets/images/pic10.jpg'

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
                                <h3>Rush</h3>
                                <p>Discover the brotherhood</p>
                            </header>

                        </article>
                        <article style={{backgroundImage: `url(${paris})`}}>
                            <header className="major">
                                <h3>Brothers</h3>
                                <p>Learn about us</p>
                            </header>

                        </article>
                    </section>
                    </div>

    </Layout>
)

export default Photos