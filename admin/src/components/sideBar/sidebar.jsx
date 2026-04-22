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

      </div>
    </div>
  )
}

export default SideBar