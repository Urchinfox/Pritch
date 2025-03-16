import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { cartHint } from "../../slices/cartMessageSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingAry, setLoadingAry] = useState([]);
    const dispatch = useDispatch()

    const getCartItem = async () => {

        if (loadingAry.length > 0) {
            setIsLoading(true)
        }
        try {
            const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`);
            dispatch(cartHint(res.data.data.carts))
            setCartItems(res.data.data.carts);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

    const removerCartItem = async (id) => {
        setIsLoading(true)
        try {
            const res = await axios.delete(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart/${id}`)
            getCartItem()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    // 從 localStorage 
    // const a = localStorage.getItem('size');

    // localStorage 取出資料轉成物件
    // const b = JSON.parse(a);

    // 顯示資料
    // console.log(b);

    useEffect(() => {
        getCartItem();
    }, [])

    const changeQuantity = async (id, qty, type) => {
        const data = {
            "data": {
                "product_id": id,
                "qty": type === 'plus' ? qty + 1 : qty - 1
            }
        }
        setLoadingAry((pre) => {
            return [...pre, id]
        })

        try {
            const res = await axios.put(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart/${id}`, data)
            getCartItem();
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingAry((pre) => {
                return pre.filter((itemId) => itemId !== id);
            })
        }
    };


    return (
        <div className="container mt-5 mb-10">
            <Loading isLoading={isLoading} />
            <h2 className="mb-4">Your Cart</h2>
            {cartItems && cartItems.length === 0 ? (
                <div className="alert alert-info">Nothing in Cart</div>
            ) : (
                <div className="card shadow mb-5">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead>
                                    <tr className="text-center">
                                        <th scope="col" className="d-none d-sm-table-cell"></th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="text-center">
                                            <td className="d-none d-sm-table-cell">
                                                <img src={item.product.imageUrl} alt={item.product.title} width={50} height={50} />
                                            </td>
                                            <td>{item.product.title}</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button
                                                        className="border-0"
                                                        disabled={item.qty === 1}
                                                        onClick={() => changeQuantity(item.id, item.qty, 'minus')}
                                                    >
                                                        {loadingAry.includes(item.id) ? <span className="spinner-grow spinner-grow-sm"></span> : '-'}
                                                    </button>
                                                    <span className="mx-2">{item.qty}</span>
                                                    <button
                                                        className="border-0"
                                                        onClick={() => changeQuantity(item.id, item.qty, 'plus')}
                                                    >
                                                        {loadingAry.includes(item.id) ? <span className="spinner-grow spinner-grow-sm"></span> : '+'}
                                                    </button>
                                                </div>
                                            </td>
                                            <td>${item.product.price}</td>
                                            <td>${item.product.price * item.qty}</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => removerCartItem(item.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-end">
                            <h4>Total: ${cartItems.reduce((acc, cur) => acc + cur.final_total, 0)}</h4>
                        </div>
                    </div>
                </div>
            )}
            <div className="text-end">
                <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
            </div>
        </div>

    );
};


export default Cart;
