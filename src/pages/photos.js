import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPhotos from '../components/BannerPhotos'

//import charlesAndRicky from '../assets/images/charlesAndRicky.JPG'
//import paris from '../assets/images/paris.JPG'
import paris from '../assets/images/pic01.jpg'

const Photos = (props) => (
    <Layout>
        <Helmet>
            <title>Photo Gallery</title>
            <meta name="description" content="Photos Page" />
        </Helmet>

        <BannerPhotos />


        <div id="main">
            <section id="one" className="tiles">
                <article style={{backgroundImage: `url(${paris})`}}>
                    <header className="major">
                        <h3>Rush</h3>
                        <p>Discover the brotherhood</p>
                    </header>
                    <Link to="/rush" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${paris})`}}>
                    <header className="major">
                        <h3>Brothers</h3>
                        <p>Learn about us</p>
                    </header>
                    <Link to="/brothers" className="link primary"></Link>
                </article>
            </section>
            </div>

    </Layout>
)

export default Photos