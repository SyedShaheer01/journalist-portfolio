import React from 'react';
import { useState } from 'react'
import SideBar from '../../components/sideBar/sidebar.jsx'
import Add from '../../components/add/addJournalism.jsx'
import List from '../list/listJournalism.jsx';
import AddBlog from '../add/addBlog.jsx';
import ListBlog from '../list/listBlog.jsx';
import AddWork from '../add/addWork.jsx';
import ListWork from '../list/listWork.jsx';

const DashBoard = () => {
      const [detail,setDetail]=useState("add")
    
    return (
        <div>
              <div className='app-content'>

      <SideBar detail={detail} setDetail={setDetail}/>
      {detail === "add" && <Add/> || detail === "list" && <List/> || detail === "blogs" && <AddBlog/> 
      || detail === "listBlogs" && <ListBlog/>  || detail === "addSample" && <AddWork/> 
       || detail === "listSample" && <ListWork/> }
        </div>

        </div>
    );
}

export default DashBoard;
