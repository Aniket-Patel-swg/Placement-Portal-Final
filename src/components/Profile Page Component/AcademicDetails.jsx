import React, { useState} from 'react'
import './Css/AcademicDetails.css'

export const AcademicDetails = () => {

     const [editMode, setEditMode] = useState(false)
     const [academicProfile, setAcademicProfile] = useState({
        rollNo : "21BCP256",
        SGPA : "9.2",
        Branch : "Computer Science and Engineering"
    }) 

    const handleEditClick = () =>{
        setEditMode(true);
    }

    return (
        <>
            <div className="bg-gray-200 rounded-3xl mx-4 py-4">
                <div className="table-head">
                    <div className="heading">
                        <h2 className="mx-8 font-bold py-2 px-0">Academic Details</h2> 
                    </div>
                    <div className="edit-button">
                        <button onClick={handleEditClick}>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <tbody>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-900 whitespace-nowrap ">
                                    Roll NO
                                </th>
                                <td className="py-4 px-6">
                                    {academicProfile.rollNo}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-500 whitespace-nowrap ">
                                    CGPA
                                </th>
                                <td className="py-4 px-6">
                                    {academicProfile.SGPA}
                                </td>
                            </tr>
                            <tr className="bg-white  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white-900 whitespace-nowrap ">
                                    BRANCH
                                </th>
                                <td className="py-4 px-6">
                                    {academicProfile.Branch}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
