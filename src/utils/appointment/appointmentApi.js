import { apiClient } from "../api"



export const getAppointment = ()=>{
    return apiClient.get('/appointmentApi')
}

export const createAppointment = (data)=>{
    return apiClient.post('/appointmentApi',data)
}

export const updateAppointment = (data)=>{
    return apiClient.put(`/appointmentApi/${data.id}`,data.data)
}

export const deleteAppointmnet = (id)=>{
    return apiClient.delete(`/appointmentApi/${id}`)
}