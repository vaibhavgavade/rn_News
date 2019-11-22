import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ImageCard = props => {
  const {viewStyles} = Container;
  return <View style={viewStyles}>{props.children}</View>;
};
export default ImageCard;
const Container = StyleSheet.create({
  viewStyles: {
    flex: 1,
    backgroundColor: '#000000',
    borderRadius: 5,
    margin: 10,
    height: 300,
    width: 250,
  },
});
