import React, { Component } from 'react';
import '../../mkdir/pure-min.css';
import '../../mkdir/side-menu.css';


class App extends Component {
  
  constructor(){
    super();
    this.state = {lista: [{
        nome: '',
        peso: '',
        altura: '',
        imc: 0
      }]
    }
  }

  render() {
    return (
      <div id="main">
        <div className="header">
          <h1>Índice de massa corporal</h1>
          <h2>Venha calcular o seu IMC</h2>
        </div>

        <div className="content">
          <h2 className="content-subhead">Preencha seus dados</h2>
          <form className="pure-form pure-form-aligned">
            <div className="pure-control-group">
              <label htmlFor="nome">Nome</label> 
              <input id="nome" type="text" name="nome" value={this.state.lista.nome} onChange={this.handleChange}/>                  
            </div>
            <div className="pure-control-group">
              <label htmlFor="peso">Peso</label> 
              <input id="peso" type="text" name="peso" value={this.state.lista.peso} onChange={this.handleChange}/>                  
            </div>
            <div className="pure-control-group">
              <label htmlFor="altura">Altura</label> 
              <input id="altura" type="text" name="altura" value={this.state.lista.altura} onChange={this.handleChange}/>                                      
            </div>
            <div className="pure-control-group">                                  
              <label></label> 
               <button type="submit" onClick="this.handleChange" className="pure-button pure-button-success">Salvar</button>    
            </div>
          </form>
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
                this.state.lista.map(function(pessoa){
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