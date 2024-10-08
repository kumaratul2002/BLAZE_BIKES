import axios from "axios";
import { message } from "antd";
export const bookCycle = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
     await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/bookcycle` , reqObj);
    dispatch({ type: "LOADING", payload: false });
    message.success("Your Bike booked successfully");
    setTimeout(() => {
      window.location.href='/userbookings'
    }, 500);

    
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};

export const getAllBookings=()=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/getallbookings`)
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}