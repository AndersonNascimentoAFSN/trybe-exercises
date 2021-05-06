import React, { Component } from 'react';
const states = require('../estados.json');

class PersonalForm extends Component {
  render() {
    const { changeHandler, onBlurHandler, currentState } = this.props;
    return (
      <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={currentState.city}
                onBlur={onBlurHandler}
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                onChange={changeHandler}
                defaultValue=""
              >
                <option value="">Selecione</option>
                {
                  states.map((state) => (
                    <option key={ state.id }>{ state.name }</option>
                  ))
                }
              </select>
            </div>
            <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"
                  onChange={changeHandler}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                  onChange={changeHandler}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
    );
  }
}

export default PersonalForm;