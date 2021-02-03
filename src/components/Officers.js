import React from 'react'
// import commander from '../assets/images/rickyAlvarez.jpg'
// import rush from '../assets/images/charlesCoffey.jpg'
import commander from '../assets/images/charlesCoffey.jpg'
import marco from '../assets/images/brothers/marcoFleming.jpg'
import juan from '../assets/images/brothers/juanDiaz.jpg'
import vik from '../assets/images/brothers/viktorUrvantsev.jpg'
import ltc from '../assets/images/brothers/guillermoVazquez.jpg'
import marvin from '../assets/images/brothers/marvinZetina.jpg'
import './officers.scss'


const Officers = (props) => (
  <div className={"officers"}>
    <div>
      <div className={"dual-officer"}>
        <img src={vik} alt={'ltc'} />
        <img src={juan} alt={'ltc'} />
      </div>
      <p> <strong>Social Chairs </strong></p>
      <p>Viktor Urvantsev <br />&<br/> Juan Diaz</p>
      <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-social@mit.edu</a></p>
    </div>
    <div>
      <img src={commander} alt={'commander'} className={"officer"}/>
      <p> <strong>Commander </strong></p>
      <p>Charles Coffey</p>
      <p><a href={"mailto:sn-commander@mit.edu"}>sn-commander@mit.edu</a></p>
    </div>
    <div>
      <div className={"dual-officer"}>
        <img src={marco} alt={'ltc'} />
        <img src={marvin} alt={'ltc'} />
      </div>
      <p> <strong>Rush Chairs </strong></p>
      <p>Marco Fleming<br />&<br />Marvin Zetina-Jimenez</p>
      <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-rush2020@mit.edu</a></p>
    </div>
  </div>
  
)

export default Officers
