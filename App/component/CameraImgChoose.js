import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class cameraImgChoose extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filepath: null,
    };
  }

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
          filepath: source,
        });
      }
    });
  };

  render() {
    return <View>{this.chooseCamera}</View>;
  }
}

export default cameraImgChoose;
