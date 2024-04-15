import axios from "axios";

const PER_PAGE = 4;

axios.defaults.baseURL = 'https://640f0b414ed25579dc43f4ef.mockapi.io/api/campers';
axios.defaults.params = {
  limit: PER_PAGE,
  page: 1,
}

export const getCampers = async () => {
  const {data} = await axios("/");
  return data;
}

export const getCamperById = async(id) => {
  const res = await axios(`/${id}`);
  console.log(res);
  return res;
}
