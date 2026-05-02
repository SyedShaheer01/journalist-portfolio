
import './Add.css'
import assets from '../../assets/assets.js'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ClipLoader } from "react-spinners";

function AddCode() {

  const [spinner, setSpinner] = useState(false)

  const [data, setData] = useState({
    code: "",
    discountPercent: "",
    
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setSpinner(true)

    const formData = new FormData()
    formData.append("code", data.code)
    formData.append("discountPercent", data.discountPercent)
   
   
    try {
      const res = await axios.post(
        "https://journalist-portfolio-backend.vercel.app/api/refcode/add",
        formData
      )

      // console.log(res)

      Swal.fire({
        title: res.data.message,
        icon: "success"
      })

      if (res.data.success) {
        setData({
          code: "",
          discountPercent: "",
        
        })

        setSpinner(false)
      }

    } catch (error) {
      // console.log(error)

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message
      })
      setSpinner(false)
    }
  }

  return (
    <div className='add'>
      <form onSubmit={submit} className='flex-col'>


        <div className='add-product-name'>
          <p>Code</p>
          <input
            onChange={onChangeHandler}
            value={data.code}
            name='code'
            type='text'
            required
            placeholder='Enter RefCode'
            autoComplete="off"
          />
        </div>

        <div className='add-product-name'>
          <p>discountPercent</p>
          <input
            onChange={onChangeHandler}
            value={data.discountPercent}
            name='discountPercent'
            type='number'
            required
            placeholder='Enter discountPercent'
            autoComplete="off"
          />
        </div>
           
         

      
        <button type='submit' className='form-btn'>Add
           { spinner && <ClipLoader color="white" size={18} /> }
        </button>

      </form>
    </div>
  )
}

export default AddCode