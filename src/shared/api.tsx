import React from 'react'
import axios from 'axios'

const baseApi:string="http://localhost:2626"

export const API = async(method:string,path:any,data:any)=>{
    axios.defaults.headers.common['Auth_Token']="token"
    const api=`${baseApi}${path}`
    switch (method){
        case 'post':
            return axios.post(api,data);
        case 'put':
            return axios.put(api,data);
        default :
            return axios.get(api,data);
    }
 
    
}
export const lsGet=async(key:string)=>{
    return await localStorage.getItem(key)
}
export const lsSet=async(key:any,value:any)=>{
    return await localStorage.setItem(key,value)
}
export const lsClear=async()=>{
    await localStorage.clear()
}