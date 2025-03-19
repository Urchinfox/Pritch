import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export default function CouponModal({ couponTempData, close, editCoupon }) {
    const [couponForm, setCouponForm] = useState({
        title: '',
        is_enabled: 0,
        percent: 0,
        due_date: 0,
        code: ''
    });

    useEffect(() => {
        if (couponTempData) {
            setCouponForm({
                title: couponTempData.title || '',
                is_enabled: couponTempData.is_enabled || 0,
                percent: couponTempData.percent || 0,
                due_date: couponTempData.due_date || 0,
                code: couponTempData.code || ''
            });
        }
    }, [couponTempData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'due_date') {
            const dateObject = new Date(`${value}T00:00:00Z`);
            setCouponForm({ ...couponForm, due_date: Math.floor(dateObject.getTime() / 1000) });
        } else if (type === 'checkbox') {
            setCouponForm({ ...couponForm, [name]: checked ? 1 : 0 });
        } else if (name === 'percent') {
            setCouponForm({ ...couponForm, [name]: Number(value) });
        } else {
            setCouponForm({ ...couponForm, [name]: value });
        }
    };



    return (
        <div className="modal" tabIndex="-1" id='couponModal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Coupon</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-2">
                            <label className="me-1">Title:</label>
                            <input type="text" name="title" value={couponForm.title} onChange={handleChange} />
                        </div>
                        <div className="mb-2">
                            <label className="me-1">Enabled:</label>
                            <input type="checkbox" name="is_enabled" checked={couponForm.is_enabled === 1} onChange={handleChange} />
                        </div>

                        <div className="mb-2">
                            <label className="me-1">Discount (%):</label>
                            <input type="number" name="percent" value={couponForm.percent} onChange={handleChange} />
                        </div>

                        <div className="mb-2">
                            <label className="me-1">Expiry Date:</label>
                            <input type="date" name="due_date"
                                value={couponForm.due_date ? new Date(couponForm.due_date * 1000).toISOString().split('T')[0] : ''}
                                onChange={handleChange} />
                        </div>

                        <div className="mb-2">
                            <label className="me-1">Code:</label>
                            <input type="text" name="code" value={couponForm.code} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => editCoupon(couponForm, couponTempData.id)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


CouponModal.propTypes = {
    couponTempData: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                is_enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
                percent: PropTypes.number,
                due_date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                code: PropTypes.string,
                id: PropTypes.string,
            })
        ),
        PropTypes.shape({
            title: PropTypes.string,
            is_enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
            percent: PropTypes.number,
            due_date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            code: PropTypes.string,
            id: PropTypes.string,
        })
    ]),
    close: PropTypes.func.isRequired,
    editCoupon: PropTypes.func.isRequired,
};
