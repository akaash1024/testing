import axios from "axios";
const api = axios.create({
    baseURL: `http://localhost:3000`,
})
export const getProducts = (itemCategory) => {
    // console.log(`from here`, itemCategory)
    return api.get(`/products?category=${itemCategory}&_sort=-rating.rate`)
}
export const sorting = (itemCategory, value) => {
    console.log(`sorting`, itemCategory)
    
    if (value === `asc`) {
        return api.get(`/products?category=${itemCategory}&_sort=price`)
    }
    else if (value === `desc`) {
        return api.get(`/products?category=${itemCategory}&_sort=-price`)
    }
    else {
        return api.get(`/products?category=${itemCategory}&_sort=-rating.rate`)
    }
}
// ! this method have to check in near future
// export const getProducts = (itemCategory) => {
//     return api.get(`/products`, {
//         params: { category: itemCategory },
//     });
// };