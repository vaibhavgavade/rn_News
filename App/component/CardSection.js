import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImageSelect from './ImageSelect';
import Font from '../Constant/Font';

const CardSection = ({tech, imgName, onPress, color}) => {
  const {viewStyle, imgStyle} = Container;
  return (
    <View style={[viewStyle, {backgroundColor: color}]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{fontFamily: Font.boldSans, fontSize: 16}}>{tech}</Text>
        <ImageSelect select={imgName} />
      </TouchableOpacity>
    </View>
  );
};

export default CardSection;
const Container = StyleSheet.create({
  viewStyle: {
    margin: 10,
    height: 120,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginTop: 10,
  },
});
