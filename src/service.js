import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


axios.defaults.baseURL=process.env.REACT_APP_API_URL;


axios.interceptors.response.use(function (response) {
  console.log("successfull",response.status);    
  return response;   
}, function (error) {     
  console.log("error: ",error);
  return Promise.reject(error);   
});

export default {
  getTasks: async () => {
    const result = await axios.get();
    return result.data;
  },

  addTask: async(name,isComplete)=>{
    console.log('addTask', name);
    const result= await axios.post(`/`,{name,isComplete:false});
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete});
    const result=await axios.put(`/${id}`,{isComplete})
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result=await axios.delete(`/${id}`);
    return result.data;
  }
};
