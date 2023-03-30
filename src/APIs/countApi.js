import countapi from "countapi-js";

const countApi = () => {
  countapi.visits("global").then((result) => {
    console.log(result.value);
  });
};

export default countApi;
