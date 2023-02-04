import {externalAPI, serverRoutes} from './const';

var jokeData = [];
export async function generateJoke() {
  const response = await fetch(externalAPI.GET_EXT_JOKE);
  console.log(response.status);
  let data = await response.json();
//   jokeData.push(data);
  if (response.status == 200) {
    // console.log(jokeData);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var rawBody = JSON.stringify(data);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: rawBody
    };
    return fetch(serverRoutes.Jokes, requestOptions)
    .then(response => response.json())
    .then(json => console.log(json.message))
    .catch(error => console.log({error}))
  }
}

export async function getAllJokes(){
    return await fetch(serverRoutes.Jokes)
    .then(response => response.json())
    .then(data => jokeData.push(data))
}