import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Axios from 'axios';

import Items from './Items';

class ListItems extends Component {
  constructor(props) {
    super(props);
    //console.log('Construindo a aplicação!');
    this.state = {listItems: []};
  }
  //WillMount foi descontinuada desde a vesão 16.3
  componentDidMount() {
    //console.log('Depois de renderizar!');
    //requisição http
    //http://faus.com.br/recursos/c/dmairr/api/itens.html
    Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => {
        this.setState({listItems: response.data});
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados!');
      });
  }
  render() {
    //console.log('Renderizando!');
    return (
      <ScrollView>
        {this.state.listItems.map(item => {
          return <Items key={item.titulo} item={item} />;
        })}
      </ScrollView>
    ); // Idealmente key deve haver um valor unico(ID)
  }
}

export default ListItems;
