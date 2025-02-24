import axios from "axios";
import { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import ProductModal from "../../components/ProductsModal";
import { useRef } from "react";
import { Modal } from "bootstrap";
import Pagination from "../../components/Pagination";
export default function AdminProduct(){
    const [product,setProduct] = useState([]);
    const [pagination, setPagination] = useState({});
    const [type , setType] = useState('');
    const [tempProduct,setTempProduct] = useState({});
    const productBtnModal = useRef(null)
    const deleteBtnModal = useRef(null)

    const deleteProduct = async(id) =>{
        try {
            const res = await axios.delete(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/product/${id}`)
            closeDeleteModal();
            getProduct();
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    const openModal = (type,tempProduct) =>{
        setTempProduct(tempProduct);
        setType(type);
        productBtnModal.current.show();
    }
    
    const closeModal = () =>{
        productBtnModal.current.hide();
    }

    const openDeleteModal = (tempProduct) =>{
        setTempProduct(tempProduct);
        deleteBtnModal.current.show();
    }
    
    const closeDeleteModal = () =>{
        deleteBtnModal.current.hide();
    }

    useEffect(()=>{
        productBtnModal.current = new Modal('#productModal',{backdrop:'static'});
        deleteBtnModal.current = new Modal('#deleteModal',{backdrop:'static'});
        getProduct();
    },[])

    const getProduct = async(page=1) =>{
            const resProduct = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/products?page=${page}`)
            console.log(resProduct)

            setProduct(resProduct.data.products)
            setPagination(resProduct.data.pagination)
    }


    return(<>
                   <div>
                        <form action="">
                            <div className="d-lg-flex justify-content-between mb-5 align-items-center">
                                <div className="mb-lg-0 mb-5">
                                    <button  type="button" className="btn btn-primary btn-sm me-1" onClick={()=>openModal('create',{})}>+新增商品</button>
                                    <button type="button"  className="btn btn-primary btn-sm me-1 disabled">+新增分類</button>
                                    <button  type="button" className="btn btn-primary btn-sm disabled">+新增屬性</button>
                                </div>
                                <div>
                                    <input className="outline-0 ms-auto" type="search" placeholder="搜尋品項" />
                                    <button type="button" className="btn btn-sm btn-secondary">搜尋</button>
                                </div>
                            </div>
                            <div className="d-lg-flex justify-content-around ">
                                <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3">
                                    <option defaultValue={null}>主分類</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3">
                                    <option defaultValue={null}>次分類</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                  <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3">
                                    <option defaultValue={null}>次分類</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                <select className="form-select form-select-sm">
                                    <option defaultValue={null}>次分類</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                        </form>

                        <table className="table mt-5 mt-lg-0">
                            <thead>
                              <tr>
                                <th scope="col">產品名稱</th>
                                <th scope="col">庫存</th>
                                <th scope="col">價格</th>
                                <th scope="col">分類</th>
                                <th scope="col">狀態</th>

                              </tr>
                            </thead>
                            <tbody>
                                <ProductModal closeModal={closeModal} getProduct={getProduct} type={type} product={tempProduct} />
                                {tempProduct && <DeleteModal close={closeDeleteModal} txt={tempProduct.title} id={tempProduct.id} handleDelete={deleteProduct} />
                            }
                                {product.map(product=>{
                                    return (
                                        <tr className="align-middle" key={product.id}>
                                        <td scope="row">{product.title}
                                            <div>
                                                <button className=" me-1 btn btn-sm btn-secondary" type="button" onClick={()=>openModal('edit',product)}>編輯</button>
                                                {/* <!-- Button trigger modal --> */}
                                                <button className="btn btn-sm btn-danger" type="button"  onClick={()=>openDeleteModal(product)}>
                                                    刪除
                                                </button>
                                            </div>
                                        </td>
                                        <td>{product.unit}</td>
                                        <td>${product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.is_enabled ? '發佈':'未發佈'}</td>
                                      </tr>
                                    )
                                })}
                            </tbody>
                          </table>
                    </div>
                    <Pagination pagination={pagination} getProduct={getProduct} />

    </>)
}