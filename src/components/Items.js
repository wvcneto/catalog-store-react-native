import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const Style = {
  photoItem: {
    height: 100,
    width: 100,
  },
};

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Image style={Style.photoItem} source={{uri: this.props.item.foto}} />
        <Text>{this.props.item.titulo}</Text>
        <Text>{this.props.item.valor}</Text>
        <Text>{this.props.item.local_anuncio}</Text>
        <Text>{this.props.item.data_publicacao}</Text>
      </View>
    );
  }
}

export default Item;
