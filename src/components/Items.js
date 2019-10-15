import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  itemView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  photoItem: {
    height: 100,
    width: 100,
  },
  photoView: {
    width: 102,
    height: 102,
  },
  textView: {
    marginLeft: 20,
    flex: 1,
  },
  textTitle: {
    fontSize: 18,
    color: '#71f',
    margin: 5,
  },
  textValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
});

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={Style.itemView}>
        <View style={Style.photoView}>
          <Image style={Style.photoItem} source={{uri: this.props.item.foto}} />
        </View>
        <View style={Style.textView}>
          <Text style={Style.textTitle}>{this.props.item.titulo}</Text>
          <Text style={Style.textValue}>R$ {this.props.item.valor}</Text>
          <Text style={Style.text}>
            Location: {this.props.item.local_anuncio}
          </Text>
          <Text style={Style.text}>
            Publication: {this.props.item.data_publicacao}
          </Text>
        </View>
      </View>
    );
  }
}

export default Item;
