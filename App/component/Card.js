import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Card = props => {
  const {viewStyles} = Container;
  return <View style={viewStyles}>{props.children}</View>;
};
export default Card;
const Container = StyleSheet.create({
  viewStyles: {
    flex: 1,
    margin: 10,
  },
});
