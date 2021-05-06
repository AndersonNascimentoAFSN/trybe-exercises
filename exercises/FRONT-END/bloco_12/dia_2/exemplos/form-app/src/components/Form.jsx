import React from 'react';
import EstadoFavorito from './EstadoFavorito';
import Email from './Email';
import Nome from './Nome';

class Form extends React.Component {

  constructor() {
    super();

    this.handleValue = this.handleValue.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    };
  }

  handleValue({target}) {
    const { name, checked, type } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (

      <div>
        <h1>Estados e React: Ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <ul>
            <EstadoFavorito value={this.state.estadoFavorito} handleValue={this.handleValue} />
            <Email value={this.state.email} handleValue={this.handleValue} />
            <Nome value={this.state.nome} handleValue={this.handleValue}/>

            <li>
              <label for="idade">Idade</label>
              <input id="idade" name="idade" type="number" value={this.state.idade} onChange={this.handleValue}/>
            </li>

            <li>
              <label for="vaiComparecer">Vai comparecer à conferência?</label>
              <input id="vaiComparecer" name="vaiComparecer" type="checkbox" checked={this.state.vaiComparecer} onChange={this.handleValue}/>
            </li>

            <li>
              <label for="palavraChaveFavorita">Escolha sua palavra chave favorita:</label>
              <select id="palavraChaveFavorita" name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleValue}>
                  <option value="estado">Estado</option>
                  <option value="evento">Evento</option>
                  <option value="props">Props</option>
                  <option value="hooks">Hooks</option>
                </select>
            </li>

            <li>
              <input id="file" name="file" type="file"/>
            </li>

          </ul>
        </form>
      </div>
    )
  }
}

export default Form;
