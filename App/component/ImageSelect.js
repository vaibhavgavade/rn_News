import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Images from '../Constant/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ImageSelect = ({select}) => {
  const {imgStyle} = Container;
  switch (select) {
    case 'Tech':
      return <Image style={imgStyle} source={Images.tech} />;
    case 'Bus':
      return <Image style={imgStyle} source={Images.Business} />;
    case 'Gen':
      return <Image style={imgStyle} source={Images.General} />;
    case 'sci':
      return <Image style={imgStyle} source={Images.science} />;
    case 'Ent':
      return <Image style={imgStyle} source={Images.entertain} />;
    case 'Sport':
      return <Image style={imgStyle} source={Images.sport} />;
    case 'Healh':
      return <Image style={imgStyle} source={Images.health} />;
    default:
      return (
        <View>
          <Text>Null</Text>
        </View>
      );
  }
};
export default ImageSelect;

const Container = StyleSheet.create({
  imgStyle: {
    height: 50,
    width: 50,
    marginTop: 15,
    alignSelf: 'center',
    
  },
});
