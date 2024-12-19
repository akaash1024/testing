import axios from "axios";

const api = axios.create({
  baseURL: `https://json-server-ojru.onrender.com/`,
});


export const getProducts = async (itemCategory) => {
  try {
    const response = await api.get(`/products?category=${itemCategory}`);
    const sortedProducts = response.data.sort((a, b) => b.rating.rate - a.rating.rate);
    return sortedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};



export const sorting = async (itemCategory, value) => {
  console.log(`sorting`, itemCategory, value)
  try {
    const res = await api.get(`/products?category=${itemCategory}`)
    if (value === `asc`) {
      const sortAsc = res.data.sort((a, b) => a.price - b.price)
      return sortAsc;
    }
    else if (value === `desc`) {
      const sortDesc = res.data.sort((a, b) => b.price - a.price)
      return sortDesc;
    }
    else {
      const popularity = res.data.sort((a, b) => b.rating.rate - a.rating.rate);
      return popularity;
    }

  } catch (error) {
    console.error("Error fetching products:", error);
  }


}
// ! this method have to check in near future
// export const getProducts = (itemCategory) => {
//     return api.get(`/products`, {
//         params: { category: itemCategory },
//     });
// };