import React, { Component } from 'react';
import '../../mkdir/pure-min.css';
import '../../mkdir/side-menu.css';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      lista: [],
      item: {
        nome: '',
        peso: '',
        altura: ''
      }
    }
  }
  handleChange = () => {
    this.setState({ lista: this.state.lista.concat([this.state.item]) });
    this.setState({
      item: {
        nome: '',
        peso: '',
        altura: ''
      }
    })
    console.log(this.state.lista)
  }
  handleNome = (event) => {
    var item = Object.assign({}, this.state.item, { nome: event.target.value });
    this.setState({ item });
  }

  handlePeso = (event) => {
    var item = Object.assign({}, this.state.item, { peso: event.target.value });
    this.setState({ item });
  }

  handleAltura = (event) => {
    var item = Object.assign({}, this.state.item, { altura: event.target.value });
    this.setState({ item });
  }


  render() {
    var nome = this.state.item.nome;
    var peso = this.state.item.peso;
    var altura = this.state.item.altura;

    return (
      <div id="main">
        <div className="header">
          <h1>Índice de massa corporal</h1>
          <h2>Venha calcular o seu IMC</h2>
        </div>

        <div className="content">
          <h2 className="content-subhead">Preencha seus dados</h2>

          <div className="pure-control-group">
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" name="nome" value={nome} onChange={this.handleNome} />
          </div>
          <div className="pure-control-group">
            <label htmlFor="peso">Peso</label>
            <input id="peso" type="text" name="peso" value={peso} onChange={this.handlePeso} />
          </div>
          <div className="pure-control-group">
            <label htmlFor="altura">Altura</label>
            <input id="altura" type="text" name="altura" value={altura} onChange={this.handleAltura} />
          </div>
          <div className="pure-control-group">
            <label></label>
            <button onClick={this.handleChange} className="pure-button pure-button-success">Salvar</button>
          </div>

          <table className="pure-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>IMC</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.lista.map(function (pessoa) {
                  return (
                    <tr>
                      <td>{pessoa.nome}</td>
                      <td>{pessoa.peso}</td>
                      <td>{pessoa.altura}</td>
                      <td>{pessoa.imc}</td>
                    </tr>
                  );
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;      