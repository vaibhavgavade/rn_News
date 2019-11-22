import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Button = () => {
  const {viewStyle} = Container;
  return (
    <View style={viewStyle}>
      <Text>Test</Text>
    </View>
  );
};
export default Button;
const Container = StyleSheet.create({
  viewStyle: {
    height: 41,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#da70d6',
    borderRadius: 5,
    margin: 10,
  },
});
