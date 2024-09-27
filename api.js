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

export const deleteData = async (way, id) => {
  try {
    const response = await axios.delete(
      `https://${API_KEY}.${URL}${way}/${id}`,

    );
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};

export const editData = async (way, id, newObj) => {
  try {
    const response = await axios.put(`https://${API_KEY}.${URL}${way}/${id}`, newObj);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
}
