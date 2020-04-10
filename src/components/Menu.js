import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

//                <li><Link onClick={props.onToggleMenu} to="/landing">Landing</Link></li>
//                <li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li>
//                <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>

//<li><a href="#" className="button fit">Log In</a></li>
//<li><a href="#" className="button special fit">Rush</a></li>
const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#two">About us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/brothers">Brothers</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/photos">Photos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/summer-housing">Summer Housing</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/rush" className="button fit">Rush</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
