import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
    const { id } = useParams();
    const [order, setOrder] = useState();
    const [user, setUser] = useState();
    const navigate = useNavigate()


    const getOrder = async (id) => {
        try {
            const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/order/${id}`)
            const productAry = Object.values(res.data.order.products)
            setOrder(productAry);

            setUser(res.data.order.user)

        } catch (error) {
            console.log(error)
            setTimeout(() => {
                navigate('/')
            }, 5000);
        }
    }
    useEffect(() => {
        getOrder(id);
    }, [id])


    return (<>
        <div className="container mt-5 mb-10 text-center">
            {!order ? <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
                <div className="text-center p-5 rounded shadow-lg" style={{ backgroundColor: '#ffffff' }}>
                    <h2 className="display-1 text-danger fw-bold" style={{ fontFamily: '"Cursive", sans-serif' }}>No order items found</h2>
                    <p className="lead text-muted mb-4">You will be redirected to the homepage in 5 seconds.</p>
                    <Link to="/">
                        <button size="lg" className="btn-lg btn-outline-dark border-2 p-3">
                            Go Back Home
                        </button>
                    </Link>
                </div>
            </div>

                :
                <div className="card shadow p-5">
                    <h2 className="text-success mb-4">Order Successfully Placed!</h2>
                    <p className="text-muted">Thank you for your purchase. Your order details are below:</p>

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <h4 className="mb-3">Order Details</h4>
                                    <table className="table align-middle">
                                        <thead>
                                            <tr className="text-center">
                                                {order.some(item => item.hasOwnProperty('coupon')) ? <th scope="col">Discount</th>
                                                    : null}
                                                <th scope="col">Product</th>
                                                <th scope="col">Qty</th>
                                                <th>Unit Price</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order?.map((item, index) => {
                                                return (
                                                    <tr className="text-center" key={index}>
                                                        {
                                                            item?.coupon?.percent > 0 ? <td><span className="badge bg-success ms-3">{100 - item?.coupon?.percent} Off</span></td>
                                                                : null
                                                        }
                                                        <td>{item.product.title}</td>
                                                        <td>{item.qty}</td>
                                                        <td>{item.product.price}</td>
                                                        <td>{Math.floor(item.final_total)}
                                                        </td>
                                                    </tr>

                                                )
                                            })}

                                        </tbody>
                                    </table>
                                    <div className="text-end">
                                        <h4>Total:${Math.floor(order?.reduce((acc, cur) => acc + cur.final_total, 0))}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow mb-4">
                                <div className="card-body text-start">

                                    <h4 className="mb-3 text-center">Customer Information</h4>
                                    <p><strong>Name:</strong> {user?.name}</p>
                                    <p><strong>Email:</strong> {user?.email}</p>
                                    <p><strong>Phone:</strong> {user?.tel}</p>
                                    <p><strong>Shipping Address:</strong> {user?.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Link to='/' className="btn btn-primary">Back to Home</Link>
                    </div>
                </div>
            }

        </div>


    </>)
}