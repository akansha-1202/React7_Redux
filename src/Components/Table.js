import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Table = () => {
    const bigData = useSelector((state) => state.dataKey)
    const nav = useNavigate();

    
  return (
    <>
         <div className='heading'>
            <h1>Student Details</h1>
            <button className='addNewBtn' onClick={()=>{nav('/addNew')}}>Add New Student</button>
          </div>
    <table>
      <thead>
         <tr>
             <th>Name</th>
             <th>Age</th>
             <th>Course</th>
             <th>Batch</th>
             <th>Change</th>
         </tr>
      </thead>
      <tbody>
          {bigData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td>
                <Link  to="/editStudent" state={{data:index}}>Edit</Link>
                  {/* here "index" is not related to "index" used in EditStudent compo */}
              </td>
            </tr>
           ))
          }
      </tbody>
  
  </table>  
  </>
  )
}

export default Table