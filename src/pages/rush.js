import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import './rush.scss'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import TimeGridCalendar from '../components/TimeGridCalendar'

import allBros from '../assets/images/slideshow/allBros.jpg'
import dopeFlagPic from '../assets/images/slideshow/dopeFlagPic.jpg'
import formal from '../assets/images/slideshow/formal.jpg'
import initiation from '../assets/images/slideshow/initiation.jpg'
import retreat from '../assets/images/slideshow/retreat.jpg'
import ringDel from '../assets/images/slideshow/ringDel.jpg'
import ringPrem from '../assets/images/slideshow/ringPrem.jpg'
import snow from '../assets/images/slideshow/snow.jpg'
import zoom from '../assets/images/slideshow/zoom.jpg'
import Button from '@material-ui/core/Button'

let images = [
  { src: allBros, legend: 'Paper Plate Awards, Spring 2020' },
  {
    src: dopeFlagPic,
    legend: "Brother 'Mars' holding the flag of Sigma Nu, Fall Retreat 2019",
  },
  { src: formal, legend: 'Cute bros, Spring Formal 2019' },
  { src: initiation, legend: 'Candidate Initiation, Fall  2019' },
  { src: retreat, legend: 'Acadia National Park Maine, Fall Retreat 2019' },
  { src: ringDel, legend: 'Cute bros, Ring Delivery Spring 2019' },
  { src: ringPrem, legend: 'Cute bros, Ring Premiere Spring 2020' },
  { src: snow, legend: 'New Hampshire, Spring Retreat 2019' },
  { src: zoom, legend: 'Trivia Night, Summer 2020' },
]

const INTEREST_FORM_LINK = 'https://forms.gle/Czq1YXXffNcxjdJm8'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

class Rush extends React.Component {
  constructor(props) {
    super(props)
    shuffle(images)
  }

  render() {
    return (
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
                <p>Fill out our interest form to keep in contact!</p>
              </header>
              <div>
                <button>
                  <a href={INTEREST_FORM_LINK} target="_blank">
                    Interest Form
                  </a>
                </button>
                &nbsp;
                <button>
                  <a href={'#contact'}> Contact info</a>
                </button>
                &nbsp;
              </div>
              <div style={{ margin: '32px' }}></div>

              <header className="major">
                <h2>Events</h2>
              </header>

              <p align="left"> All events are also on the <a href="https://mitfallrush2021.sched.com/overview/type/Sigma+Nu" target
              ="_blank" >IFC schedule</a> </p>

              <TimeGridCalendar />

              <header className="major">
                <h2>Pictures</h2>
              </header>
              <div className={'slideshow'}>
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  autoPlay={true}
                  interval={3000}
                  showArrows={false}
                >
                  {images.map((item, index) => (
                    <div key={index}>
                      <img src={item.src} alt={index} className={'image'} />
                      <p className="legend">{item.legend}</p>
                    </div>
                  ))}
                </Carousel>
              </div>

              <p>Note from the Rush Chairs,</p>
              <p>
                Sigma Nu is much more than a fraternity; it is a group of loving
                brothers who push each other to be the best they can be. Our
                beautiful home is filled with rich camaraderie, hysterical
                inside jokes, and ever-lasting memories that brothers have come
                to cherish for a lifetime. Late night journeys to 7-Eleven,
                Saturday night half-off burgers at Pour House, and playing Smash
                Bros in the Den are just some of the many traditions brothers of
                Sigma Nu have come to love!
              </p>
              <p>
                Brothers take active roles on campus, becoming leaders and being
                involved with various clubs. In addition, brothers at Sigma Nu
                are driven to succeed at the highest academic level and have
                interned at premier companies such as the Jet Propulsion Lab,
                Google, Chevron, Microsoft, Twitter, and Facebook. Our alumni
                have gone on to work at Snapchat, Facebook, Microsoft, GE, BCG
                or have continued their academic careers in prestigious PhD
                programs at Stanford and MIT.
              </p>
              <p>
                We have members who come from all around the world with a wide
                variety of interests: music, world cultures, athletics, video
                games, community work, and more. Brothers are always willing to
                explore new things and meet new people, allowing our fraternity
                to bolster with interesting conversations and explorations.
                These explorations forge life-long bonds of brotherhood and
                friendship at Sigma Nu.
              </p>
              <p>Fraternally,</p>
              <p>Sigma Nu Epsilon Theta Recruitment Chairs</p>

              <header className="major" id="contact">
                <h2>Contact Info</h2>
              </header>
              <p>
                Rush starts September 3rd, 2022! Fill out our{' '}
                <a
                  href={INTEREST_FORM_LINK}
                  target="_blank"
                >
                  Interest Form{' '}
                </a>
              </p>
              <p>
                Follow us on{' '}
                <a href={'https://instagram.com/mitsigmanu'} target="_blank">
                  Instagram
                </a>{' '}
                and check out our{' '}
                <a href={'https://facebook.com/MIT.SigmaNu'} target="_blank">
                  {' '}
                  Facebook!
                </a>
              </p>
              <p>
                <h3>Contact our rush team</h3>
                <section style={{display: 'flex', justifyContent: 'center'}}>
                  <ContactCard bro={{name: 'Carlos Sanchez', number: '347-546-5324'}}></ContactCard>
                  <ContactCard bro={{name: 'Chris Picard', number: '617-606-8952'}}></ContactCard>
                  <ContactCard bro={{name: 'Teo GutieRuiz', number: '323-382-4105'}}></ContactCard>
                </section>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

class ContactCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section style={{padding: '0px 20px'}}>
        <a href={"tel:" + this.props.bro.number}>{this.props.bro.number}</a>
        <h4>{this.props.bro.name}</h4>
      </section>      
    );
  }
}

export default Rush
