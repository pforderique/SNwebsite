import React from 'react'
import commander from '../assets/images/rickyAlvarez.jpg'
import rush from '../assets/images/charlesCoffey.jpg'
import marco from '../assets/images/brothers/marcoFleming.jpg'
import juan from '../assets/images/brothers/juanDiaz.jpg'
import vik from '../assets/images/brothers/viktorUrvantsev.jpg'
import ltc from '../assets/images/derekGarcia.jpg'
import './officers.scss'


const Officers = (props) => (
  <div className={"officers"}>
    <div>
      <div className={"officer"}>
        <img src={vik} alt={'ltc'} className={"dual-officer"}/>
        <img src={juan} alt={'ltc'} />
      </div>
      <p> <strong>Social Chairs </strong></p>
      <p>Viktor Urvantsev & Juan Diaz</p>
      <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-social@mit.edu</a></p>
    </div>
    <div>
      <img src={commander} alt={'commander'} className={"officer"}/>
      <p> <strong>Commander </strong></p>
      <p>Ricky Alvarez</p>
      <p><a href={"mailto:sn-commander@mit.edu"}>sn-commander@mit.edu</a></p>
    </div>
    <div>
      <div className={"officer"}>
        <img src={marco} alt={'ltc'} className={"dual-officer"}/>
        <img src={rush} alt={'ltc'} />
      </div>
      <p> <strong>Rush Chairs </strong></p>
      <p>Marco Fleming & Charles Coffey</p>
      <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-rush2020@mit.edu</a></p>
    </div>
  </div>
)

export default Officers
