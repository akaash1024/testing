import { useLoaderData } from "react-router-dom"
import { ProductDetail } from './ProductDetail';


export const WomenProductDetail = () => {
    const data = useLoaderData()
    

    return (
        <>
            <ProductDetail data = {data} />
        </>
    )


}