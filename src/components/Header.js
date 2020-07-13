import PropTypes from 'prop-types'
import React from 'react'
const data = require('../data/data');

const Header = props => {
  const dataLang = data[props.language]
  const menu = dataLang.menu.map((menu) => 
    <li key={menu.id}>
      <button className={menu.id}
        onClick={() => {
          props.onOpenArticle(`${menu.id}`)
        }}
      >
        {menu.name}
      </button>
    </li>
  )
  return(
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="date">17/10/2020</span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>
            {dataLang.title}
          </h1>
          <p>
            {dataLang.subtitle}
          </p>
        </div>
      </div>
      <nav>
        <ul>
          {menu}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  language: PropTypes.string
}

export default Header
