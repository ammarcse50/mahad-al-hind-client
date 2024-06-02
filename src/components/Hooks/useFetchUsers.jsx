import axios from "axios"
import { useEffect } from "react"

const useFetchUsers = () => {
 

    useEffect(()=>{

        axios.get('http://localhost:5000/users')
        



    },[])
}

export default useFetchUsers
