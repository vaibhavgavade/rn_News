import axios from 'axios';
async function GetTechnologyApi(query, page) {
  let allresult = null;
  const key = 'dc45002677a54c89a8a182306f8af069';
  const ApiRequest = await axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&page=${page}&apiKey=${key}`,
    )
    .then(data1 => {
      allresult = data1.data.articles;
    })
    .catch(err => {
      console.log("It's Error", err);
    });
  return allresult;
}
export default GetTechnologyApi;
