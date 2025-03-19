import { useEffect, useState } from "react"
import PropTypes from 'prop-types';


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
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title" id="exampleModalLabel">Order Number：#001</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        {product.map((item, index) => {
                            return (<div key={index}>
                                <p >Product： {item.title}* {item.qty}</p>
                            </div>)
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



OrderInfoModal.propTypes = {
    close: PropTypes.func,
    orderId: PropTypes.shape({
        products: PropTypes.objectOf(
            PropTypes.shape({
                product: PropTypes.shape({
                    title: PropTypes.string.isRequired
                }).isRequired,
                qty: PropTypes.number.isRequired
            })
        ),
        user: PropTypes.shape({
            address: PropTypes.string,
        }),
        total: PropTypes.number,
        is_paid: PropTypes.bool,
    })
};
