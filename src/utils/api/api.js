import axios from "axios";

export const PER_PAGE = 4;

axios.defaults.baseURL = 'https://640f0b414ed25579dc43f4ef.mockapi.io/api/campers';
axios.defaults.params = {
  limit: PER_PAGE,
}

export const getCampers = async (page = 1) => {
  const {data} = await axios("/");
  console.log(data)
  return data;
}

export const getCamperById = async(id) => {
  const {data} = await axios(`/${id}`);
  console.log(data);
  return {data};
}
