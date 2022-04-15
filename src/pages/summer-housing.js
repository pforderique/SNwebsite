import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Carousel } from 'react-responsive-carousel'


import chapterRoom from '../assets/images/house/Chapter.jpg'
import landing2 from '../assets/images/house/2Floorlanding.jpg'
import athena from '../assets/images/house/AthenaCluster.jpg'
import denNight from '../assets/images/house/DenNight.jpg'
import denDay from '../assets/images/house/DenDay.jpg'
import f1Bathroom from '../assets/images/house/Floor1Bathroom.jpg'
import frontDark from '../assets/images/house/FrontDark.jpg'
import kitchen from '../assets/images/house/Kitchen.jpg'
import snakePit from '../assets/images/house/SnakePit.jpg'


const images = [
    {src: frontDark, legend: 'Front of the house at night'},
    {src: chapterRoom, legend: 'Common area room (2nd floor)'},
    {src: landing2, legend: 'Common area landing (2nd floor)'},
    {src: denDay, legend: 'Den common area (3rd floor)'},
    {src: denNight, legend: 'Den common area (3rd floor)'},
    {src: snakePit, legend: 'Study room common area (6th floor)'},
    {src: kitchen, legend: 'Commercial common kitchen (1st floor)'},
    {src: athena, legend: 'Fridge space next to kitchen (1st floor)'},
    {src: f1Bathroom, legend: 'Sample bathroom (1st floor)'},
]


const Summer = (props) => (
    <Layout>
        <Helmet>
            <title>Summer Housing</title>
            <meta name="description" content="Summer Housing Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner" style={{ 'paddingBottom': '0px' }}>
                    <header className="major">
                        <h1>Summer Housing</h1>
                    </header>
                </div>

                <div className='inner' style={{'paddingTop': '0px'}}>
                    <button>
                        <a href={'https://tinyurl.com/SNSummer2022'} target="_blank">
                            APPLY HERE
                        </a>
                    </button>
                </div>

                <div className={'slideshow'} align="center" style={{ "height": "50%" }}>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        autoPlay={true}
                        interval={2000}
                        showArrows={true}
                        width="50%"
                        dynamicHeight={true}
                        centerMode={true}
                    >
                    {images.map((item, index) => (
                        <div key={index}>
                        <img src={item.src} alt={index} className={'image'} />
                        <p className="legend">{item.legend}</p>
                        </div>
                    ))}
                    </Carousel>
                </div>
            </section>

            <section id="location">
                <div className="inner">
                    <header className="major">
                        <h2>Location</h2>
                    </header>
                    <p> 
                        Our house is located at 99 Bay State Road in the heart of Kenmore. The house itself is a beautiful six-story brownstone mansion that includes a fully-equipped kitchen and several large common areas. We are conveniently located near public transportation, including the Kenmore Square Green Line Stop (B,C, and D Line Trains), so getting in and around the city is easy. Fenway park is a 5 minute walk away, so we recommend you take in a Red Sox game or two while you're here.
                    </p>
                </div>
            </section>

            <section id="amenities">
                <div className="inner">
                    <header className="major">
                        <h2>Amenities</h2>
                    </header>
                    <p>
                    Rooms are fully furnished with twin extra long beds, sofas, dressers, desks and office chairs. Shared amenities available to residents include:
                    </p>
                    <ul>
                        <li>High Speed Wifi</li>
                        <li>Kitchen Facilities</li>
                        <li>Billiard Table</li>
                        <li>Foosball Table</li>
                        <li>Large Common Areas and Landings</li>
                        <li>Laundry/Dryer Machines</li>
                        <li>Utilities/Hot Water Included</li>
                    </ul>
                </div>
            </section>

            <section id="pricing">
                <div className="inner">
                    <header className="major">
                        <h2>Pricing</h2>
                    </header>
                    <p>
                    For the summer of 2022, we have singles, doubles, triples, and quads available for rent from Monday, May 30th to Saturday, August 20th. Once you are approved for housing a spot will be reserved for you. You will have five (5) business days to return a signed lease agreement and a security deposit of $300. If you fail to submit a contract and/or deposit in this timeframe, your spot will be released. Full payment of the summer rent is due on or prior to May 23rd. If you prefer to pay your rent in two installments (1/2 on or before May 23rd and 1/2 on July 1st), a fee of $200 will be charged.
                    </p>
                    <h2>Rental Rates</h2>
                    <table align="center">
                        <tr>
                            <th>Room Size</th>
                            <th colspan="2" align='center'>Rates ranging from</th>
                            <th>No. of Rooms</th>
                        </tr>
                            <td>Single</td>
                            <td>$2,400</td>
                            <td>$3,500</td>
                            <td><s>7 rooms</s></td>
                        <tr>
                            <td>Double</td>
                            <td>$2,200</td>
                            <td>$2,800</td>
                            <td>5 rooms</td>
                        </tr>
                        <tr>
                            <td>Triple</td>
                            <td>$2,400</td>
                            <td>$2,500</td>
                            <td>2 rooms</td>
                        </tr>
                        <tr>
                            <td>Quad</td>
                            <td>$2,400</td>
                            <td>$2,400</td>
                            <td>1 room</td>
                        </tr>
                    </table>
                </div>
            </section>

            <section id="timeline">
                <div className="inner">
                    <header className="major">
                        <h2>Timeline</h2>
                    </header>
                    <table align="center" border="0">
                        <tr>
                            <td><b>Five (5) business days after being approved</b></td>
                            <td>Signed contract and security deposits Due</td>
                        </tr>
                        <tr>
                            <td><b>May 30th</b></td>
                            <td>Start of Summer Session (Payment in Full or 1st Installment)</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td><b>July 1</b></td>
                            <td>2nd Payment Installment Due</td>
                        </tr>
                        <tr>
                            <td><b>August 20</b></td>
                            <td>End of Summer Session (Last Day to Move Out)</td>
                        </tr>
                    </table>
                </div>
            </section>

            <section id="house-rules">
                <div className="inner">
                    <header className="major">
                        <h2>House Rules</h2>
                    </header>
                    <p>
                        Summer boarders are allowed to have guests over, within reason. Boarders are responsible for the actions of their guests. Boarders are responsible for the cleanliness of their own rooms. In addition, boarders are responsible for upkeep of some common spaces around the house, in a rotating job assigned by the house manager. Failure to complete chores in a timely manner will result in fines.
                    </p>
                </div>
            </section>

            <section id="parking">
                <div className="inner">
                    <header className="major">
                        <h2>Parking</h2>
                    </header>
                    <p>
                    We have parking in our back lot which is available for rent. Spaces can be rented for $500 on a first-come, first-serve basis. Additional parking can be found in private lots and garages within a few blocks of the house.
                    </p>
                </div>
            </section>

            <div id="faq">
                <div className="inner">
                    <header className="major">
                        <h2>FAQs</h2>
                    </header>
                    <ul>
                        <li>
                            <b>I've filled out my form. When can I expect to hear back from you?</b><br/> 
                            We receive a lot of inquires and unfortunately cannot respond to all of them. If you do not qualify for house, you likely will not be reached. If you do qualify, you should hear from us with a week. Please check your spam folder as some emails from our @mit.edu address has ended up there.
                        </li>
                    <br/>
                        <li>
                            <b>Are you close to public transportation?</b><br/>
                            We are a short walk to Kenmore Station on the MBTA green line and about an 8min walk to the Lansdowne Commuter Rail stop on the Worcester/Framingham Line
                        </li>
                    <br/>
                        <li>
                            <b>Is there a gym in the building?</b><br/> 
                            No, we recommend GymIt at 920 Commonwealth Ave. It's about a 20min walk or a short T ride. The monthly costs are very reasonable for students.
                        </li>
                    <br/>
                        <li>
                            <b>Do have any responsibilities while living in the house?</b><br/> 
                            Yes, we expect that all tenants will maintain a clean leaving environment. Additionally to keep our cost downs and provide fair rents, each resident will be assigned a weekly chore (eg. taking out the trash, cleaning the shared bathroom, etc). This will help maintain an enjoyable living experience for the summer. Additionally, there will be a house cleaner service.
                        </li>
                    <br/>
                        <li>
                            <b>Can I use the kitchen?</b><br/> 
                            Absolutely, we have a commercial kitchen and you're welcome to use it for your food preparation. We only ask that you clean up after yourself out of respect for the other residents.    
                        </li>    
                    </ul>
                </div>
            </div>

            <section id="contact-us">
                <div className="inner">
                    <header className="major">
                        <h2>Contact</h2>
                    </header>
                    <p>
                        If you are interested in applying for summer housing, please apply at <a href='https://tinyurl.com/SNSummer2022'>this link.</a>
                    </p>
                    <p>
                        If you have any questions, please send an email to <a href='mailto:sn-summer-occupancy@mit.edu'>sn-summer-occupancy@mit.edu</a>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Summer