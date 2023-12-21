import { useEffect, useState } from 'react'
import axios from "axios"


function App() {
  const [jobs, setJobs] = useState([])
  const [newJobs,setNewJobs] = useState({})
  const [flag,setflag] = useState(true)
  // lấy dữ liệu về
  const handleData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/getalljobs")
      setJobs(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    handleData()
  },[flag])

  // thêm công việc
  const handleAdd = async () => {
    try {
      const res = await axios.post (`http://localhost:8080/addjobs`,newJobs)
      setflag(!flag)
    } catch (error) {
      console.log(error);
    }
  }

  // xoá công việc 
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/jobs/${id}`)
      setflag(!flag)
    } catch (error) {
      console.log(error);
    }
  }
//  thay đổi trạng thái công việc
const Update = async (id) => {
  console.log(id);
  try {
    const res = await axios.put(`http://localhost:8080/update/${id}`)
    setflag(!flag)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='grid place-content-center  bg-yellow-500 h-[700px]'>
    <div className='mb-56 bg-white rounded p-5 '>
      <div className='text-3xl font-medium p-5 ml-5'>
        <h1>danh sach công việc</h1>
      </div>
      <div>
        <input
          className='border-lime-600 border w-[356px] h-[36px] px-5 text-sm text-gray-900 rounded-lg bg-gray-50'
          onChange={(e) => setNewJobs({ ...newJobs, [e.target.name]: e.target.value })}
          type='text'
          name='Name'
          placeholder='thêm công việc'></input>
        <button
        onClick={handleAdd}
          className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2 ml-1 text-center me-2 mb-2'
          
        >thêm</button>
      </div>
      <div>
        <ul className='max-w-md divide-y divide-gray-200 p-2 '>
          {jobs.map((item, index) => {
            return <li 
              className='pb-3 sm:pb-4 flex justify-between'
              key={index}>
              <div className=' '>
                <div className=''>{item.Name}  </div>
                </div>
                <div><p>Trạng thái: {item.compelete}</p></div>
                <div 
                className='  text-base '>
               
                  <button onClick={()=>handleDelete(item.id)} >xoá</button>
                  <button onClick={()=>Update(item.id)}>sửa</button>
                </div>
                
            </li>

          })}
        </ul>
      </div>
    </div>

  </div>
  )
}

export default App
