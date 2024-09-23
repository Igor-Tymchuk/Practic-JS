 const API_KEY = "66f06d42f2a8bce81be5e404";
 const URL = "mockapi.io/chat/"

export const getData = (data) => {
axios.get(`https://${API_KEY}.${URL}${data}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}
