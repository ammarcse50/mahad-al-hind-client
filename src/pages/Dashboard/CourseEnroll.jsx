import axios from "axios";
import { useContext, useEffect, useState } from "react";
import EnrolledCard from "./EnrolledCard";
import { AuthContext } from "../../components/Common/AuthProvider";
import useStudentsData from "../../components/Hooks/useStudentsData";

const CourseEnroll = () => {

     
  
     const records =  useStudentsData();

    return (
        <div className='text-center text-5xl p-10'>
          
            {
                records.map(record => <EnrolledCard key={record._id} record={record}></EnrolledCard>)
            }
        </div>
    );
};

export default CourseEnroll;