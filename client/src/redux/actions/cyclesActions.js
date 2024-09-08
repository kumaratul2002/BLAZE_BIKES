import { message } from 'antd';
import axios from 'axios';

export const getAllCycles=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cycles/getallcycles`)
        dispatch({type: 'GET_ALL_CYCLES', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

export const addCycle=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        console.log("Bike adding")
         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/cycles/addcycle` , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New Bike Details added successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const editCycle=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/cycles/editcycle` , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Bike details updated successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const deleteCycle=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/cycles/deletecycle` , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Bike deleted successfully')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}