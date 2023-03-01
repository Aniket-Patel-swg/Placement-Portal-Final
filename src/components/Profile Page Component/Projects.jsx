import React, { useState } from 'react';
import './Css/Project.css';


export const Projects = () => {
    
    const initialFormData = {
        projectName: "",
        techStackUsed: "",
        facultyMember: "",
        projectLink: "",
      };
    const [formData, setFormData] = useState(initialFormData);
  const [rows, setRows] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRow = () => {
    setRows([...rows, formData]);
    setFormData(initialFormData);
  };

  const handleEditRow = (index) => {
    setFormData(rows[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleSaveRow = () => {
    const newRows = [...rows];
    newRows[editIndex] = formData;
    setRows(newRows);
    setFormData(initialFormData);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setFormData(initialFormData);
    setIsEditing(false);
    setEditIndex(null);
  };
    return (

        // <div className="  overflow-x-auto relative shadow-md sm:rounded-lg bg-gray-200 rounded-2xl mx-4 my-4">
        //     <div className='flex flex-col justify-between'>
        //         <div className='flex justify-between'>

        //             <h2 className="mx-8 font-bold py-2 px-0 inline-block">Your Projects</h2>
        //             <div className='my-1'>
        //                 <button className="bg-orange-500 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4">
        //                     + New Project
        //                 </button>
        //                 <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4">
        //                     Save
        //                 </button>
        //             </div>
        //         </div>

        //         <table className=" text-sm text-left text-gray-500  mx-4 my-2">
        //             <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        //                 <tr>
        //                     <th scope="col" className="py-3 px-6">
        //                         Project name
        //                     </th>
        //                     <th scope="col" className="py-3 px-6">
        //                         Tech Stack Used
        //                     </th>
        //                     <th scope="col" className="py-3 px-6">
        //                         Faculty Menter
        //                     </th>

        //                     <th scope="col" className="py-3 px-6">
        //                         <span className="sr-only">Edit</span>
        //                     </th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr className="bg-white border-b   hover:bg-gray-50  ">
        //                     <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                         website for conference
        //                     </th>
        //                     <td className="py-4 px-6">
        //                         React
        //                     </td>
        //                     <td className="py-4 px-6">
        //                         Encode
        //                     </td>

        //                     <td className="py-4 px-6 text-right">
        //                         <a href="https://conference.icghgd.com/" className="font-medium text-blue-600  hover:underline">Link</a>
        //                     </td>
        //                 </tr>
        //                 <tr className="bg-white border-b   hover:bg-gray-50  ">
        //                     <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                         Project2
        //                     </th>
        //                     <td className="py-4 px-6">
        //                         Nodejs
        //                     </td>
        //                     <td className="py-4 px-6">
        //                         Faculty2
        //                     </td>

        //                     <td className="py-4 px-6 text-right">
        //                         {/* <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a> */}
        //                     </td>
        //                 </tr>
        //                 <tr className="bg-white border-b   hover:bg-gray-50  ">
        //                     <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                         Project2
        //                     </th>
        //                     <td className="py-4 px-6">
        //                         Nodejs Express
        //                     </td>
        //                     <td className="py-4 px-6">
        //                         Faculty3
        //                     </td>

        //                     <td className="py-4 px-6 text-right">
        //                         {/* <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a> */}
        //                     </td>
        //                 </tr>
        //                 <tr className="bg-white border-b   hover:bg-gray-50  ">
        //                     <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                         <input type="text"
        //                          name = "project-name"
        //                          id = "project-name"
        //                          />
        //                     </th>
        //                     <td className="py-4 px-6">
        //                         <input type="text" 
        //                         name = "tech-stack"
        //                         id = "tech-stack"
        //                         />
        //                     </td>
        //                     <td className="py-4 px-6"
        //                     >
        //                         <input type="text" name="faculty" id="faculty" />
        //                     </td>

        //                     <td className="py-4 px-6 text-right">
        //                         {/* <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a> */}
        //                         <input type="link" name = "link" id ="link" />
        //                     </td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //         <div>
        //             <>
        //                 <button
        //                     className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mx-5"
        //                     type="button"
        //                     onClick={() => setShowModal(true)}
        //                 >
        //                     Show Projects
        //                 </button>
        //                 {showModal ? (
        //                     <>
        //                         <div
        //                             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        //                         >
        //                             <div className="relative w-auto my-6 mx-auto max-w-3xl">
        //                                 {/*content*/}
        //                                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //                                     {/*header*/}
        //                                     <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        //                                         <h3 className="text-3xl font-semibold">
        //                                             Modal Title
        //                                         </h3>
        //                                         <button
        //                                             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        //                                             onClick={() => setShowModal(false)}
        //                                         >
        //                                             <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
        //                                                 ×
        //                                             </span>
        //                                         </button>
        //                                     </div>
        //                                     {/*body*/}
        //                                     <table className=" text-sm text-left text-gray-500  mx-4 my-2">
        //                                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        //                                             <tr>
        //                                                 <th scope="col" className="py-3 px-6">
        //                                                     Project name
        //                                                 </th>
        //                                                 <th scope="col" className="py-3 px-6">
        //                                                     Tech Stack Used
        //                                                 </th>
        //                                                 <th scope="col" className="py-3 px-6">
        //                                                     Faculty Menter
        //                                                 </th>

        //                                                 <th scope="col" className="py-3 px-6">
        //                                                     <span className="sr-only">Edit</span>
        //                                                 </th>
        //                                             </tr>
        //                                         </thead>
        //                                         <tbody>
        //                                             <tr className="bg-white border-b   hover:bg-gray-50  ">
        //                                                 <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                                                     Project1
        //                                                 </th>
        //                                                 <td className="py-4 px-6">
        //                                                     React
        //                                                 </td>
        //                                                 <td className="py-4 px-6">
        //                                                     Faculty1
        //                                                 </td>

        //                                                 <td className="py-4 px-6 text-right">
        //                                                     <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
        //                                                 </td>
        //                                             </tr>
        //                                             <tr className="bg-white border-b   hover:bg-gray-50  ">
        //                                                 <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                                                     Microsoft Surface Pro
        //                                                 </th>
        //                                                 <td className="py-4 px-6">
        //                                                     White
        //                                                 </td>
        //                                                 <td className="py-4 px-6">
        //                                                     Laptop PC
        //                                                 </td>

        //                                                 <td className="py-4 px-6 text-right">
        //                                                     <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
        //                                                 </td>
        //                                             </tr>
        //                                             <tr className="bg-white  hover:bg-gray-50 ">
        //                                                 <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  ">
        //                                                     Magic Mouse 2
        //                                                 </th>
        //                                                 <td className="py-4 px-6">
        //                                                     Black
        //                                                 </td>
        //                                                 <td className="py-4 px-6">
        //                                                     Accessories
        //                                                 </td>

        //                                                 <td className="py-4 px-6 text-right">
        //                                                     <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
        //                                                 </td>
        //                                             </tr>
        //                                         </tbody>
        //                                     </table>
        //                                     {/*footer*/}
        //                                     <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        //                                         <button
        //                                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //                                             type="button"
        //                                             onClick={() => setShowModal(false)}
        //                                         >
        //                                             Close
        //                                         </button>
        //                                         <button
        //                                             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //                                             type="button"
        //                                             onClick={() => setShowModal(false)}
        //                                         >
        //                                             Save Changes
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        //                     </>
        //                 ) : null}
        //             </>
        //         </div>
        //     </div>
        // </div>
        
            <div className="dynamic-project-table">
                <div>
            <table>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Tech Stack Used</th>
            <th>Faculty Member</th>
            <th>Project link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.projectName}</td>
              <td>{row.techStackUsed}</td>
              <td>{row.facultyMember}</td>
              <td>
                <a href={row.projectLink}>
                    Link
                </a>
              </td>
              <td>
                <button onClick={() => handleEditRow(index)}>Edit</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input 
                type="text"
                name="techStackUsed"
                value={formData.techStackUsed}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="facultyMember"
                value={formData.facultyMember}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="projectLink"
                value={formData.projectLink}
                onChange={handleInputChange}
              />
            </td>
            <td>
              {isEditing ? (
                <>
                  <button onClick={handleSaveRow}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <button onClick={handleAddRow}>Add</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
            </div>
      
    
    )
}
