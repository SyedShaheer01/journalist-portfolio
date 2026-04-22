
import './Add.css'
import assets from '../../assets/assets.js'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ClipLoader } from "react-spinners";

function Add() {
  const [logo, setLogo] = useState(false)
  const [spinner, setSpinner] = useState(false)

  const [data, setData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    date: "",
    publication:"",
    link:"",
    label:"",
    // content: ""
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
    formData.append("title", data.title)
    formData.append("slug", data.slug)
    formData.append("excerpt", data.excerpt)
    formData.append("date", data.date)
    formData.append("publication", data.publication)
    formData.append("link", data.link)
    formData.append("label", data.label)
    // formData.append("content", data.content)
    formData.append("logo", logo)

    try {
      const res = await axios.post(
        "http://localhost:8000/api/journalism/add",
        formData
      )

      console.log(res)

      Swal.fire({
        title: res.data.message,
        icon: "success"
      })

      if (res.data.success) {
        setData({
          title: "",
          slug: "",
          excerpt: "",
          date: "",
          publication: "",
          link: "",
          label: "",
          // content: ""
        })

        setLogo(false)
        setSpinner(false)
      }

    } catch (error) {
      console.log(error)

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

        <div className='add-upload flex-col'>
          <p>Upload Logo</p>

          <label htmlFor='logo'>
            {!logo ? (
              <img src={assets.upload_area} alt="upload" />
            ) : (
              <img
                width={100}
                src={URL.createObjectURL(logo)}
                alt="preview"
              />
            )}
          </label>

          <input
            onChange={(e) => setLogo(e.target.files[0])}
            type='file'
            id="logo"
            hidden
            required
            autoComplete="off"
          />
        </div>

        <div className='add-product-name'>
          <p>Title</p>
          <input
            onChange={onChangeHandler}
            value={data.title}
            name='title'
            type='text'
            required
            placeholder='Enter Title'
            autoComplete="off"
          />
        </div>
        <div className='add-product-name'>
          <p>Slug</p>
          <input
            onChange={onChangeHandler}
            value={data.slug}
            name='slug'
            type='text'
            required
            placeholder='Enter Slug'
            autoComplete="off"
          />
        </div>
        <div className='add-product-name'>
          <p>Excerpt</p>
          <input
            onChange={onChangeHandler}
            value={data.excerpt}
            name='excerpt'
            type='text'
            required
            placeholder='Enter Excerpt'
            autoComplete="off"
          />
        </div>
        <div className='add-product-name'>
          <p>Date</p>
          <input
            onChange={onChangeHandler}
            value={data.date}
            name='date'
            type='text'
            required
            placeholder='Enter Date'
            autoComplete="off"
          />
        </div>
        <div className='add-product-name'>
          <p>Publication</p>
          <input
            onChange={onChangeHandler}
            value={data.publication}
            name='publication'
            type='text'
            required
            placeholder='Enter publication'
            autoComplete="off"
          />
        </div>
        <div className='add-product-name'>
          <p>Link</p>
          <input
            onChange={onChangeHandler}
            value={data.link}
            name='link'
            type='text'
            required
            placeholder='Enter publication'
            autoComplete="off"
          />
        </div>
        <div className='add-product-name'>
          <p>Label</p>
          <input
            onChange={onChangeHandler}
            value={data.label}
            name='label'
            type='text'
            required
            placeholder='Enter Label'
            autoComplete="off"
          />
        </div>

         {/* <div className='product-description'>
          <p>Content</p>
          <textarea onChange={onChangeHandler} value={data.content} name='content' required placeholder='Enter product description'  cols={24} rows={5}/>
        </div> */}

      
        <button type='submit' className='form-btn'>Add
           { spinner && <ClipLoader color="white" size={18} /> }
        </button>

      </form>
    </div>
  )
}

export default Add