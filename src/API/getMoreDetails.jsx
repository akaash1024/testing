import { getProducts } from "./api";



export const getMoreDetails = async ({ params }) => {
    
    
    const id = params.DetailID;
    console.log(id);
    

    try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = res.json();
        console.log(data)
        return data;
        
    } catch (error) {
        console.error(error)
    }
}