import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../list/list.css'
import { ClipLoader } from "react-spinners";


function ListProduct() {

  const [product, setProduct] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [spinner, setSpinner] = useState(false)

  const [editData, setEditData] = useState({
    _id: "",
    title: "",
    description:"",
    price: "",
    image: ""
  })

  // 🔥 FETCH PRODUCTS
  useEffect(() => {
    axios.get("https://journalist-portfolio-backend.vercel.app/api/product/list")
      .then(res => {
        setProduct(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  // ❌ DELETE PRODUCT
  const deleteProduct = (id) => {
    axios.post("https://journalist-portfolio-backend.vercel.app/api/product/remove", { id })
      .then(res => {
        Swal.fire("Deleted!", res.data.message, "success")
        setProduct(prev => prev.filter(item => item._id !== id))
      })
      .catch(err => {
        Swal.fire("Error", err.message, "error")
      })
  }

  // ✏️ OPEN EDIT MODAL
  const openEdit = (item) => {
    setEditData(item)
    setImageFile(null)
    setShowModal(true)
  }

  // 🔄 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  // 🖼 UPDATE PRODUCT
  const updateProduct = () => {

    setSpinner(true)

    const formData = new FormData()
    formData.append("title", editData.title)
    formData.append("description", editData.description)
    formData.append("price", editData.price)

    if (imageFile) {
      formData.append("image", imageFile)
    }

    axios.put(
      `https://journalist-portfolio-backend.vercel.app/api/product/update/${editData._id}`,
      formData
    )
      .then(res => {

        Swal.fire("Updated!", "Product updated successfully", "success")

        const updatedProduct = res.data.data

        // 🔥 update UI instantly
        setProduct(prev =>
          prev.map(item =>
            item._id === updatedProduct._id ? updatedProduct : item
          )
        )

        setShowModal(false)
        setImageFile(null)
        setSpinner(false)
      })
      .catch(err => {
        Swal.fire("Error", err.message, "error")
        setSpinner(false)
      })
  }

  return (
    <div className='db-product'>

      {/* HEADER */}
      <div className='db-product-title db-flex-blog'>
        <p>image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Remove</p>
      </div>

      {/* LIST */}
      <div className='db-product-list'>
        {
          product.map((v) => (
            <div className='db-flex-blog' key={v._id}>
              <img width={100} src={v.image} alt="" />
              <p>{v.title}</p>
              <p>{v.price}</p>

              {/* ✏️ EDIT */}
              <p
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => openEdit(v)}
              >
                Edit
              </p>

              {/* ❌ DELETE */}
              <p
                className='db-remove'
                onClick={() => deleteProduct(v._id)}
              >
                X
              </p>
            </div>
          ))
        }

        {product.length > 0 && <hr />}
        {!product.length && <h1>No products!</h1>}
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Edit Product</h2>

            {/* IMAGE */}
            <div className='add-upload flex-col'>
              <p>Upload Image</p>

              <label htmlFor='image'>
                {!imageFile ? (
                  <img src={editData.image} width={100} alt="upload" />
                ) : (
                  <img
                    width={100}
                    src={URL.createObjectURL(imageFile)}
                    alt="preview"
                  />
                )}
              </label>

              <input
                onChange={(e) => setImageFile(e.target.files[0])}
                type='file'
                id="image"
                hidden
              />
            </div>

            {/* TITLE */}
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              placeholder="Title"
            />
               <div className='product-description-modal'>

          <p>Description</p>
          <textarea onChange={handleChange} value={editData.description} name='description'
           required placeholder='Enter product description'  cols={24} rows={5}/>
        </div>

            {/* PRICE */}
            <input
              type="number"
              name="price"
              value={editData.price}
              onChange={handleChange}
              placeholder="Price"
            />


            {/* ACTIONS */}
            <div className="modal-actions">

              <button onClick={updateProduct} className='form-btn'>
                Update
                {spinner && <ClipLoader color="white" size={18} />}
              </button>

              <button className='form-btn-cancel' onClick={() => setShowModal(false)}>
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default ListProduct