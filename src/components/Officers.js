import React from 'react'
import commander from '../assets/images/rickyAlvarez.jpg'
import rush from '../assets/images/charlesCoffey.jpg'
import marco from '../assets/images/brothers/marcoFleming.jpg'
import ltc from '../assets/images/derekGarcia.jpg'
import './officers.scss'


const Officers = (props) => (
    <div className={"officers"}>
        <div>
            <img src={ltc} alt={"rush"} className={"officer"}/>
            <p> <strong> Lieutenant Commander </strong></p>
            <p>Derek Garcia</p>
            <p><a href={"mailto:sn-ltc@mit.edu"}>sn-ltc@mit.edu</a></p>
        </div>
        <div>
            <img src={commander} alt={'commander'} className={"officer"}/>
            <p> <strong>Commander </strong></p>
            <p>Ricky Alvarez</p>
          <p><a href={"mailto:sn-commander@mit.edu"}>sn-commander@mit.edu</a></p>
        </div>
        <div>
            <img src={rush} alt={'ltc'} className={"officer"}/>
            <p> <strong>Rush Chair </strong></p>
            <p>Charles Coffey</p>

          <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-rush2020@mit.edu</a></p>
        </div>
        <div>
          <img src={marco} alt={'ltc'} className={"officer"}/>
          <p> <strong>Rush Chair </strong></p>
          <p>Marco Flemming</p>
          <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-rush2020@mit.edu</a></p>
        </div>
    </div>
)

export default Officers
