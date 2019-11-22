import {
  TechnologyScreen,
  BusinessScreen,
  GeneralScreen,
  ScienceScreen,
  EntertainmentScreen,
  SportScreen,
  HealthScreen,
} from './TopNavigatorIndex';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Font from './App/Constant/Font';
const ToPNavigator = createMaterialTopTabNavigator(
  {
    Technology: TechnologyScreen,
    Business: BusinessScreen,
    General: GeneralScreen,
    science: ScienceScreen,
    Entertainment: EntertainmentScreen,
    Sports: SportScreen,
    Health: HealthScreen,
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      scrollEnabled: true,
      style: {
        backgroundColor: '#66cdaa',
        opacity: 0.8,
      },
      labelStyle: {
        fontSize: 15,
        fontFamily: Font.boldSans,
        color: '#000000',
      },
      tabStyle: {
        width: 160,
      },
    },
  },
);
export default ToPNavigator;
