import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PropTypes from 'prop-types';

export default function Checkout() {
    const [isLoading, setIsloading] = useState(false)
    const [coupon, setCoupon] = useState();
    const [discount, setDiscount] = useState(0);
    const [couponError, setCouponError] = useState('');


    const navigate = useNavigate();

    const Input = ({ register, errors, rules, id, type, label, placeholder }) => {
        return (<>
            <label
                htmlFor={id}
                className="form-label">{label}
            </label>
            <input
                id={id}
                type={type}
                className={`form-control ${errors?.[id] && 'is-invalid'}`}
                placeholder={placeholder}
                {...register(id, rules)}
            />
            {errors[id] && (
                <div className='invalid-feedback'>{errors?.[id]?.message}</div>
            )}
        </>)
    }

    const Select = ({ register, errors, rules, id, label, children }) => {
        return (<>
            <label htmlFor={id} className="form-label">{label}</label>
            <select id={id} className={`form-select ${errors?.[id] && 'is-invalid'}`}
                {...register(id, rules)}
            >
                {children}
            </select>
            {
                errors[id] && (<div className="invalid-feedback">{errors?.[id]?.message}</div>)
            }

        </>)
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            payment: '',
        },
        mode: 'onBlur'
    });

    const onSubmit = async (userData) => {
        const data = {
            "data": {
                "user": {
                    "name": userData.name,
                    "email": userData.email,
                    "tel": userData.phoneNumber,
                    "address": userData.address
                },
                "message": "none"
            }
        }
        try {
            setIsloading(true)
            const res = await axios.post(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/order`, data)
            const ordeId = (res.data.orderId)
            getCartItem();
            navigate(`/order/${ordeId}`);

        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false)
        }
        reset();
    }

    const [cartItem, setCartItem] = useState([]);

    const getCartItem = async () => {
        try {
            const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`);
            setCartItem(res.data.data.carts);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCartItem();
    }, [])

    const handleCoupon = (e) => {
        setCoupon(e.target.value)
    }
    const submitCoupon = async (code) => {
        const data = {
            "data": {
                "code": code
            }
        }
        try {
            const res = await axios.post(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/coupon`, data)
            setDiscount(res.data.data.final_total);

        } catch (error) {
            setCouponError(error.response.data.message)
            console.log(error.response.data.message)
        }
    }



    return (<>
        <div className="container mt-5 mb-10">
            <Loading isLoading={isLoading} />
            <div className="row">
                <div className="col-md-7">
                    <div className="card shadow mb-5">
                        <div className="card-body">
                            <h2 className="mb-4">Billing Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <Input
                                        errors={errors}
                                        register={register}
                                        rules={{
                                            required: 'Name is required',
                                        }}
                                        type='text'
                                        id='name'
                                        label='Full Name'
                                        placeholder="John Wick"
                                    />

                                </div>
                                <div className="mb-3">
                                    <Input
                                        errors={errors}
                                        register={register}
                                        rules={{
                                            required: 'email is required',
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Invalid email format'
                                            }
                                        }}
                                        type='email'
                                        id='email'
                                        label='Email Address'
                                        placeholder='example@gmail.com'
                                    />

                                </div>
                                <div className="mb-3">
                                    <Input
                                        errors={errors}
                                        register={register}
                                        rules={{
                                            required: 'Phone Number is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Phone number is less than 8 digits'
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: 'Phone number is more than 10 digits'
                                            }
                                        }}
                                        type='tel'
                                        id='phoneNumber'
                                        label='Phone Number'
                                        placeholder='09xx-xxx-xxx'
                                    />
                                </div>
                                <div className="mb-3">
                                    <Input
                                        errors={errors}
                                        register={register}
                                        rules={{
                                            required: 'Address is required'
                                        }}
                                        type='text'
                                        id='address'
                                        label='Shipping Address'
                                        placeholder='Enter your address'
                                    />

                                </div>
                                <div className="mb-3">
                                    <Select
                                        register={register}
                                        errors={errors}
                                        label='Payment Method'
                                        rules={{
                                            required: 'Payment method should be choosen'
                                        }}
                                        id='payment'
                                    >
                                        <option value="" disabled>Select a payment method</option>
                                        <option>Credit Card</option>
                                        <option>PayPal</option>
                                        <option>Bank Transfer</option>
                                    </Select>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary">Confirm Payment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card shadow mb-5">
                        <div className="card-body">
                            <h2 className="mb-4">Order Summary</h2>
                            <table className="table align-middle">
                                <thead>
                                    <tr className="text-center">
                                        <th scope="col">Product</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItem.map(item => {
                                        return (<React.Fragment key={item.id}>
                                            <tr className="text-center">
                                                <td>{item.product.title}</td>
                                                <td>{item.qty}</td>
                                                <td>${item.product.price * item.qty}</td>
                                            </tr>
                                        </React.Fragment>)
                                    })}

                                </tbody>
                            </table>
                            {discount !== 0 ? <div className="alert alert-primary">
                                Discount coupon applied! {100 - (discount / cartItem.reduce((acc, cur) => acc + cur.total, 0)) * 100}%Off
                            </div> : null}
                            {discount === 0 ? <div className="d-flex align-items-center gap-2 my-3">
                                <input type="text" className="form-control" placeholder="Ex:coupon1/2/3" onChange={handleCoupon} />
                                <button className="btn btn-outline-primary" onClick={() => submitCoupon(coupon)}>Apply</button>
                            </div> : null}
                            {
                                couponError && discount === 0 ? (<span className="text-danger fs-8">Coupon not found or has expired</span>) : ''
                            }
                            <div className="text-end">
                                <h4>Total: ${Math.floor(cartItem.reduce((acc, cur) => discount ? discount : acc + cur.total, 0))}</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>)
}


Checkout.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.object,
    rules: PropTypes.object,
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
};