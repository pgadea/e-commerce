import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) =>
  <div>
    <ul>
      {
        props.options.map((option, index) =>
          <li key={index}><Link to={option}>{ option }</Link></li>
        )
      }
    </ul>
  </div>

export default NavBar
