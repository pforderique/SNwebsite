import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Officers from '../components/Officers'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Sigma Nu MIT"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Rush</h3>
                                <p>Discover the brotherhood</p>
                            </header>
                            <Link to="/rush" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Brothers</h3>
                                <p>Learn about us</p>
                            </header>
                            <Link to="/brothers" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Photos</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/photos" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Summer Housing</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/summer-housing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Welcome to Sigma Nu!</h2>
                            </header>
                            <p>Since 1995, Sigma Nu has been home to a highly motivated group of undergrads from all corners of the globe. Located at 99 Bay State Road, our 19th century, six-story mansion is primely located just outside of Kenmore Square. The house is at the center of Boston’s social scene, and our annual Halloween party attracts students from colleges all over the Boston area. The brothers play an active role on campus and are involved in activities such as Rocket Team, Camp Kesem, and techX, and our IM basketball team is a force to be reckoned with.</p>
                            <p>Sigma Nu brothers represent a wide variety of majors and are all driven to succeed at the highest academic level. With hard work comes success, and our brothers have worked at premier companies such as Amazon, Facebook, and Google. In addition to well-rounded students, you’ll also find a variety of personalities at Sigma Nu including movie aficionados, athletes and weightlifters, poker players, and aspiring bartenders. </p>
                            <p>Whether you’re grabbing a bite at the famous Boston Burger Company or catching a Red Sox game at nearby Fenway Park, there’s always something to do near Sigma Nu. Stop by and meet the brotherhood!</p>
                            <ul className="actions">
                                <li><Link to="/brothers" className="button next">Meet the brothers</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <Officers></Officers>
            </Layout>
        )
    }
}



export default HomeIndex
