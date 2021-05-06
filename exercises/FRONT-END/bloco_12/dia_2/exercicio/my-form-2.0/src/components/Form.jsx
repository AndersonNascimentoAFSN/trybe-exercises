import React, { Component } from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props;

    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfessionalForm changeHandler={ changeHandler } />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}
      // <form>
      //   <fieldset>
      //     Dados Pessoais
      //     <label>
      //       Nome:
      //       <input type="text" name="nome" onChange={this.handleValue} value={this.state.nome}/>
      //     </label>

      //     <label>
      //       Email:
      //       <input type="text" name="email" onChange={this.handleValue} value={this.state.email}/>
      //     </label>

      //     <label>
      //       CPF:
      //       <input type="text" name="cpf" onChange={this.handleValue} value={this.state.cpf}/>
      //     </label>
      
      //     <label>
      //       Endereço:
      //       <input type="text" name="endereco" onChange={this.handleValue} value={this.state.endereco}/>
      //     </label>

      //     <label>
      //       Cidade:
      //       <input type="text" name="cidade" onChange={this.handleValue} value={this.state.cidade}/>
      //     </label>

      //     <label>
      //       Estado:
      //       <select name="estado" onChange={this.handleValue} value={this.state.estado}>
      //           { estados.map((estado) => 
      //             <option key={estado.id}>{estado.name}</option> )
      //           }
      //       </select>
      //     </label>

      //     <div onChange={this.handleValue}>
      //       Tipo
      //       <label>
      //         Casa
      //         <input defaultChecked type="radio" value="casa" name="moradia" />
      //       </label>

      //       <label>
      //         Apartamento
      //        <input type="radio" value="apartamento" name="moradia" />
      //       </label>
      //     </div>

      //   </fieldset>

      //   <fieldset>
      //     Último Emprego
      //     <label>
      //       Cargo
      //       <textarea name="cargo" onChange={this.handleValue} value={this.state.cargo}/>
      //     </label>

      //     <label>
      //       Descrição do cargo
      //       <input type="text" name="descricaoCargo" onChange={this.handleValue} value={this.state.descricaoCargo}/>
      //     </label>
      //   </fieldset>

      //   <button type="button">Gerar Currículo</button>
      //   <button type="button">Limpar Form</button>
      // </form>

export default Form;
