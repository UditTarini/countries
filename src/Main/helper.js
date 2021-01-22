let baseUrl = "https://restcountries.eu/rest/v2/";

export const getData = async (param) => {
  let url = `${baseUrl + param}`;
  console.log(url);
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return {error: error};
    });
};
