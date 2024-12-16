import { useParams } from "react-router-dom"
import { CreateProductComponent } from "./CreateProductComponent";


export const ElectronicProducts = () => {
    const params = useParams();
    console.log(params)


    return (
        <CreateProductComponent params= {params.mensID} />
    )
}