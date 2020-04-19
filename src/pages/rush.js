import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import './rush.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Grid from '@material-ui/core/Grid'


let images =
  [
    "https://lh3.googleusercontent.com/IjUZrlnyc7v4MXcg9TAvYhfrFDV3qXQxqV8-T8fyIgpwlsw-xmYtYpW5mUF6_F34ljsFklTkJdu1yeCx19vfCWtyZLQhnWsXsRBu87FLiSRGlgVTFE3by3-r63Qiahz3c-9sR58XULRJIf5RTvjKm_bXrY2fmfc-FWXrcz9ik10Q3ysNqfSjdUa4JNN4YFDiGGdEjhTKnliYSM4xEoMk9LipRuix4Nfn1Xu3PtWq4HhbAhNCTMbd6tUm-iasMsRSpGPZEcifsxvdLefmD6UK5DsDCDsIKkGa3a-7PkymtVG4oAx-FWzSFEUrHU62lEAiyWONPhR8S6vDyuhXtlPGylhfhydY67H0A_7ZvV3sVOOpP6weG0DcXW2-PsXAK0trAqXhs9Q5XaBNw_H7JCRYhkEteav9qT5dLVE4qRwRQF98kIBN3ZtOEURb6Gn6d6gm_4KXic4N_UpfmzmFjR5YpokaKLMZTrdkBZKrK-Y6CuLBlExdaKJbwBKoGPaYL5-rhloFCd6QfPj-3W8GnJRdeVyoT9tkP7Nx66Z5T5Y3vHkJEN6qM5P5e274P_XdlmNmx8JnxgTSGoRcJwhndiY8bSVPoov6gVuTjOvjVnhmCgnBnvGvLno6BVcNWr6ARxLhU_hruFDpEPfnZpBpPhpi-31DdFqHcJ8qITS0mLSh37kUE24hXlrI4lJopymCeQ=w2104-h1578-no",
    "https://lh3.googleusercontent.com/HtS_PuDSPw0BRpE68zoqnEVgY6XkkwHq897CPHi3N5BhypsgT0PxPrQ22mRi5N2S7bVgnny6wY6jEyOnUu-0GojAIXHWj1EcO9a8vXtCs8EcvxPiwm-T9OK1XpmZm-HaKzIEqfaOphG4yfleeu3W9kim2s9LZF35gNWR8Hx-YyS-WofVh4Tc8aBb00w_ELNJZG_UqeNpzXyPYCFvgtfHsJyB4yahsEVBy24aOWGXF2KGykFmgqrSFN9kZAxDf48YUJVEHHkUkqkEMaXB2pS53_B7OYU3lDgoIx4IuRAKtYtIZatRvhTX-CYuMFIXXkDgayzRJ1Crj95nWe7CcsvSMkJgJ2vr5lcxIfE-kFzrCwRz9XlxHMIeMk7-2UE_PJnMSyCRRsq81vA_i26yUK81J28BTnMejMuq-uEE_u4XP9XjPlRALvT1OrKIdYlUKASuWGlbI8gO5oH0TVmFDonXJ_M9RdkNXcw_3CEUen3XyISfIT9fvaiicWeX1O7Wa47QHjZxmRwLkV4ke8wEdb8qiLn81-nkZEBttIZkTw5FMhGtTdV1EebtoLLJVVbez8EpEYUwfgvlToYkLvQONJu3V1VLxhr0VkLZ07Yt4ELn97EDceBSR2F9AI-kuf0XW9wMKjYoYB_jlBVstiL1Nm4U_wAQlKAF2px9H363oBHQeOAcMAU9yJieSWDsaFUzLA=w2160-h1080-no"
  ]

let cpEvents = [
  {
    "name": "Beat Shazam",
    "description": "Guess that song!",
    "time": "Thurs, 4/16 @ 8:30pm ET",
    "img": "data:image/jpeg;base64,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"
  },
  {
    "name": "Virtual Card Games",
    "description": "Come play poker, uno, and cards against humanity",
    "time": "Fri, 4/17 @ 8:30pm ET",
    "img": "https://target.scene7.com/is/image/Target/GUEST_e48a7fee-314a-495f-bbf0-4ff2fac5e07a?wid=488&hei=488&fmt=pjpeg"
  },
  {
    "name": "Pictionary",
    "description": "we eat steak ans lobster",
    "time": "Sat, 4/18 @ 4pm ET",
    "img": "https://cdn.titotu.io/images/games/skribbl-io-1280x720.jpg"
  },
  {
    "name": "Internet Explorers",
    "description": "we eat steak ans lobster",
    "time": "Fri, 4/17 @ 8:30pm ET",
    "img": "https://cdn.vox-cdn.com/thumbor/nIw64BIvR_ABgN3DH6PQtudD4nA=/0x0:640x427/1400x1400/filters:focal(0x0:640x427):format(png)/cdn.vox-cdn.com/assets/1241213/ie9logo.png"
  }
]

const Rush = (props) => (
    <Layout>
        <Helmet>
            <title>Rush</title>
            <meta name="description" content="Rush Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Rush</h1>
                    </header>
                    <span className="image main">
                      <div className={'centerSlide'}>
                        <Carousel
                          showStatus={false}
                          showThumbs={false}
                          autoPlay={true}
                          interval={3000}
                          showArrows={false}
                        >
                            {images.map( (item,index) =>
                              <div>
                                <img src={item} alt={index} className={"image"}/>
                              </div>
                            )}

                        </Carousel>
                    </div>
                    </span>
                    <h1>Rush Info</h1>
                  <p>📞 Call 123-456-7890 for a ride! 📞</p>
                    <p>Sign up on our Interest <a href="https://docs.google.com/forms/d/e/1FAIpQLSdG3SXCNw_rqQZyRW2rD0xodTmfzsJ35RoTWOJbOPLmgcX8dg/viewform"> Form </a></p>
                  <p>Reach out to us by <a href="mailto:sn-rush2020@mit.edu" target="_top">Email</a></p>
                  <p>Follow is on <a href={"instagram.com/mitsigmanu"}>Instagram</a></p>
                  <p>Check out our <a href={"www.facebook.com/MIT.SigmaNu"}> Facebook!</a></p>
                  {/*<img src={rushpic1}/>*/}

                  <h1>CP* Events!</h1>

                  <div className={'brotherGrid'}>
                    <Grid container spacing={3}>
                      {cpEvents.map( obj => {
                        return <Grid item xs={6} sm={3}>
                          {obj.name}
                          <br/>
                          {obj.time}
                          <br/>
                          <img style={{height: "200px", width: "200px", margin: "16px"}} src={obj.img}/>
                        </Grid>
                      })}
                    </Grid>
                    <h1>Rush 2020 Events</h1>
                    <p> Coming soon!</p>
                  </div>
                    <h1>Contact Info</h1>
                </div>
            </section>
        </div>

    </Layout>
)

export default Rush
