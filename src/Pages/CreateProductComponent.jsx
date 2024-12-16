import { AiOutlinePlus } from "react-icons/ai";

import { useEffect, useState } from 'react';
import { getProducts, sorting } from './../API/api';
import { useNavigate } from "react-router-dom";




export const CreateProductComponent = ({ params }) => {
    // console.log('create Product', params)
    const proper = params && params.charAt(0).toUpperCase() + params.slice(1).toLowerCase();


    const [productData, setProductData] = useState([])
    const [sortingOption, setSortingOption] = useState("popularity");


    const getProduct = async () => {
        try {
            const res = await getProducts(params);
            setProductData(res.data)
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    }

    useEffect(() => {
        getProduct(params)
    }, [params])



    const CreateProductCard = ({ currentProduct }) => {
        const navigate = useNavigate()
        const { description, id, image, price, title, rating: { rate, count } } = currentProduct;

        const handleCardClick = () => {
            navigate(`/products/${id}`);
        };

        return (
            <div className='productCard--parent' onClick={handleCardClick} >
                <div className="product--icons">
                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" alt="" />
                </div>
                <div className='product--IMG'>
                    <img src={image} alt="" />
                </div>
                <h5>{title}</h5>


                <span>{`$${price}`}</span><br />
                <span>{`${rate}★  ${count} Ratings `}</span>
                
            </div>
        )
    }




    const sortProduct = async () => {
        try {
            const res = await sorting(params, sortingOption);
            setProductData(res.data)
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    }

    const handleSortChange = (e) => {
        setSortingOption(e.target.value);
    };

    useEffect(() => {
        sortProduct();
    }, [sortingOption]);



    return (
        <>

            <div className="product__page">
                <div className="product__page__description">
                    <h1>{`${proper} Products Online`}</h1>
                    <h5>{`${productData.length} products`}</h5>
                </div>

                <div className="product__page_funtionality--sorting">
                    <label htmlFor="sorting" style={{ color: `#D3D3D3` }}>Sort by
                        <select name="sorting" id="sorting" onChange={handleSortChange} value={sortingOption}>
                            <option value="popularity">Popularity</option>
                            <option value="asc">Price Low to High</option>
                            <option value="desc">Price Hight to Low</option>
                            <option value="newArrivals">New Arrivals</option>
                            <option value="discount">Discount</option>
                        </select>
                    </label>

                    <div className="grid--icon"><img src="https://www.tatacliq.com/src/plp/components/img/list.svg" alt="" /></div>
                </div>


                <div className="product__page__path">
                    <p>Home &gt; {proper}</p>
                </div>


                <div className="product__page__main">

                    <div className="product__page__left">

                        <div className="product__page__left--upper">
                            <div className="product__page__left--upper--left">
                                <h1>Filters</h1>
                            </div>
                            <div className="product__page__left--upper--right">
                                <span>Clear All</span>
                            </div>
                        </div>

                        <div className="product__page__left--price sub--features">
                            <div className="product__page__left--category--name">
                                <h5>Department</h5>
                            </div>

                            <div className="cutom--css">
                                {`${proper}`}
                            </div>

                        </div>



                        <div className="product__page__left--features">
                            <div className="product__page__left--category sub--features">
                                <div className="product__page__left--category--name">
                                    <h5>Category</h5>
                                </div>
                                <div className="product__page__left--category--icon">
                                    <AiOutlinePlus />
                                </div>
                            </div>



                            <div className="product__page__left--price sub--features">
                                <div className="product__page__left--category--name">
                                    <h5>Price</h5>
                                </div>
                                <div className="product__page__left--category--icon">
                                    <AiOutlinePlus />
                                </div>
                            </div>

                            <div className="product__page__left--Brands sub--features">
                                <div className="product__page__left--category--name">
                                    <h5>Brands</h5>
                                </div>
                                <div className="product__page__left--category--icon">
                                    <AiOutlinePlus />
                                </div>
                            </div>

                            <div className="product__page__left--Size sub--features">
                                <div className="product__page__left--category--name">
                                    <h5>Size</h5>
                                </div>
                                <div className="product__page__left--category--icon">
                                    <AiOutlinePlus />
                                </div>
                            </div>

                            <div className="product__page__left--Color sub--features">
                                <div className="product__page__left--category--name">
                                    <h5>Color</h5>
                                </div>
                                <div className="product__page__left--category--icon">
                                    <AiOutlinePlus />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="product__page__right">
                        <div className="productGrid">
                            {
                                productData.map((currentProduct, index) => (
                                    <CreateProductCard
                                        currentProduct={currentProduct}
                                        key={currentProduct.id}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>





        </>
    )


}