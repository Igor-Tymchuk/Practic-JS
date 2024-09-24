const API_KEY = "66f06d42f2a8bce81be5e404";
const URL = "mockapi.io/chat/";

export const getData = async (data) =>
  await axios.get(`https://${API_KEY}.${URL}${data}`);

export const addNewUser = async (way, newUser) => {
  try {
    const response = await axios.post(
      `https://${API_KEY}.${URL}${way}`,
      newUser
    );
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};
