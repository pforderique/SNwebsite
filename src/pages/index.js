import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import Officers from '../components/Officers';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';

import candidates from '../assets/images/mainpage/candidates.jpg';
import marathon from '../assets/images/mainpage/marathon.jpg';
import electricNu from '../assets/images/mainpage/electricNu.jpg';
import house from '../assets/images/mainpage/house.jpg';
// import pic04 from '../assets/images/pic04.jpg';
import exec from '../assets/images/fullSN.jpg';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="MIT Sigma Nu"
          meta={[
            {
              name: 'google-site-verification',
              content: 'NgPeQMF7lE4W03aCqNr8oXbM8RISXv1Ji77vFYxzWoc',
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />
        <div id="main">
          <meta
            name="google-site-verification"
            content="NgPeQMF7lE4W03aCqNr8oXbM8RISXv1Ji77vFYxzWoc"
          />
          <meta
            property="og:image"
            content="https://images.squarespace-cdn.com/content/v1/542c9b0de4b0de4a5f820179/1597596313337-7MGP2JL2458A3EV7VYY7/B5981E1A-A9AF-445A-B8FB-A03CDB127D7F+-+Charles+Coffey.png?format=750w"
          />
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${candidates})` }}>
              <header className="major">
                <h3>Rush</h3>
                <p>Discover the brotherhood</p>
              </header>
              <Link to="/rush" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${electricNu})` }}>
              <header className="major">
                <h3>Brothers</h3>
                <p>Learn about us</p>
              </header>
              <Link to="/brothers" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${marathon})` }}>
              <header className="major">
                <h3>Photos</h3>
                <p>Photos of our brothers</p>
              </header>
              <Link to="/photos" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${house})` }}>
              <header className="major">
                <h3>Summer Housing</h3>
                <p>Live with us</p>
              </header>
              <Link to="/summer-housing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${exec})` }}>
              <header className="major">
                <h3>Exec</h3>
                <p>Sigma Nu Executive Team</p>
              </header>
              <Link to="/exec" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Welcome to Sigma Nu!</h2>
              </header>
              <p>
                Since 1995, Sigma Nu has been home to a highly motivated group
                of undergrads from all corners of the globe. Located at 99 Bay
                State Road, our 19th century, six-story mansion is primely
                located just outside of Kenmore Square. The house is at the
                center of Boston’s social scene, and our annual Halloween party
                attracts students from colleges all over the Boston area. The
                brothers play an active role on campus and are involved in
                activities such as Rocket Team, Camp Kesem, and SHPE, and our IM
                basketball team is a force to be reckoned with.
              </p>
              <p>
                Sigma Nu brothers represent a wide variety of majors and are all
                driven to succeed at the highest academic level. With hard work
                comes success, and our brothers have worked at premier companies
                such as Amazon, Facebook, and Google. In addition to
                well-rounded students, you’ll also find a variety of
                personalities at Sigma Nu including movie aficionados, athletes
                and weightlifters, poker players, and aspiring entreprenuers.{' '}
              </p>
              <p>
                Whether you’re grabbing a bite at the famous Boston Burger
                Company or catching a Red Sox game at nearby Fenway Park,
                there’s always something to do near Sigma Nu. Stop by and meet
                the brotherhood!
              </p>
              <ul className="actions">
                <li>
                  <Link to="/brothers" className="button next">
                    Meet the brothers
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <Officers></Officers>
      </Layout>
    );
  }
}

export default HomeIndex;
