import React from 'react'
// import commander from '../assets/images/rickyAlvarez.jpg'
// import rush from '../assets/images/charlesCoffey.jpg'

import commander from '../assets/images/charlesCoffey.jpg'
import juan from '../assets/images/brothers/juanDiaz.jpg'
import ltc from '../assets/images/brothers/guillermoVazquez.jpg'

import marvin from '../assets/images/brothers/marvinZetina.jpg'
import javier from '../assets/images/brothers/javierMendez.jpg'
import eric from '../assets/images/brothers/ericGonzales.jpg'
import chris from '../assets/images/brothers/chrisPicard.jpg'
import './officers.scss'

const Officers = props => (
  <div className={'officers'}>
    <div>
      <div className={'dual-officer'}>
        <img src={javier} alt={'ltc'} />
      </div>
      <p>
        {' '}
        <strong>Social Chair </strong>
      </p>
      <p>Javier Mendez</p>
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
      <p>Marvin Zetina</p>
      <p>
        <a href={'mailto:sn-commander@mit.edu'}>sn-commander@mit.edu</a>
      </p>
    </div>
    <div>
      <div className={'dual-officer'}>
        <img src={eric} alt={'Rush Chair - Eric'} />
        <img src={chris} alt={'Rush Chair - Chris'} />
      </div>
      <p>
        {' '}
        <strong>Rush Chairs</strong>
      </p>
      <p>Chris Picard & Eric Gonzalez </p>
      <p>
        <a href={'mailto:sn-rush@mit.edu'}>sn-rush@mit.edu</a>
      </p>
    </div>
  </div>
)

export default Officers
