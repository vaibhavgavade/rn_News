import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Activityindicator = () => {
  const {viewStyle} = Container;
  return (
    <View style={viewStyle}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export default Activityindicator;
const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
