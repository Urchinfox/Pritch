import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';
import CouponModal from '../../components/CouponModal';
const Coupon = () => {
  const [couponForm, setCouponForm] = useState({
    "title": "",
    "is_enabled": 1,
    "percent": 10,
    "due_date": 0,
    "code": ""
  });

  const [couponTempData, setCouponTempData] = useState([]);

  const couponBtnModal = useRef(null)

  const [couponData, setCouponData] = useState([]);

  const getCoupon = async () => {
    try {
      const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupons`);
      setCouponData(res.data.coupons);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCoupon();
    couponBtnModal.current = new Modal('#couponModal', { backdrop: 'static' });
  }, [])

  const openCouponModal = (data) => {
    couponBtnModal.current.show();
    setCouponTempData(data)
  }
  const closeCouponModal = () => {
    couponBtnModal.current.hide();
  }


  const deleteCoupon = async (id) => {
    try {
      const res = await axios.delete(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupon/${id}`)
      getCoupon();
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'due_date') {
      const dateValue = e.target.value;

      const dateObject = new Date(`${dateValue}T00:00:00Z`);

      const unixTimestamp = Math.floor(dateObject.getTime() / 1000);
      setCouponForm({ ...couponForm, [name]: unixTimestamp });
    } else if (name === 'is_enabled') {
      setCouponForm({ ...couponForm, [name]: e.target.checked ? 1 : 0 })
    } else if (name === 'percent') {
      setCouponForm({ ...couponForm, [name]: Number(value) })
    }
    else {
      setCouponForm({ ...couponForm, [name]: value })
    }
  }

  const handleReset = () => {
    setCouponForm({
      "title": "",
      "is_enabled": 0,
      "percent": 0,
      "due_date": 0,
      "code": ""
    })
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);  // 轉成 Date 物件
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const addCoupon = async (couponForm) => {
    const data = {
      "data": couponForm
    }
    try {
      const res = await axios.post(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupon`, data)
      getCoupon();
      handleReset()
    } catch (error) {
      console.log(error);
    }
  }


  const editCoupon = async (couponModalData, id) => {
    const data = {
      "data": {
        "title": couponModalData.title,
        "is_enabled": couponModalData.is_enabled,
        "percent": couponModalData.percent,
        "due_date": couponModalData.due_date,
        "code": couponModalData.code
      }
    }
    try {
      const res = await axios.put(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/coupon/${id}`, data)
      getCoupon();
      closeCouponModal()
    } catch (error) {
      console.log(error)
    }
  }


  return (<>

    <div className="container py-5">
      { }
      <CouponModal close={closeCouponModal} couponTempData={couponTempData} editCoupon={editCoupon} />
      <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-white">
          <h4 className="mb-0">Coupon List</h4>
        </div>
        <div className="card-body p-0">
          <table className="table table-hover table-striped mb-0">
            <thead className="table-dark">
              <tr className='text-center'>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
                <th scope="col">Discount</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                couponData.map((item, index) => {
                  return (
                    <tr className='align-middle text-center' key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td><span className="badge bg-secondary">{item.code}</span></td>
                      <td>{item.percent}%</td>
                      <td>{formatDate(item.due_date)}</td>
                      <td>

                        {item.is_enabled ? (
                          <span className="badge bg-success">Active</span>
                        ) : (
                          <span className="badge bg-danger">Inactive</span>
                        )}
                      </td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => { openCouponModal(item) }}>Edit</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => deleteCoupon(item.id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-white text-center">
          <h3 className="mb-0">Add New Coupon</h3>
        </div>
        <div className="card-body">

          <div className="mb-3">
            <label htmlFor="couponName" className="form-label fw-bold">Coupon Name</label>
            <input type="text" className="form-control" name='title' id="couponName" value={couponForm.title} placeholder="Enter coupon name" onChange={handleChange} />
          </div>

          <div className="mb-3 d-flex align-items-center">
            <input type="checkbox" className="form-check-input me-2" name='is_enabled' value={couponForm.is_enabled} id="isActive" onChange={handleChange} />
            <label htmlFor="isActive" className="form-check-label fw-bold">Active</label>
          </div>

          <div className="mb-3">
            <label htmlFor="discount" className="form-label fw-bold">Discount (%)</label>
            <input type="number" className="form-control" id="discount" min="0" max="100" value={couponForm.percent} placeholder="Enter discount percentage" name='percent' onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label fw-bold">Expiry Date</label>
            <input
              type="date"
              className="form-control" id="expiryDate"
              name='due_date'
              value={couponForm.due_date ? new Date(couponForm.due_date * 1000).toISOString().split('T')[0] : ''}
              onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="couponCode" className="form-label fw-bold">Coupon Code</label>
            <input type="text" className="form-control" id="couponCode" name='code' value={couponForm.code} placeholder="Enter coupon code" onChange={handleChange} />
          </div>

          <div className="text-center mt-4">
            <button type="button" className="btn btn-dark px-5" onClick={() => addCoupon(couponForm)} >Add Coupon</button>
          </div>
        </div>
      </div>
    </div>




  </>);
};

export default Coupon;
