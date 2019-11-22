import React, {useState, useEffect} from 'react';
import GetTechnologyApi from '../Api/GetTechnologyApi';
export default ApiCallHok = query => {
  const [data, changedata] = useState([]);
  const [page, changepage] = useState(1);
  const [isLoading, loaderStateChange] = useState(true);
  const [isReferesh, setReferesh] = useState(false);
  const [setData, chageSetData] = useState(false);

  useEffect(() => {
    ApiCalling();
  }, []);

  const ApiCalling = () => {
    GetTechnologyApi(query, page)
      .then(res => {
        changedata([...data, ...res]);
        changepage(page + 1);
        loaderStateChange(false);
      })
      .catch(err => {
        console.log('ApicallHook error', err);
      });
  };

  const LoadmoreData = () => {
    console.log('Load more data called');
    page < 5 ? ApiCalling() : chageSetData(true);
  };

  const refershingData = () => {
    ApiCalling();
    changedata([]);
    changepage(1);
    setReferesh(true);
  };

  return [data, LoadmoreData, isLoading, isReferesh, setData, refershingData];
};
