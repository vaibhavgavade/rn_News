import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = () => {
  const {viewStyle, wrapper} = Container;
  return (
    <View style={viewStyle}>
      <View style={wrapper}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    </View>
  );
};

export default Spinner;
const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#da70d6',
    height: 150,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
