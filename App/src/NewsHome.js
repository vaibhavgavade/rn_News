import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from '../component/Card';
import CardSection from '../component/CardSection';
import Font from '../Constant/Font';
import GetApiData from '../Api/GetApiData';
import Spinner from '../component/Spinner';
import MyOwnCard from '../component/MyOwnCard';
import ImageCard from '../component/ImageCard';
import TextCard from '../component/TextCard';
import Images from '../Constant/Images';

const NewsHome = ({navigation}) => {
  const [state, getState] = useState();
  const [isloading, chaneLoaderState] = useState('true');
  const [myday, myDate] = useState();
  useEffect(() => {
    Apicalling();
    GetAllday();
  }, []);

  const GetAllday = () => {
    var month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    var days = new Array();
    days[0] = 'sunday';
    days[1] = 'Monday';
    days[2] = 'Tuesday';
    days[3] = 'Wensday';
    days[4] = 'Thursday';
    days[5] = 'friday';
    days[6] = 'Saturday';

    var today = new Date();
    var m = month[today.getMonth()];
    var d = days[today.getDay()];
    var date = d + ',  ' + m + '  ' + today.getDate() + '';

    myDate(date);
  };
  const Apicalling = () => {
    return GetApiData().then(res => {
      getState(res.data.articles);
      chaneLoaderState(false);
    });
  };

  const defaultImage = () => {
    return <Image source={Images.tech} />;
  };
  const {viewStyle, imgStyle, textStyle} = Container;
  if (isloading) {
    return <Spinner />;
  } else {
    return (
      <ScrollView>
        <View style={viewStyle}>
          <Text
            style={{
              fontFamily: Font.boldSans,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {myday}
          </Text>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={state.slice(0, 5)}
            keyExtractor={(item, index) => item.title.toString()}
            renderItem={({item}) => (
              <ImageCard>
                <Image
                  style={{width: 250, height: 300, borderRadius: 15}}
                  source={{
                    uri:
                      item.urlToImage == null
                        ? defaultImage()
                        : item.urlToImage,
                  }}
                />
                <TextCard>
                  <Text style={{fontFamily: Font.regularSans, fontSize: 18}}>
                    {item.title}
                  </Text>
                </TextCard>
              </ImageCard>
            )}
          />
          <Text
            style={{
              fontFamily: Font.Aldrich,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Top categories
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardSection
              tech="Technology"
              imgName="Tech"
              onPress={() => navigation.navigate('Technology')}
              color="#008b8b"
            />
            <CardSection
              tech="Business"
              imgName="Bus"
              onPress={() => navigation.navigate('Business')}
              color="#4682b4"
            />
            <CardSection
              tech="General"
              imgName="Gen"
              onPress={() => navigation.navigate('General')}
              color="#663399"
            />
            <CardSection
              tech="science"
              imgName="sci"
              onPress={() => navigation.navigate('science')}
              color="#228b22"
            />
            <CardSection
              tech="Entertain"
              imgName="Ent"
              onPress={() => navigation.navigate('Entertainment')}
              color="#90ee90"
            />
            <CardSection
              tech="Sports"
              imgName="Sport"
              onPress={() => navigation.navigate('Sports')}
              color="#6495ed"
            />
            <CardSection
              tech="Health"
              imgName="Healh"
              onPress={() => navigation.navigate('Health')}
              color="#ff69b4"
            />
          </ScrollView>
          <Text
            style={{
              fontFamily: Font.Aldrich,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Latest News
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.title.toString()}
            data={state.slice(5)}
            renderItem={({item}) => (
              <Card>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {myurl: item.url})
                  }>
                  <MyOwnCard text={item.title} img={item.urlToImage} />
                </TouchableOpacity>
              </Card>
            )}
          />
        </View>
      </ScrollView>
    );
  }
};
export default NewsHome;
const Container = StyleSheet.create({
  viewStyle: {
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
  },
  imgStyle: {
    height: 80,
    width: 50,
    flex: 2,
  },
  textStyle: {
    marginEnd: 10,
  },
});
