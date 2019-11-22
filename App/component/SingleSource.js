import React from 'react';
import {Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import Card from '../component/Card';
import ApiCallHook from '../CustomHook/ApiCallHook';
import Spinner from '../../App/component/Spinner';
import Activityindicator from '../component/ActivityIndicator';
import MyOwnCard from '../component/MyOwnCard';
const SingleSource = ({nav, Source}) => {
  const [
    mydata,
    LoadmoreData,
    isLoading,
    isReferesh,
    setData,
    refershingData,
  ] = ApiCallHook(Source);

  const callFooter = () => {
    if (!setData) {
      return <Activityindicator />;
    } else {
      return <Button title="Referesh" onPress={() => refershingData()} />;
    }
  };

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <View>
        <FlatList
          ListFooterComponent={isReferesh ? null : callFooter}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.title}
          data={mydata}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => nav.navigate('Detail', {myurl: item.url})}>
              <Card>
                <MyOwnCard text={item.title} img={item.urlToImage} />
              </Card>
            </TouchableOpacity>
          )}
          onEndReachedThreshold={0.1}
          onEndReached={() => LoadmoreData()}
        />
        <Text>vaibhav</Text>
      </View>
    );
  }
};

export default SingleSource;
