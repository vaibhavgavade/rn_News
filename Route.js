import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  DetailScreen,
  ImagePickerDemo,
  NewsHome,
  TopNavigator,
} from './AllScreen';
const AppStack = createStackNavigator(
  {
    Home: {
      screen: ImagePickerDemo,
      navigationOptions: {
        title: 'Home',
      },
    },
    setting: {
      screen: NewsHome,
      navigationOptions: {
        title: 'Settings',
        header: null,
        headerBackTitle: null,
      },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'News',
      },
    },
    Top: {
      screen: TopNavigator,
      navigationOptions: {
        title: 'Top Categories',
        headerBackTitle: null,
      },
    },
  },

  {
    initialRouteName: 'setting',
  },
);
export default createAppContainer(AppStack);
