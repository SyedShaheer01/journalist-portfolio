import './sidebar.css'
import assets from '../../assets/assets.js'

function SideBar({ detail, setDetail }) {

  return (
    <div className='side-bar'>
      <div className='side-cont'>

        <div
          onClick={() => setDetail(prev => prev === "add" ? "" : "add")}
          className={detail === "add" ? "active" : 'side-options'}
        >
          <img src={assets.add_icon} alt="add" />
          <span>Add Journalism</span>
        </div>

        <div
          onClick={() => setDetail(prev => prev === "list" ? "" : "list")}
          className={detail === "list" ? "active" : 'side-options'}
        >
          <img src={assets.order_icon} alt="list" />
          <span>List Journalism</span>
        </div>

        <div
          onClick={() => setDetail(prev => prev === "blogs" ? "" : "blogs")}
          className={detail === "blogs" ? "active" : 'side-options'}
        >
          <img src={assets.add_icon} alt="blogs" />
          <span>Add Blogs</span>
        </div>
        <div
          onClick={() => setDetail(prev => prev === "listBlogs" ? "" : "listBlogs")}
          className={detail === "listBlogs" ? "active" : 'side-options'}
        >
          <img src={assets.order_icon} alt="list blogs" />
          <span>List Blogs</span>
        </div>
        <div
          onClick={() => setDetail(prev => prev === "addSample" ? "" : "addSample")}
          className={detail === "addSample" ? "active" : 'side-options'}
        >
          <img src={assets.add_icon} alt="add sample" />
          <span>Add work sample</span>
        </div>
        <div
          onClick={() => setDetail(prev => prev === "listSample" ? "" : "listSample")}
          className={detail === "listSample" ? "active" : 'side-options'}
        >
          <img src={assets.order_icon} alt="list sample" />
          <span>List work sample</span>
        </div>

        <div
          onClick={() => setDetail(prev => prev === "addProduct" ? "" : "addProduct")}
          className={detail === "addProduct" ? "active" : 'side-options'}
        >
          <img src={assets.add_icon} alt="add product" />
          <span>Add Product</span>
        </div>

         <div
          onClick={() => setDetail(prev => prev === "listProduct" ? "" : "listProduct")}
          className={detail === "listProduct" ? "active" : 'side-options'}
        >
          <img src={assets.order_icon} alt="list product" />
          <span>List Product</span>
        </div>

         <div
          onClick={() => setDetail(prev => prev === "addCode" ? "" : "addCode")}
          className={detail === "addCode" ? "active" : 'side-options'}
        >
          <img src={assets.add_icon} alt="add code" />
          <span>Add Code</span>
        </div>

         <div
          onClick={() => setDetail(prev => prev === "listCode" ? "" : "listCode")}
          className={detail === "listCode" ? "active" : 'side-options'}
        >
          <img src={assets.order_icon} alt="list code" />
          <span>List Code</span>
        </div>


      </div>
    </div>
  )
}

export default SideBar