import { apiClient } from "../api"



export const getAppointment = ()=>{
    return apiClient.get('/appointmentApi')
}

export const createAppointment = (data)=>{
    return apiClient.post('/appointmentApi/',data)
}

export const getDepartment = ()=>{
    return apiClient.get('/departmentApi')
}
