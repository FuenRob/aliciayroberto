import PropTypes from 'prop-types'
import React from 'react'
import parse from 'html-react-parser';
import pic01 from '../images/pic02.jpeg'
import GoogleMap from './GoogleMap'
const datas = require('../data/data');
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    if(data.get('conditions') === "on"){
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          this.setState({ status: "SUCCESS" })
        } else {
          this.setState({ status: "ERROR" })
        }
      };
      xhr.send(data);
    }else{
      this.setState({ status: "CONDITIONS" })
    }
  }

  render() {
    const { status } = this.state;
    const dataLang = datas[this.props.language]

    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="detalles"
          className={`${this.props.article === 'details' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Detalles</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          {parse(dataLang.paragraph)}
          <GoogleMap />
          {close}
        </article>

        <article
          id="confirmation"
          className={`${this.props.article === 'confirmation' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{dataLang.formulary.title}</h2>
          {status !== 'SUCCESS' ?
          <form method="POST" action="https://formspree.io/xwkroypo" onSubmit={this.submitForm}>
            <div className="field half first">
              <label htmlFor="name">{dataLang.formulary.name}</label>
              <input type="text" name="nombre" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="phone">{dataLang.formulary.phone}</label>
              <input type="text" name="telefono" id="phone" />
            </div>
            <div className="field">
              <label htmlFor="email">{dataLang.formulary.email}</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field half first">
              <label htmlFor="coupleyes">{dataLang.formulary.couple}</label>
              <input type="radio" name="pareja" id="coupleyes" value="Sí"/><label htmlFor="coupleyes">{dataLang.formulary.coupleyes}</label>
              <input type="radio" name="pareja" id="coupleno" value="No"/><label htmlFor="coupleno">{dataLang.formulary.coupleno}</label>
            </div>
            <div className="field half">
              <label htmlFor="kidyes">{dataLang.formulary.kid}</label>
              <input type="radio" name="niños" id="kidyes" value="Sí" onClick={() => {
                this.props.onDisplayKidsNumber()
              }}/><label htmlFor="kidyes">{dataLang.formulary.kidyes}</label>
              {this.props.kidNumber ? 
              <div id="numberOfKids">
                <div className="field half first">
                  <label htmlFor="kidsnumber">{dataLang.formulary.kidnumber}</label>
                </div>
                <div className="field half">
                  <input type="text" name="numero_niños" id="kidsnumber" />
                </div>
              </div> : ''
              }
              <input type="radio" name="niños" id="kidno" value="No"/><label htmlFor="kidno">{dataLang.formulary.kidno}</label>
            </div>
            <div className="field half first">
              <label htmlFor="busyes">{dataLang.formulary.bus}</label>
              <input type="radio" name="bus" id="busyes" value="Sí"/><label htmlFor="busyes">{dataLang.formulary.busyes}</label>
              <input type="radio" name="bus" id="busno" value="No"/><label htmlFor="busno">{dataLang.formulary.busno}</label>
            </div>
            <div className="field half">
              <label htmlFor="zoneMadrid">{dataLang.formulary.zone}</label>
              <input type="radio" name="zona" id="zoneMadrid" value="Madrid"/><label htmlFor="zoneMadrid">{dataLang.formulary.zoneMadrid}</label>
              <input type="radio" name="zona" id="zoneFuenla" value="Fuenlabrada"/><label htmlFor="zoneFuenla">{dataLang.formulary.zoneFuenla}</label>
            </div>
            <div className="field">
              <label htmlFor="alergenos">{dataLang.formulary.allergy}</label>
              <input type="checkbox" name="alergenos[]" id="gluten" value="Gluten"/><label htmlFor="gluten">{dataLang.formulary.gluten}</label>
              <input type="checkbox" name="alergenos[]" id="frutossecos" value="Frutos secos"/><label htmlFor="frutossecos">{dataLang.formulary.frutossecos}</label>
              <input type="checkbox" name="alergenos[]" id="lacteos" value="Lácteos"/><label htmlFor="lacteos">{dataLang.formulary.lacteos}</label>
              <input type="checkbox" name="alergenos[]" id="huevos" value="Huevos"/><label htmlFor="huevos">{dataLang.formulary.huevos}</label>
              <input type="checkbox" name="alergenos[]" id="pescado" value="Pescado"/><label htmlFor="pescado">{dataLang.formulary.pescado}</label>
              <input type="checkbox" name="alergenos[]" id="crustaceos" value="Crustáceos"/><label htmlFor="crustaceos">{dataLang.formulary.crustaceos}</label>
              <input type="checkbox" name="alergenos[]" id="mostaza" value="Mostaza"/><label htmlFor="mostaza">{dataLang.formulary.mostaza}</label>
              <input type="checkbox" name="alergenos[]" id="soja" value="Soja"/><label htmlFor="soja">{dataLang.formulary.soja}</label>
            </div>
            <div className="field">
              <input type="checkbox" name="alergenos[]" id="otros" value="Otros"/><label htmlFor="otros">{dataLang.formulary.otros}</label>
            </div>
            <div className="field">
              <input type="checkbox" name="conditions" id="conditions" /><label htmlFor="conditions"><a href="https://www.aliciayroberto.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">{dataLang.formulary.conditions}</a></label>
              {status === "CONDITIONS" && <p>{dataLang.formulary.errorConditions}</p>}
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value={dataLang.formulary.confirm} className="special" />
              </li>
              <li>
                <input type="reset" value={dataLang.formulary.reset} />
              </li>
              <li>
                {status === "ERROR" && <p>{dataLang.formulary.error}</p>}
              </li>
            </ul>
          </form>
          : 
          <div>
            {parse(dataLang.confirmated)}
          </div>
          }
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  kidNumber: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onDisplayKidsNumber: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  language: PropTypes.string
}

export default Main
