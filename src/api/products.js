// import axios from 'axios'
// const API = 'https://fakestoreapi.com/products';

// export const fetchProducts = async() =>{
//   const res = await axios.get(API);
//   return res.data
// }
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

// Fetch all products
export const fetchProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
