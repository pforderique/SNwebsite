import React from 'react'
import commander from '../assets/images/rickyAlvarez.jpg'
import ltc from '../assets/images/charlesCoffey.jpg'
import rush from '../assets/images/derekGarcia.jpg'
import './officers.scss'


const Officers = (props) => (
    <div className={"officers"}>
        <div>
            <img src={rush} alt={"rush"} className={"officer"}/>
            <p>LTC</p>
            <p>Derek Garcia</p>
            <p> email@mit.edu</p>
        </div>
        <div>
            <img src={commander} alt={'commander'} className={"officer"}/>
            <p>Commander</p>
            <p>Ricky Alvarez</p>
            <p> email@mit.edu</p>
        </div>
        <div>
            <img src={ltc} alt={'ltc'} className={"officer"}/>
            <p>Rush</p>
            <p>Charles Coffey</p>
            <p>email@mit.edu</p>
        </div>



    </div>
)

export default Officers
