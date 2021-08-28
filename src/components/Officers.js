import React from 'react'
// import commander from '../assets/images/rickyAlvarez.jpg'
// import rush from '../assets/images/charlesCoffey.jpg'
import commander from '../assets/images/charlesCoffey.jpg'
import juan from '../assets/images/brothers/juanDiaz.jpg'
import ltc from '../assets/images/brothers/guillermoVazquez.jpg'
import isaak from '../assets/images/brothers/isaakHernandez.jpg'
import eric from '../assets/images/brothers/ericGonzales.jpg'
import moi from '../assets/images/brothers/moisesTrejo.jpg'
import marvin from '../assets/images/brothers/marvinZetina.jpg'
import './officers.scss'


const Officers = (props) => (
  <div className={"officers"}>
    <div>
      <div className={"dual-officer"}>
        <img src={moi} alt={'ltc'} />
        <img src={isaak} alt={'ltc'} />
      </div>
      <p> <strong>Social Chairs </strong></p>
      <p>Moises Trejo <br />&<br/> Isaak Hernandez</p>
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
        <img src={marvin} alt={'ltc'} />
        <img src={eric} alt={'ltc'} />
        <img src={juan} alt={'ltc'} />
      </div>
      <p> <strong>Rush Chairs </strong></p>
      <p>Marvin Zetina & Juan Diaz<br/>&<br/>Eric Gonzales </p>
      <p><a href={"mailto:sn-rush2020@mit.edu"}>sn-rush2021@mit.edu</a></p>
    </div>
  </div>
  
)

export default Officers
