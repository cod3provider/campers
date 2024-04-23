import axios from "axios";

export const PER_PAGE = 4;

export const instance = axios.create({
  baseURL: 'https://640f0b414ed25579dc43f4ef.mockapi.io/api/campers',
})
