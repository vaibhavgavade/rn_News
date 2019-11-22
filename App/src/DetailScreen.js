import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Spinner from '../component/Spinner';

const DetailScreen = ({navigation}) => {
  const urlis = navigation.getParam('myurl');
  // const [state, stateChange] = useState(true);
  hideSpinner = () => {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: urlis}}
        renderLoading={() => hideSpinner()}
        startInLoadingState={true}
      />
    </View>
  );
};

export default DetailScreen;
