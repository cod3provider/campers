import axios from "axios";

axios.defaults.baseURL = 'https://640f0b414ed25579dc43f4ef.mockapi.io/api/campers';

export const getCampers = async () => {
  const {data} = await axios();
  console.log(data)
  return data;
}
