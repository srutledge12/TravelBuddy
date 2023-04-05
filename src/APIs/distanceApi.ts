import { StringListParameter } from "aws-cdk-lib/aws-ssm";
import axios from "axios";

type Props = {
  origin: string;
  destination: string;
  travelMode: string;
  setTravelTime: React.Dispatch<React.SetStateAction<Date>>;
};



  
const distanceApi = ({
  origin,
  destination,
  travelMode,
  setTravelTime,
}: Props) => {
  const distanceAPIKey = process.env.REACT_APP_DISTANCE_API_KEY;
  const options = {
    method: "GET",
    url: "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix",
    params: {
      key: distanceAPIKey,
      origins: origin,
      destinations: destination,
      travelMode: travelMode,
      distanceUnit: "mi",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(
        response.data.resourceSets[0].resources[0].results[0].travelDuration
      );
      setTravelTime(
        new Date(response.data.resourceSets[0].resources[0].results[0].travelDuration *60000)
      );
      // const joke = response.data
      // setSetup(response.data.setup);
      // setDelivery(response.data.delivery);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default distanceApi;
