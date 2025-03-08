import { useEffect, useState } from "react"
import React from "react";

export default function OrderInfoModal({ close, orderId }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const productInfo = Object.values(orderId?.products || {}).map((item) => {

            return {
                title: item.product.title,
                qty: item.qty,
            }
        });
        setProduct(productInfo)
    }, [orderId])



    return (<>

        <div className="modal fade" id="orderModal">
            {JSON.stringify(product)}
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title" id="exampleModalLabel">訂單編號：#001</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        {product.map((item, index) => {
                            return (<React.Fragment key={index}>
                                <p>Product： {item.title}* {item.qty}</p>
                            </React.Fragment>)
                        })}
                        <p>Address：{orderId?.user?.address}</p>
                        <p>Total：${orderId?.total}</p>
                        <p>Payment Method：Credit Card</p>
                        <p>Status：{orderId?.is_paid ? 'Paid' : 'Unpaid'}</p>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-primary">Edit</button>
                        <button type="button" className="btn btn-secondary" onClick={close}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}