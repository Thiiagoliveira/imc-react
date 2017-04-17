import React, { Component } from 'react';
import '../../mkdir/pure-min.css';
import '../../mkdir/side-menu.css';
import Clock from '../Clock/Clock';
import Author from '../Author/Author';
import Imc from '../Imc/Imc';


class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="header">
          <h1>Índice de massa corporal</h1>
          <h2>Venha calcular o seu IMC</h2>
          <Clock />
        </div>
        <Imc />
        <Author />
      </div>
    );
  }
}

{/*
   var nome = this.state.item.nome;
   var peso = this.state.item.peso;
   var altura = this.state.item.altura;
*/}

export default App;      