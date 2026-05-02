import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../list/list.css'
import assets from '../../assets/assets.js'
import { ClipLoader } from "react-spinners";



function ListBlog() {

  const [product, setProduct] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [spinner, setSpinner] = useState(false);


  const [editData, setEditData] = useState({
    _id: "",
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: ""
  })

  // 🔥 FETCH BLOGS
  useEffect(() => {
    axios.get("https://journalist-portfolio-backend.vercel.app/api/blog/list")
      .then(res => {
        setProduct(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  // ❌ DELETE
  const deleteProduct = (id) => {
    axios.post("https://journalist-portfolio-backend.vercel.app/api/blog/remove", { id })
      .then(res => {
        Swal.fire({
          title: res.data.message,
          icon: "success"
        })

        setProduct(prev => prev.filter(item => item._id !== id))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      })
  }

  // ✏️ OPEN EDIT MODAL
  const openEdit = (item) => {
    setEditData(item)
    setImageFile(null) // reset file
    setShowModal(true)
  }

  // 🔄 HANDLE TEXT CHANGE
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  // 🖼 HANDLE IMAGE
  // const handleImageChange = (e) => {
  //   setImageFile(e.target.files[0])
  // }

  // ✅ UPDATE BLOG (WITH IMAGE)
  const updateBlog = () => {
        setSpinner(true)

    const formData = new FormData()

    formData.append("title", editData.title)
    formData.append("slug", editData.slug)
    formData.append("excerpt", editData.excerpt)
    formData.append("content", editData.content)

    if (imageFile) {
      formData.append("image", imageFile)
    }

    axios.put(
      `https://journalist-portfolio-backend.vercel.app/api/blog/update/${editData._id}`,
      formData
    )
      .then(res => {
        // console.log("resss",res);
        Swal.fire("Updated!", "Blog updated successfully", "success")
            setSpinner(false)


        // 🔥 Update UI instantly
        setProduct(prev =>
          prev.map(item =>
            item._id === editData._id
              ? {
                  ...editData,
                  image: imageFile
                    ? URL.createObjectURL(imageFile)
                    : item.image
                }
              : item
          )
        )

        setShowModal(false)
        setImageFile(null)
      })
      .catch(err => {
        Swal.fire("Error", err.message, "error")
                 setSpinner(false)

      })
  }

  return (
    <div className='db-product'>

      <div className='db-product-title db-flex-blog'>
        <p>image</p>
        <p>Title</p>
        <p>Slug</p>
        <p>Edit</p>
        <p>Remove</p>
      </div>

      <div className='db-product-list'>

        {
          product.map((v) => (
            <div className='db-flex-blog' key={v._id}>
              <img width={100} src={v.image} alt="" />
              <p>{v.title}</p>
              <p>{v.slug}</p>

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

            <h2>Edit Blog</h2>
  
            
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
                          required
                          autoComplete="off"
          />
                      </div>

            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              placeholder="Title"
            />

            <input
              type="text"
              name="slug"
              value={editData.slug}
              onChange={handleChange}
              placeholder="Slug"
            />

            {/* 🖼 IMAGE INPUT */}

           

            <input
              name="excerpt"
              value={editData.excerpt}
              onChange={handleChange}
              placeholder="Excerpt"
              type='text'
            />

              <div className='product-description-modal'>
          <p>Content</p>
          <textarea onChange={handleChange} value={editData.content} name='content'
           required placeholder='Enter product description'  cols={24} rows={5}/>
        </div>


            <div className="modal-actions">
              
              <button onClick={updateBlog} className='form-btn'>  Update
                   { spinner && <ClipLoader color="white" size={18} /> }
              </button>
              <button className='form-btn-cancel' onClick={() => setShowModal(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default ListBlog