import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Roberto Morais - <Link to="/politica-de-privacidad" rel="nofollow">Política de privacidad</Link> <Link to="/politica-de-cookies" rel="nofollow">Política de cookies</Link> - Tema: Dimension. Diseño: <a href="https://html5up.net" target="_blank" rel="nofollow noopener noreferrer">HTML5 UP</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
