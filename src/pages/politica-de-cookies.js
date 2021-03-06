import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


class CookiePolicyPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="container"><div className="text-justify"><h1 className="title">Política de Cookies</h1><div><p>En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, esta página web le informa, en esta sección, sobre la política de recogida y tratamiento de cookies.</p>
        <h2>¿Qué son las cookies?</h2>
        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
        <h2>¿Qué tipos de cookies utiliza esta página web?</h2>
        <ul>
        <li>Cookies de análisis - Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
        </ul>
        <h2>Cómo desactivar las Cookies</h2>
        <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
        <p>A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:</p>
        <ul>
        <li>Firefox</li>
        <li>Safari</li>
        <li>Google Chrome</li>
        </ul>
        <h2>Cookies de Terceros</h2>
        <p>Esta página web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web.</p>
        <ul>
        <li>Google Analytics</li>
        </ul></div></div></div>
        <Link to="/">Volver al inicio</Link>
      </Layout>
    )
  }
}

export default CookiePolicyPage
