import React, { useEffect, useState } from 'react'
// import './List.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../list/list.css'

function ListCode() {

  const [product, setProduct] = useState([])

  // Fetch products
  useEffect(() => {
    axios.get("https://journalist-backend.vercel.app/api/refcode/list")
      .then(res => {
        setProduct(res.data.data)
      })
      .catch(err => console.log(err))
  }, []) // ✅ fixed dependency

  // Delete product
  const deleteProduct = (id) => {
    axios.post("https://journalist-backend.vercel.app/api/refcode/remove", { id })
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

      <div className='db-product-title db-flex-code'>
        <p>Code</p>
        <p>Discount</p>
        <p>Remove</p>
      </div>

      <div className='db-product-list'>

        {
          product.map((v) => (
            <div className='db-flex-code' key={v._id}>
              <p>{v.code}</p>
              <p>{v.discountPercent}</p>
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

export default ListCode