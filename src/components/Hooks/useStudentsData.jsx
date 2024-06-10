import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Common/AuthProvider"

const useStudentsData = () => {
  

    const {user}= useContext(AuthContext)
         
    const [records,setRecord]= useState([])

    useEffect(()=>{

       axios.get(`http://localhost:5000/students?email=${user?.email}`)
       .then(res=> {
        
         
        setRecord(res.data)} )
       .catch(err=>console.log(err))




    },[])

    return records
}

export default useStudentsData
