 const API_KEY = "66f06d42f2a8bce81be5e404";
 const URL = "mockapi.io/chat/"

export const getData = async (data) => await axios.get(`https://${API_KEY}.${URL}${data}`);