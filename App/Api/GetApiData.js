import axios from 'axios';
async function GetApiData() {
  let result = null;
 const key="dc45002677a54c89a8a182306f8af069"
  const request = await axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`,
    )
    .then(response => {
      console.log('Test', response);
      result = response;
    })
    .catch(err => {
      console.log('Error is', err);
    });

  return result;
}
export default GetApiData;
