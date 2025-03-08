import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { Modal } from 'bootstrap';
import OrderInfoModal from "../../components/orderInfoModal";
import Pagination from "../../components/Pagination";

export default function Order() {
    const [order, setOrder] = useState([]);
    const [orderInfo, setOrderInfo] = useState();
    const [orderId, setOrderId] = useState();
    const [pagination, setPagination] = useState();
    const orderBtnModal = useRef(null);

    const getOrder = async (page = 1) => {

        try {
            const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/orders?page=${page}`)
            setOrder(res.data.orders)
            const orderInformation = res.data.orders
                .map((item) => Object.values(item.products))
                .flat();
            setOrderInfo(orderInformation)
            setPagination(res.data.pagination)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteOrder = async (id) => {
        console.log(id)
        try {
            const res = await axios.delete(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/order/${id}`)
            console.log(res);
            getOrder();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAllOrder = async () => {
        try {
            const res = await axios.delete(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/orders/all`)
            getOrder()
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const timeTransfer = (stamp) => {
        const date = new Date(stamp * 1000);
        return date.toLocaleDateString();
    }

    const openOderModal = (infoId) => {
        orderBtnModal.current.show()
        setOrderId(infoId);
    }

    const closeOderModal = () => {
        orderBtnModal.current.hide();
    }

    useEffect(() => {
        getOrder()
        orderBtnModal.current = new Modal('#orderModal', { backdrop: 'static' });

    }, [])

    return (<>
        <div className="tab-pane" >
            <div>
                <form action="">
                    <div className="">
                        {/* <!-- Button trigger modal --> */}
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="statistic">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header border-0">
                                        <h5 className="modal-title" id="exampleModalLabel">銷售統計</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-body">
                                            <div className="text-center">圓餅圖</div>
                                            <div className="text-end">
                                                <select className="">
                                                    <option defaultValue={null}>分類</option>
                                                    <option value="1">上衣</option>
                                                    <option value="2">裙子</option>
                                                    <option value="3">褲子</option>
                                                </select>
                                            </div>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">訂單</th>
                                                        <th scope="col">狀態</th>
                                                        <th scope="col">金額</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="align-middle">
                                                        <td scope="row">
                                                            {/* <!-- Button trigger modal --> */}
                                                            <small><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkOrder">
                                                                查看
                                                            </a></small>
                                                            {/* <!-- Modal --> */}
                                                            <div className="modal fade">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header border-0">
                                                                            <h5 className="modal-title" id="exampleModalLabel">訂單編號：#001</h5>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <div className="modal-body">
                                                                                <p>產品名稱：夢幻上衣 * 1</p>
                                                                                <p>寄送地址：xx市 xx鄉 xx路 xx號 x樓</p>
                                                                                <p>總計：1500$</p>
                                                                                <p>付款方式：信用卡</p>
                                                                                <p>狀態：已出貨</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer border-0">
                                                                            <button type="button" className="btn btn-primary">編輯</button>
                                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>#001</td>
                                                        <td>已出貨</td>
                                                        <td>1500$</td>

                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td scope="row">
                                                            {/* <!-- Button trigger modal --> */}
                                                            <small><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkOrder2">
                                                                查看
                                                            </a></small>
                                                            {/* <!-- Modal --> */}
                                                            <div className="modal fade">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header border-0">
                                                                            <h5 className="modal-title" id="exampleModalLabel">訂單編號：#002</h5>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <p>產品名稱：迷人洋裝 * 1</p>
                                                                            <p>寄送地址：xx市 xx鄉 xx路 xx號 x樓</p>
                                                                            <p>總計：3000$</p>
                                                                            <p>付款方式：信用卡</p>
                                                                            <p>狀態：付款成功</p>
                                                                        </div>
                                                                        <div className="modal-footer border-0">
                                                                            <button type="button" className="btn btn-primary">編輯</button>
                                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>#002</td>
                                                        <td>付款成功</td>
                                                        <td>3000$</td>

                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    <div className="modal-footer border-0">
                                        <button type="button" className="btn btn-primary">編輯</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-flex d-block justify-content-around align-items-center">
                            <div>
                                <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3">
                                    <option defaultValue={null}>2024</option>
                                    <option value="2">2023</option>
                                    <option value="3">2022</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3 ">
                                    <option value="Mon" defaultValue={null}>選擇月份</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3 ">
                                    <option defaultValue={null}>選擇日期</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div>
                                <input className="outline-0 w-100" type="search" placeholder="Search Order" />
                            </div>
                        </div>
                        <div className="text-end mt-4">
                            <button className="btn btn-primary btn-sm me-1" type="button" data-bs-toggle="modal" data-bs-target="#statistic">Sales Statistics</button>
                            <button type="button" className="btn btn-primary btn-sm">Search</button>
                        </div>
                    </div>
                </form>
                {
                    order.length === 0 ?
                        <div className="text-center">No orders at the moment.</div>
                        :
                        <table className="table mt-5 mt-lg-0">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <small>
                                            <a className="text-decoration text-underline" onClick={deleteAllOrder}>
                                                <u>Delete All</u>
                                            </a>
                                        </small>
                                    </th>
                                    <th scope="col">Orders</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order && order.map((item, index) => {
                                    return (
                                        <tr className="align-middle" key={index + 1}>
                                            <td scope="row">
                                                <small><a className="text-decoration mb-1" onClick={() => openOderModal(item)}>
                                                    <u>View</u>
                                                </a></small>
                                                <br />
                                                <small><a className="text-decoration text-underline" onClick={() => { deleteOrder(item.id) }}>
                                                    <u>Delete</u>
                                                </a></small>

                                            </td>
                                            <td>#00{index + 1}</td>
                                            <td>{timeTransfer(item.create_at)}</td>
                                            <td>{item.is_paid ? 'paid' : 'Unpaid'}</td>
                                            <td>${item.total}</td>
                                        </tr >
                                    )
                                })}

                            </tbody>
                        </table>
                }


                <OrderInfoModal close={closeOderModal} orderId={orderId} />

            </div>
        </div >
        <div className="mb-3">
            {
                order.length > 0 && <Pagination pagination={pagination} getOrder={getOrder} type='orderPage' />
            }

        </div>
    </>)
}