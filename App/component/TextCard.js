import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const TextCard = props => {
  const {viewStyles} = Container;
  return <View style={viewStyles}>{props.children}</View>;
};
export default TextCard;
const Container = StyleSheet.create({
  viewStyles: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});
