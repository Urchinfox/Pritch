import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { cartHint } from "../../slices/cartMessageSlice";


export default function ProductDetail() {
    const extraImg = [
        {
            id: '-OLSgc4Ip85aYamboMc7',
            images: [
                {
                    src: 'https://shirai.itembox.design/product/153/000000015305/000000015305-03-l.jpg?t=20250317111949', alt: 'Image 1'
                },
                {
                    src: 'https://shirai.itembox.design/product/153/000000015305/000000015305-02-l.jpg?t=20250317111949', alt: 'Image 2'
                },
                {
                    src: 'https://shirai.itembox.design/product/153/000000015305/000000015305-05-l.jpg?t=20250317111949', alt: 'Image3'
                }
            ]
        },
        {
            id: "-OLT7NfB3-nkFRrjQCd4",
            images: [
                { src: 'https://shirai.itembox.design/product/150/000000015045/000000015045-02-l.jpg?t=20250317111949', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/150/000000015045/000000015045-01-l.jpg?t=20250317111949', alt: 'Design 2' },
                {
                    src: 'https://shirai.itembox.design/product/150/000000015045/000000015045-03-l.jpg?t=20250317111949', alt: 'Design 2'
                },
            ]
        },
        {
            id: "-OLT6VtgYyGYWY8ZR9yE",
            images: [
                { src: 'https://shirai.itembox.design/product/119/000000011902/000000011902-01-l.jpg?t=20250317111949', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/119/000000011902/000000011902-13-l.jpg?t=20250317111949', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSwYdO8bST22YalL7A",
            images: [
                { src: 'https://shirai.itembox.design/product/150/000000015015/000000015015-02-l.jpg?t=20250317111949', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/150/000000015015/000000015015-06-l.jpg?t=20250317111949', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSlOn4u9WL05IGWgiI",
            images: [
                { src: 'https://shirai.itembox.design/product/150/000000015011/000000015011-05-l.jpg?t=20250317111949', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/150/000000015011/000000015011-07-l.jpg?t=20250317111949', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSkpAn4Dwhs-lJSYNA",
            images: [
                { src: 'https://shirai.itembox.design/product/147/000000014728/000000014728-06-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/147/000000014728/000000014728-01-s.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSkIhprCCzggUXe3h6",
            images: [
                { src: 'https://shirai.itembox.design/product/138/000000013849/000000013849-06-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/138/000000013849/000000013849-01-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSjg2dylNT_G26xshC",
            images: [
                { src: 'https://shirai.itembox.design/product/150/000000015048/000000015048-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/150/000000015048/000000015048-07-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSj4Ex7nV5r8AfWsvP",
            images: [
                { src: 'https://shirai.itembox.design/product/147/000000014748/000000014748-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/147/000000014748/000000014748-05-l.jpg?t=20250318170753', alt: 'Design 2' },
                { src: 'https://shirai.itembox.design/product/147/000000014748/000000014748-06-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSht6F_-Yn6uhcUZF4",
            images: [
                { src: 'https://shirai.itembox.design/product/119/000000011915/000000011915-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/119/000000011915/000000011915-03-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLShQ1L9WlI5O-qMNzK",
            images: [
                { src: 'https://shirai.itembox.design/product/153/000000015304/000000015304-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/153/000000015304/000000015304-04-l.jpg?t=20250318170753', alt: 'Design 2' },
                { src: 'https://shirai.itembox.design/product/153/000000015304/000000015304-03-l.jpg?t=20250318170753', alt: 'Design 2' },
                { src: 'https://shirai.itembox.design/product/153/000000015304/000000015304-05-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSfdarE1r-RC4XXeY7",
            images: [
                { src: 'https://shirai.itembox.design/product/150/000000015023/000000015023-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/150/000000015023/000000015023-05-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLSdsfljdyHRgCHKPVb",
            images: [
                { src: 'https://shirai.itembox.design/product/148/000000014885/000000014885-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/148/000000014885/000000014885-07-l.jpg?t=20250318170753', alt: 'Design 2' },
                { src: 'https://shirai.itembox.design/product/148/000000014885/000000014885-09-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },
        {
            id: "-OLIkqa9n1LFssKlNDp1",
            images: [
                { src: 'https://shirai.itembox.design/product/150/000000015019/000000015019-01-l.jpg?t=20250318170753', alt: 'Design 1' },
                { src: 'https://shirai.itembox.design/product/150/000000015019/000000015019-04-l.jpg?t=20250318170753', alt: 'Design 2' },
            ]
        },










    ]
    const [renderProduct, setRenderProduct] = useState([]);
    const { id } = useParams();
    const [size, setSize] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const getProduct = async () => {
        try {
            const resProduct = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/products/all`)
            setRenderProduct(resProduct.data.products.filter((product) => product.id === id))
            const productId = resProduct.data.products.filter((product) => product.id === id)
            const productImg = extraImg.filter(item => item.id === productId[0].id)
            setImages(productImg[0]?.images)


        } catch (error) {
            console.log(error)
        }
    }

    const getCartItem = async () => {
        try {
            const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`);
            dispatch(cartHint(res.data.data.carts))

        } catch (error) {
            console.log(error)
        }

    }

    const addCartItem = async (id, qty) => {
        const data = {
            "data": {
                "product_id": id,
                "qty": qty
            }
        }
        setIsLoading(true);
        try {
            await axios.post(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`, data);
            getCartItem();

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }


    const handleSize = (e) => {

        const selectedSize = e.target.value;
        const id = renderProduct[0].id;
        setSize([{
            id: id,
            size: selectedSize
        }]);
        localStorage.setItem('size', JSON.stringify(size));

    };


    useEffect(() => {
        getProduct();
    }, [id])


    return (<>
        <div className="ms-lg-7 ms-3">
            <Loading isLoading={isLoading} />
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb fs-lg-7 fs-8">
                    {
                        renderProduct?.map((item) => {
                            return (<React.Fragment key={item.id}>
                                <li className="breadcrumb-item text-gray" href="index.html" >Home</li>
                                <li className="breadcrumb-item text-gray" href="#">New In</li>
                                <li className="breadcrumb-item text-gray" href="shop.html">Women&apos;s Collection</li>
                                <li className="breadcrumb-item active">{item.title}</li>
                            </React.Fragment>)
                        })
                    }
                </ol>
            </nav>
        </div>

        <section>
            <div className="container-fluid mb-lg-14 mb-12">
                <div className="row">
                    <div className="col-lg-6 col-12 ">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="row g-1">
                                    {images && images.map((item, index) => {
                                        return (
                                            <div
                                                className={`carousel-item col-6 ${index === 0 ? 'active' : ''}`}
                                                key={index}
                                            >
                                                <img className="w-100" src={item.src} width={100} height={100} alt={item.alt} />
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="fs-4"><i className="bi bi-arrow-left-square"></i></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="fs-4" ><i className="bi bi-arrow-right-square"></i></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 mt-6 mt-lg-0">
                        <div className="mb-7">
                            {
                                renderProduct.map((item, index) => {
                                    return (<React.Fragment key={index}>
                                        <h2 className="fs-6 mb-6">{item.title}</h2>
                                        <p className="fs-7 mb-3">{item.description}</p>
                                        <span>${item.price}</span>
                                    </React.Fragment>)
                                })
                            }

                        </div>
                        <div>
                            <div className="mb-7">
                                <p className="fs-7 mb-3">Color</p>
                                <div className="bg-dark" style={{ height: '24px', width: '24px' }}></div>
                            </div>
                            <label className="fs-7" htmlFor="size">Size</label>
                            <div className="d-flex mb-7">
                                <div className="position-relative">
                                    <select className=" size py-2 px-4 me-3" style={{ width: '164px' }} onChange={handleSize}>
                                        <option defaultValue='Choose Size'>Choose Size</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                    <div className="triangle"></div>
                                </div>


                                {/* <span className="size-amount position-relative py-2 px-4 text-center border border-primary" style={{ width: '164px' }} id="productAmount"><span className="digit">1</span>
                                    <i className="position-absolute bi bi-plus-lg translate-middle-y"></i>
                                    <i className="position-absolute bi bi-dash-lg translate-middle-y"></i>
                                </span> */}
                            </div>
                            <button className="btn btn-primary w-100" onClick={() => addCartItem(renderProduct[0].id, 1)}>Add Cart</button>
                        </div>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button accordion-btn-delete bg-transparent border-primary border-1 border-bottom outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        Product Detail
                                        <i className="bi bi-plus-lg ms-auto toggle-icon"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>{renderProduct[0]?.content}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button accordion-btn-delete  collapsed bg-transparent border-primary border-1 border-bottom outline-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        Shipping Info
                                        <i className="bi bi-plus-lg ms-auto toggle-icon"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p><strong>Delivery Time</strong> : Estimated delivery within 3-5 business days.
                                            (Note: Delivery time does not include weekends or public holidays.)</p>
                                        <p>  Shipping Methods:

                                            Standard Shipping: Delivery by local courier, typically within 3-5 business days.
                                            Express Shipping: Faster delivery within 1-2 business days, additional charges may apply</p>
                                        <p>Standard shipping fee: NT$100.</p>
                                        <p>Express shipping fee: NT$200.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button accordion-btn-delete collapsed bg-transparent border-primary border-1 border-bottom outline-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        Contact us
                                        <i className="bi bi-plus-lg ms-auto toggle-icon"></i>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Tel：+886 2 2256 1234</li>
                                            <li>Email：info@pritch.com</li>
                                            <li>Please refer to <a href="#"><u>Contact us</u></a> for more information</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <p className="fs-5 ms-lg-7 ms-3 mb-4">STAFF SNAP</p>
            <div className="container-fluid">
                <div className="row row-cols-lg-5 row-cols-2 gy-lg-12 gy-10 gx-lg-1 gx-0 mb-lg-10 mb-6" id="shopProductCard" data-times="2">
                    <div className="col">
                        <a href={null}>
                            <div className="mb-4">
                                <img className="w-100" src='https://video.visumo.jp/image/e4080400-170c-4cc2-9b5f-595fce145b54/0d7f7ade-e1c3-44da-bebf-82500b012c73/0d7f7ade-e1c3-44da-bebf-82500b012c73-large.jpg' width="377" height="518" alt="..." />
                            </div>

                        </a>
                    </div>
                    <div className="col">
                        <a href={null}>
                            <div className="mb-4">
                                <img className="w-100" src='https://video.visumo.jp/image/e4080400-170c-4cc2-9b5f-595fce145b54/d5ef770a-7f0e-400f-aa91-1f0eca9be0aa/d5ef770a-7f0e-400f-aa91-1f0eca9be0aa-large.jpg' width="377" height="518" alt="..." />
                            </div>

                        </a>
                    </div>
                    <div className="col">
                        <a href={null}>
                            <div className="mb-4">
                                <img className="w-100" src='https://video.visumo.jp/image/e4080400-170c-4cc2-9b5f-595fce145b54/713fdc1c-1126-4573-ab41-1d2afbd02903/713fdc1c-1126-4573-ab41-1d2afbd02903-large.jpg' width="377" height="518" alt="..." />
                            </div>

                        </a>
                    </div>
                    <div className="col">
                        <a href={null}>
                            <div className="mb-4">
                                <img className="w-100" src='https://video.visumo.jp/image/e4080400-170c-4cc2-9b5f-595fce145b54/2d3bc768-e737-4284-b799-68947b2b03e4/2d3bc768-e737-4284-b799-68947b2b03e4-large.jpg' width="377" height="518" alt="..." />
                            </div>

                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}