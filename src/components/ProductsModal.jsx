import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { createMsgThunk } from "../slices/toastMeassgeSlice";

export default function ProductModal({ closeModal, getProduct, type, product }) {
  const [tempProduct, setTempProduct] = useState({
    "title": "",
    "category": "",
    "origin_price": 100,
    "price": 300,
    "unit": "",
    "description": "Sit down please 名設計師設計",
    "content": "",
    "is_enabled": 0,
    "imageUrl": "",
    "imagesUrl": [],
  })

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "create") {
      setTempProduct({
        "title": "",
        "category": "",
        "origin_price": 100,
        "price": 300,
        "unit": "件",
        "description": "Sit down please 名設計師設計",
        "content": "",
        "is_enabled": 0,
        "imageUrl": "",
        "imagesUrl": [],
      })
    } else if (type === 'edit') {
      setTempProduct(product)
    }
  }, [type, product])

  const handleReset = () => {
    setTempProduct({
      "title": "",
      "category": "",
      "origin_price": 0,
      "price": 0,
      "unit": "",
      "description": "",
      "content": "",
      "is_enabled": 0,
      "imageUrl": "",
      "imagesUrl": [],

    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['price', 'origin_price'].includes(name)) {
      setTempProduct({
        ...tempProduct,
        [name]: Number(value)
      })
    } else if (name === 'is_enabled') {
      setTempProduct({
        ...tempProduct,
        [name]: +e.target.checked

      })
    } else {
      setTempProduct({
        ...tempProduct,
        [name]: value
      })
    }
  }


  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const uploadImg = async (files) => {
    if (!files) {
      console.log("No files provided.");
      return;
    }

    const formData = new FormData();
    formData.append("file-to-upload", files);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/upload`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Upload success:", res.data);
      setTempProduct((prev) => ({
        ...prev,
        imagesUrl: Array.isArray(prev.imagesUrl) ? [...prev.imagesUrl, res.data.imageUrl] : [res.data.imageUrl],
      }));
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
    }
  };


  const submit = async () => {

    try {
      let method = 'post';
      let api = `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/product`;
      if (type === 'edit') {
        method = 'put';
        api = `/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/product/${product.id}`;

      }
      const res = await axios[method](api,
        { data: tempProduct })
      getProduct();
      closeModal();
      handleReset();
      dispatch(createMsgThunk(res.data))
      // handleSuccessMessage(dispatch, res)
      console.log(res)
    } catch (error) {
      // handleErrorMessage(dispatch, error)
      closeModal();

      console.log(error)
    }
  }


  return (
    <div className="modal fade" id="productModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{type === 'create' ? 'Upload Product' : product.title}</h1>
            <button type="button" className="btn-close" onClick={closeModal} ></button>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='form-group mb-2'>
                  <label className='w-100' htmlFor='image'>
                    Image Link
                    <input
                      type='text'
                      name='imageUrl'
                      id='image'
                      placeholder='Img Link'
                      className='form-control'
                      onChange={handleChange}
                      value={tempProduct.imageUrl}
                    />
                  </label>
                  <img src={tempProduct.imageUrl} alt="" />
                </div>
                <div className='form-group mb-2'>
                  <label className='w-100' htmlFor='customFile'>
                    Upload Picture
                    <input
                      type='file'
                      id='customFile'
                      className='form-control'
                      name="file-to-upload"
                      onChange={(e) => { uploadImg(e.target.files[0]) }}
                    />
                  </label>
                  {
                    tempProduct.imagesUrl && tempProduct.imagesUrl.map(item => {
                      return (<>
                        <img className="my-3" src={item} width={100} height={100} alt="" />
                      </>)
                    })
                  }
                </div>
                <img src="null" alt='' className='img-fluid' />
              </div>
              <div className='col-sm-8'>

                <div className='form-group mb-2'>
                  <label className='w-100' htmlFor='title'>
                    Title
                    <input
                      type='text'
                      id='title'
                      name='title'
                      placeholder='Product Name'
                      className='form-control'
                      onChange={handleChange}
                      value={tempProduct.title}
                    />
                  </label>
                </div>
                <div className='row'>
                  <div className='form-group mb-2 col-md-6'>
                    <label className='w-100' htmlFor='category'>
                      Category
                      <input
                        type='text'
                        id='category'
                        name='category'
                        placeholder='Category'
                        className='form-control'
                        onChange={handleChange}
                        value={tempProduct.category}

                      />
                    </label>
                  </div>
                  <div className='form-group mb-2 col-md-6'>
                    <label className='w-100' htmlFor='unit'>
                      Size
                      <input
                        type='text'
                        id='unit'
                        name='unit'
                        placeholder='S,X,M,L'
                        className='form-control'
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='form-group mb-2 col-md-6'>
                    <label className='w-100' htmlFor='origin_price'>
                      Original Price
                      <input
                        type='number'
                        id='origin_price'
                        name='origin_price'
                        placeholder='請輸入原價'
                        className='form-control'
                        onChange={handleChange}
                        value={tempProduct.origin_price}

                      />
                    </label>
                  </div>
                  <div className='form-group mb-2 col-md-6'>
                    <label className='w-100' htmlFor='price'>
                      Sale Price
                      <input
                        type='number'
                        id='price'
                        name='price'
                        placeholder='請輸入售價'
                        className='form-control'
                        onChange={handleChange}
                        value={tempProduct.price}
                      />
                    </label>
                  </div>
                </div>
                <hr />
                <div className='form-group mb-2'>
                  <label className='w-100' htmlFor='description'>
                    Product Description
                    <textarea
                      type='text'
                      id='description'
                      name='description'
                      placeholder='請輸入產品描述'
                      className='form-control'
                      onChange={handleChange}
                      value={tempProduct.description}

                    />
                  </label>
                </div>
                <div className='form-group mb-2'>
                  <label className='w-100' htmlFor='content'>
                    Information
                    <textarea
                      type='text'
                      id='content'
                      name='content'
                      placeholder='Additional Information'
                      className='form-control'
                      onChange={handleChange}
                      value={tempProduct.content}
                    />
                  </label>
                </div>
                <div className='form-group mb-2'>
                  <div className='form-check'>
                    <label
                      className='w-100 form-check-label'
                      htmlFor='is_enabled'
                    >
                      Active
                      <input
                        type='checkbox'
                        id='is_enabled'
                        name='is_enabled'
                        className='form-check-input'
                        onChange={handleChange}
                        checked={!!tempProduct.is_enabled}

                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-primary" onClick={submit}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}