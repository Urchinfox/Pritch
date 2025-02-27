import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
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
        console.log(data)
        try {
            const res = await axios.post(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/order`, data)
            console.log('order', res);
            const ordeId = (res.data.orderId)
            getCartItem();
            navigate(`/order/${ordeId}`);

        } catch (error) {
            console.log(error);
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

    return (<>
        <div className="container mt-5 mb-10">
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
                                        <option value="" disabled>Select a payment method</option> {/* 預設選項，讓用戶選擇 */}
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
                            <div className="text-end">
                                <h4>Total: {cartItem.reduce((acc, cur) => acc + cur.total, 0)}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>)
}