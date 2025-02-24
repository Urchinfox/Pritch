import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { render } from "react-dom";
import belt from '../../assets/images/shop/belt.png';
import BIAcorset from '../../assets/images/shop/BIA-corset.png';
import Loading from "../../components/Loading";

export default function ProductDetail() {
    const [renderProduct, setRenderProduct] = useState([]);
    const { id } = useParams();
    const [size,setSize] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const getProduct = async () => {
        try {
            const resProduct = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/products`)
            console.log(resProduct.data.products)
            setRenderProduct(resProduct.data.products.filter((product) => product.id === id))

        } catch (error) {
            console.log(error)
        }
    }

    const addCartItem = async(id,qty) =>{
        const data = {
            "data": {
              "product_id": id,
              "qty": qty
            }
          }
          setIsLoading(true);
        try {
            const res = await axios.post(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`,data);
            console.log(res);
            
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }
    }

    const handleSize = (e) => {

        //非同步問題未處理
        const selectedSize = e.target.value;
        const id = renderProduct[0].id;
        // 儲存localStorage 只能是字串
        setSize([{
            id: id,
            size: selectedSize
        }]);
        console.log(selectedSize,id)
        localStorage.setItem('size', JSON.stringify(size));
    
    };
    

    useEffect(() => {
        getProduct();
    }, [])


    return (<>
        <div className="ms-lg-7 ms-3">
          {JSON.stringify(size)}
          <Loading isLoading={isLoading} />
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb fs-lg-7 fs-8">
                    {
                        renderProduct.map((item) => {
                            return(<React.Fragment key={item.id}>
                                <li className="breadcrumb-item text-gray"><a href="index.html" >首頁</a></li>
                                <li className="breadcrumb-item text-gray"><a href="#">New In</a></li>
                                <li className="breadcrumb-item text-gray"><a href="shop.html">秋冬24女裝系列</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{item.title}</li>

                            </React.Fragment>)
                        })
                    }
                </ol>
            </nav>
        </div>

        <section>
            <div className="container-fluid mb-lg-14 mb-12">
                <div className="row">

                    <div className="col-7 d-lg-block d-none">
                        <div className="row g-1">
                            {renderProduct.map((item,index) => {
                                return (<>
                                    <div className="col-6" key={index}>
                                        <img className="w-100" src={item.imagesUrl} width={100} height={100} alt="..." />
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>



                    <div className="col-12 d-block d-lg-none">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    renderProduct.imagesUrl && renderProduct.imagesUrl.map((item) => {
                                        return (<>
                                            <div className="carousel-item active">
                                                <img src={item} width="375" height="514" className="d-block w-100" alt="..." />
                                            </div>
                                        </>)
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <i className="bi bi-chevron-left text-primary fs-5"></i>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <i className="bi bi-chevron-right text-primary fs-5"></i>

                            </button>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12 mt-6 mt-lg-0">
                        <div className="mb-7">
                            {
                                renderProduct.map((item) => {
                                    return (<>
                                        <h2 className="fs-6 mb-6">{item.title}</h2>
                                        <p className="fs-7 mb-3">{item.description}</p>
                                        <span>${item.price}</span>
                                    </>)
                                })
                            }

                        </div>
                        <div>
                            <div className="mb-7">
                                <p className="fs-7 mb-3">顏色</p>
                                <div className="bg-dark" style={{ height: '24px', width: '24px' }}></div>
                            </div>
                            <label className="fs-7" htmlFor="size">尺寸</label>
                            <div className="d-flex mb-7">
                                <div className="position-relative">
                                    <select className=" size py-2 px-4 me-3" style={{ width: '164px' }}  onChange={handleSize}>
                                        <option defaultValue='單一尺寸'>單一尺寸</option>
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
                            <button className="btn btn-primary w-100" onClick={()=>addCartItem(renderProduct[0].id,1)}>Add Cart</button>
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
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
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
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
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
            <p className="fs-5 ms-lg-7 ms-3 mb-4">你可能會喜歡...</p>
            <div className="container-fluid">
                <div className="row row-cols-lg-5 row-cols-2 gy-lg-12 gy-10 gx-lg-1 gx-0 mb-lg-10 mb-6" id="shopProductCard" data-times="2">
                    <div className="col">
                        <a href={null}>
                            <div className="mb-4">
                                <img className="w-100" src={BIAcorset} width="377" height="518" alt="..." />
                            </div>
                            <div className="text-center">
                                <h2 className="fs-8">超級腰帶</h2>
                                <span className="fs-8">$2500</span>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href={null}>
                            <div className="mb-4">
                                <img className="w-100" src={belt} width="377" height="518" alt="..." />
                            </div>
                            <div className="text-center">
                                <h2 className="fs-8">超吉普腰帶</h2>
                                <span className="fs-8">$2300</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}