import axios from "axios";

type Props = {
  setSetup: React.Dispatch<React.SetStateAction<string>>;
  setDelivery: React.Dispatch<React.SetStateAction<string>>;
};

const flightAPI = ({setSetup, setDelivery}: Props)=> {
  const options = {
    method: 'GET',
    url: 'https://v2.jokeapi.dev/joke/Programming',
    // params: {APIKEY: 'test'},
    // headers: {
    //   'X-RapidAPI-Key': '60f60eb3b2msh00951111c52354fp1d3118jsnbea136101ae7',
    //   'X-RapidAPI-Host': 'tsa-wait-times.p.rapidapi.com'
    // }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    const joke = response.data
    setSetup(response.data.setup);
    setDelivery(response.data.delivery);
  }).catch(function (error) {
    console.error(error);
  });
}

export default flightAPI;
