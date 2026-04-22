import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../list/list.css'

function List() {

  const [product, setProduct] = useState([])

  // Fetch products
  useEffect(() => {
    axios.get("http://localhost:8000/api/journalism/list")
      .then(res => {
        setProduct(res.data.data)
      })
      .catch(err => console.log(err))
  }, []) // ✅ fixed dependency

  // Delete product
  const deleteProduct = (id) => {
    axios.post("http://localhost:8000/api/journalism/remove", { id })
      .then(res => {
        Swal.fire({
          title: res.data.message,
          icon: "success"
        })

        // ✅ remove item properly (NO mutation)
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

  return (
    <div className='db-product'>

      <div className='db-product-title db-flex'>
        <p>Logo</p>
        <p>Title</p>
        {/* <p>Slug</p> */}
        <p>Date</p>
        <p>Label</p>
        <p>Remove</p>
      </div>

      <div className='db-product-list'>

        {
          product.map((v) => (
            <div className='db-flex' key={v._id}>
              <img width={100} src={v.logo} alt="" />
              <p>{v.title}</p>
              {/* <p>{v.slug}</p> */}
              <p>{v.date}</p>
              <p>{v.label}</p>
              <p className='db-remove' onClick={() => deleteProduct(v._id)}>X</p>
            </div>
          ))
        }

        {product.length > 0 && <hr />}

        {!product.length && <h1>No products!</h1>}

      </div>
    </div>
  )
}

export default List