
import productBanner from '../../assets/images/home/product-banner.jpeg'
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading';
// import bustierBelt5 from '../../assets/images/home/bustier-belt-5.png';
// import bustierBelt6 from '../../assets/images/home/bustier-belt-6.png';


export default function Products() {
    const [hover, setHover] = useState();
    const [product, setProduct] = useState([]);
    const [pagination, setPagination] = useState({});
    const [isLoading, setIsloading] = useState(false)

    const getProduct = async (page = 1) => {
        try {
            setIsloading(true)
            const resProduct = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/products?page=${page}`)
            setProduct(resProduct.data.products)
            console.log(resProduct)
            setPagination(resProduct.data.pagination)

        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])



    return (<>
        <section className="shop-banner mb-lg-13 mb-10">
            <div className="banner mb-lg-12 mb-6">
                <img width="1920" height="500" src='https://img-app-styleplus-ws.freetls.fastly.net/contents/banner/84.jpg?20250307092545' alt="..." />
            </div>
            <div className="px-lg-7 px-3">
                <h2 className="mb-lg-6 mb-4 fs-lg-1 fs-5">Women's Collection</h2>
                <div className="fs-lg-6 fs-7">
                    <p>Explore PRITCH's latest Fall/Winter 24 Women's Collection, inspired by Italian pioneer artist Lavinia Fontana, paying tribute to her courage in breaking societal norms.</p>
                    <p>This collection celebrates the value of independence and encourages everyone to be bold in embracing their true selves</p>
                </div>
            </div>
        </section>

        <main className="shop-product mb-lg-14 mb-11">
            <div className="px-7 d-block d-lg-flex justify-content-between mb-6 mb-lg-0">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb fs-lg-7 fs-8">
                        <li className="breadcrumb-item text-gray"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item text-gray"><a href="#">New In</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Women's Collection</li>
                    </ol>
                </nav>
                <div className="text-end fs-lg-7 fs-8">
                    <button className="border-0 bg-transparent"><i className="bi bi-sort-down me-1"></i>Sort</button>
                    <button className="border-0 bg-transparent"><i className="bi bi-funnel-fill me-1"></i>Filter</button>
                </div>
            </div>
            <div className="container-fluid ">
                <div className="row row-cols-lg-5 row-cols-2 gy-lg-12 gy-10 gx-lg-1 gx-0 mb-lg-10 mb-6" data-times="3">
                    {
                        product.map((item) => {
                            return (
                                <div className="col" key={item.id}>
                                    <Link to={`/products/${item.id}`}>
                                        <div className="mb-4 shop-product-test" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                                            {
                                                <img src={item.imageUrl} width={377} height={518} alt="" />
                                            }
                                        </div>
                                        <div className="text-center">
                                            <h2 className="fs-8">{item.title}</h2>
                                            <span className="fs-8">${item.price}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }


                </div>
                <nav>
                    <Pagination pagination={pagination} getProduct={getProduct} type='productPage' />
                </nav>
            </div>
        </main>
        <Loading isLoading={isLoading} />

    </>)
}