import React from 'react'
// import commander from '../assets/images/rickyAlvarez.jpg'
// import rush from '../assets/images/charlesCoffey.jpg'

import commander from '../assets/images/charlesCoffey.jpg'
import juan from '../assets/images/brothers/juanDiaz.jpg'
import ltc from '../assets/images/brothers/guillermoVazquez.jpg'

import marvin from '../assets/images/brothers/marvinZetina.jpg'
import teo from '../assets/images/brothers/teo.jpg'
import cj from '../assets/images/brothers/cj.jpg'
import hector from '../assets/images/brothers/hector.jpg'
import chris from '../assets/images/brothers/chrisPicard.jpg'
import './officers.scss'

const Officers = props => (
  <div className={'officers'}>
    <div>
      <div className={'dual-officer'}>
        <img src={hector} alt={'ltc'} />
      </div>
      <p>
        {' '}
        <strong>Social Chair </strong>
      </p>
      <p>Hector</p>
      <p>
        <a href={'mailto:sn-social@mit.edu'}>sn-social@mit.edu</a>
      </p>
    </div>
    <div>
      <img src={marvin} alt={'commander'} className={'officer'} />
      <p>
        {' '}
        <strong>Commander</strong>
      </p>
      <p>Marvin</p>
      <p>
        <a href={'mailto:sn-commander@mit.edu'}>sn-commander@mit.edu</a>
      </p>
    </div>
    <div>
      <div className={'dual-officer'}>
        <img src={cj} alt={'Rush Chair - Carlos'} />
        <img src={chris} alt={'Rush Chair - Chris'} />
        <img src={teo} alt={'Rush Chair - Teo'} />
      </div>
      <p>
        {' '}
        <strong>Rush Chairs</strong>
      </p>
      <p>Carlos, Chris, & Teo </p>
      <p>
        <a href={'mailto:sn-rush@mit.edu'}>sn-rush@mit.edu</a>
      </p>
    </div>
  </div>
)

export default Officers
