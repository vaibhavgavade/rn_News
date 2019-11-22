import React from 'react';
import {Text, View, Image} from 'react-native';
import Font from '../Constant/Font';

const MyOwnCard = ({text, img}) => {
  const image =
    'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#afeeee',
        opacity: 0.9,
        shadowOpacity: 10,
        shadowColor: '#00bfff',
        borderRadius: 8,
      }}>
      <Image
        style={{height: 80, width: 50, flex: 2, margin: 8, borderRadius: 8}}
        source={{
          uri: img == null ? image : img,
        }}
      />
      <Text
        style={{
          flex: 3,
          flexWrap: 'wrap',
          marginLeft: 10,
          marginTop: 5,
          fontFamily: Font.regularSans,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default MyOwnCard;
