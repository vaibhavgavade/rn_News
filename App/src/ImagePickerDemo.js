import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import CameraImgChoose from '../component/CameraImgChoose';
class ImagePickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: null,
      fileAnotherPath: null,
      isImgChose: true,
    };
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri,
        };
        this.setState({
          filepath: source,
        });
      }
    });
  };

  chooseCamera = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri,
        };
        this.setState({
          fileAnotherPath: source,
        });
      }
    });
  };

  render() {
    const {imgStyle, viewStyle} = Container;
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <TouchableOpacity
          onPress={this.chooseImage}
          style={{
            backgroundColor: 'red',
            height: 41,
            width: 100,
            marginTop: 100,
          }}>
          <View style={viewStyle}>
            {this.state.filepath === null ? (
              <Text>vaibhav</Text>
            ) : (
              <Image style={imgStyle} source={this.state.filepath} />
            )}
          </View>
        </TouchableOpacity>
        <View style={{position: 'relative', top: 200}}>
          <TouchableOpacity
            onPress={this.chooseCamera}
            style={{
              backgroundColor: 'red',
              height: 41,
              width: 200,
              alignSelf: 'center',
            }}>
            <Text>choose photo Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default ImagePickerDemo;
const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
  },
  imgStyle: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',
  },
});
