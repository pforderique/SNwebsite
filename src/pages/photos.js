import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPhotos from '../components/BannerPhotos'

import charlesAndRicky from '../assets/images/charlesAndRicky.jpg'
import paris from '../assets/images/paris.jpg'

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
      <div style={{marginLeft:"10%", marginRight:"10%"}}>
      {
        images.map( img => <img style={{width:"40%", margin:"32px"}}src={img}/>)
      }
      </div>

    </Layout>
)

export default Photos