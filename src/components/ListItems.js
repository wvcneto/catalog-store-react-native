import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Axios from 'axios';

import Items from './Items';

const Style = StyleSheet.create({
  listView: {
    backgroundColor: '#ddd',
  },
});

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
      <ScrollView style={Style.listView}>
        {this.state.listItems.map(item => {
          return <Items key={item.titulo} item={item} />;
        })}
      </ScrollView>
    ); // Idealmente key deve haver um valor unico(ID)
  }
}

export default ListItems;
