import { getProducts } from "./api";



export const getMoreDetails = async ({ params }) => {
    
    
    const id = params.DetailID;
    console.log(id);
    

    try {
        const res = await fetch(`https://json-server-ojru.onrender.com/products/${id}`);
        const data = res.json();
        console.log(data)
        return data;
        
    } catch (error) {
        console.error(error)
    }
}